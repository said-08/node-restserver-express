
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

const postUser = (req, res) => {
  const body = req.body;
  res.json({
    msg: "post API - controller",
    body
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