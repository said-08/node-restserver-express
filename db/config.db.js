const mongoose = require('mongoose');

const dbConnection = async() => {
  
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS);
    console.log('Base de Datos Chimba!!')
  } catch (error) {
    console.log(error, 'ERRO BD')
    throw new Error('Error en la BD');
  }

}

module.exports = {
  dbConnection
}