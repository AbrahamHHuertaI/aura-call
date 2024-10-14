const axios = require('axios');
require('dotenv').config();

async function cliente(functionArgs) {
  const model = functionArgs;
  console.log('GPT -> called cliente function', functionArgs);

  const response = await axios.post(`https://${process.env.SERVER}/send-message`, {
    message: `El cliente ${model.nombre} de la empresa ${model.nombre_empresa} tiene una cita el ${model.cita} para ${model.proposito}.`,
  });

  const response1 = await axios.post(`https://automation.cooperbot.com.mx/webhook/32839393-9d5d-48e4-bc36-ae930fbbd2d0`, {
    "start": "2024-10-14 12:30",
    "end": "2024-10-14 13:00",
    "user": "abraham.huerta@inceptio.com.mx",
    message: `El cliente ${model.nombre} de la empresa ${model.nombre_empresa} tiene una cita el ${model.cita} para ${model.proposito}.`,
  });
  
  return JSON.stringify({
    model: model,
    nombre: model.nombre,
    nombre_empresa: model.nombre_empresa,
    proposito: model.proposito,
    cita: model.cita,
  })
}

module.exports = cliente;