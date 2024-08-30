const axios = require('axios');
require('dotenv').config();

async function cliente(functionArgs) {
  const model = functionArgs;
  console.log('GPT -> called cliente function', functionArgs);

  const response = await axios.post(`http://${process.env.SERVER}/send-message`, {
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