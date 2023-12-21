const Role = require('../models/role')
const User = require('../models/user')

const isRoleAllowed = async(role = '') => {
  const roleExists = await Role.findOne({role});
  if (!roleExists) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
}

const alreadyExistsEmail = async(email='') => {
  const existEmail = await User.findOne({ email: email });
  if (existEmail) {
      throw new Error(`El correo ${email} ya está registrado en la BD`);
  }
}

const alreadyExistsId = async(id) => {
  const existId = await User.findById(id);
  if (!existId) {
      throw new Error(`El id ${id} no existe!!`);
  }
}

module.exports = {
  isRoleAllowed,
  alreadyExistsEmail,
  alreadyExistsId
}