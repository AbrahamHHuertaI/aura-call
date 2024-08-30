require('colors');
const OpenAI = require('openai');
const { Buffer } = require('node:buffer');
const EventEmitter = require('events');

class TranscriptionService extends EventEmitter {
  constructor() {
    super();
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.finalResult = '';
    this.speechFinal = false;
  }

  /**
   * Transcribe the audio using OpenAI's Whisper model
   * @param {Buffer} audioBuffer A Buffer containing the audio stream
   */
  async transcribe(audioBuffer) {
    try {
      console.log('Transcribing audio with OpenAI Whisper model...');
      if(audioBuffer.length === 0) {
        console.log('Audio buffer is empty');
        this.emit('transcription', 'Dame información');
        return;
      }
      const response = await this.openai.audio.transcriptions.create({
        file: audioBuffer,
        model: 'whisper-1', // El modelo puede variar, asegúrate de elegir el adecuado
      });

      const text = response.text;

      // Emitir el texto transcrito
      this.emit('transcription', text);
    } catch (error) {
      console.error('Error al transcribir el audio con OpenAI:', error);
      this.emit('error', error);
    }
  }

  /**
   * Send the payload to OpenAI for transcription
   * @param {String} payload A base64 encoded audio stream
   */
  send(payload) {
    const audioBuffer = Buffer.from(payload, 'base64');
    this.transcribe(audioBuffer);
  }
}

module.exports = { TranscriptionService };
