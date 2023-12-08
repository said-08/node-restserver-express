const express = require('express')
const cors = require('cors')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users'

    //middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    this.app.use(express.json())

    //Directorio Público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.route'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ', this.port)
    })
  }
  
}

module.exports = Server;