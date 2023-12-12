const User = require('../models/user')

const getUsers = (req, res) => {
  res.json({
    msg: "get API - controller",
  })
}

const putUser = (req, res) => {

  const id = req.params.id;
  const query = req.query;

  res.json({
    msg: "put API - controller",
    id,
    query
  })
}

const postUser = async(req, res) => {

  const body = req.body;
  const user = new User(body);

  const existEmail = await User.findOne({ email: body.email });
  if (existEmail) {
    return res.status(400).json({
      msg: "el correo ya está registrado"
    })
  }

  await user.save();

  res.json({
    msg: "post API - controller",
    user
  })
}

const deleteUser = (req, res) => {
  res.json({
    msg: "delete API - controller",
  })
}

module.exports = {
  getUsers,
  putUser,
  postUser,
  deleteUser
}