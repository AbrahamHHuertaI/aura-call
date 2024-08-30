// create metadata for all the available functions to pass to completions API
const tools = [
  {
    type: 'function',
    function: {
      name: 'cliente',
      say: 'estoy guardando tu información de contacto.',
      description: 'Guarda la información de contacto del cliente.',
      parameters: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'El nombre del cliente.',
          },
          nombre_empresa: {
            type: 'string',
            description: 'El nombre de la empresa del cliente.',
          },
          proposito: {
            type: 'string',
            description: 'El propósito de la llamada.',
          },
          cita: {
            type: 'string',
            description: 'La fecha y hora de la cita.',
          }
        },
        required: ['model'],
      },
      returns: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'El nombre del cliente.',
          },
          nombre_empresa: {
            type: 'string',
            description: 'El nombre de la empresa del cliente.',
          },
          proposito: {
            type: 'string',
            description: 'El propósito de la llamada.',
          },
          cita: {
            type: 'string',
            description: 'La fecha y hora de la cita.',
          }
        },
      }
    }
  },
];

module.exports = tools;