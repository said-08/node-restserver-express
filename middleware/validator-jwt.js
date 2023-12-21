const jwt = require("jsonwebtoken");
const User = require('../models/user')

const validatorJWT = async(req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      msg: "Parce, no hay token, tuki tuki!"
    });
  };

  try {
    const uid = jwt.verify(token, process.env.SECRETEORPRIVATEKEY);
    console.log(uid, "sada")

    const uiser = await User.findById( uid );

    if (!uiser) {
      return res.status(401).json({
        msg: "TOken no valido, bro"
      })
    }

    req.user = uiser;
    next();
    
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "token no válido"
    })
  }

  console.log(token);
}

module.exports = {
  validatorJWT
}