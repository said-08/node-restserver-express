const jwt = require('jsonwebtoken')

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = uid;

    jwt.sign( payload, process.env.SECRETEORPRIVATEKEY, (err, token) => {
      if (err) {
        console.log(err);
        reject('no se puede generar el token');
      } else {
        resolve(token)
      }
    })
  });
}

module.exports = {
  generateJWT
}