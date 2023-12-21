const User = require('../models/user')

const getUsers = async(req, res) => {

  const {limite = 5} = req.query;

  const users = await User.find()
  .limit(Number(limite))

  res.json({
    users
  })
}

const putUser = async(req, res) => {

  const {id} = req.params.id;
  const {_id, password, email, google, ...resto} = req.body;

  if (password) {
    console.log("Password actualizada")
  }

  const userUpdated = await User.findByIdAndUpdate(id, resto)

  res.json({
    msg: "put API - controller",
    userUpdated
  })
}

const postUser = async(req, res) => {

  const body = req.body;
  const user = new User(body);

  // const existEmail = await User.findOne({ email: body.email });
  // if (existEmail) {
  //   return res.status(400).json({
  //     msg: "el correo ya está registrado"
  //   })
  // }

  await user.save();

  res.json({
    msg: "post API - controller",
    user
  })
}

const deleteUser = async(req, res) => {

  const {id} = req.params;

  const userAuth = req.user;

  //ELiminar de forma Fisica
  const userDeleted = await User.findByIdAndDelete(id)

  res.json({
    userDeleted,
    userAuth
  })
}

module.exports = {
  getUsers,
  putUser,
  postUser,
  deleteUser
}