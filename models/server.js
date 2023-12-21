const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../db/config.db');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    this.authPath = '/api/auth';

    //Coneccion BD
    this.conectarBD();

    //middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  async conectarBD() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    this.app.use(express.json())

    //Directorio Público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.authPath, require('../routes/auth.route'))
    this.app.use(this.usersPath, require('../routes/user.route'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ', this.port)
    })
  }
  
}

module.exports = Server;