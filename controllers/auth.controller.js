const { generateJWT } = require('../helpers/generateJWT');
const User = require('../models/user')

const login = async(req, res) => {

  const { email, password } = req.body;

  try {

    //Verificar si el correo existe!!
    const user = await User.findOne({email})
    if (!user) {
      return res.status(400).json({
        msg: "Este correo no existe, broo"
      })
    }
    
    //Si el usuario está activo
    if (!user.state) {
      return res.status(400).json({
        msg: "Este correo no existe, broo-estado false"
      })
    }

    //Validar la contraseña
    const pass = await User.findOne({password})
    if (!pass) {
      return res.status(400).json({
        msg: "Contraseña incorrecta, broo"
      })
    }

    //Generar JWT
    const token = await generateJWT(user.id);

    res.json({
      user,
      token
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      msg: "Algo salió mal en el LOGIN"
    })
  }


}

module.exports = {
  login
}