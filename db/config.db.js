const mongoose = require('mongoose');

const dbConnection = async() => {
  
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de Datos Chimba!!')
  } catch (error) {
    console.log(error, 'picha')
    throw new Error('Error en la BD');
  }

}

module.exports = {
  dbConnection
}