const {Schema, model} = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'este campo es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'este campo es obligatorio']
  },
  password: {
    type: String,
    required: [true, 'este campo es obligatorio']
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  },
  state: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  },
})

UserSchema.methods.toJSON = function() {
  const {__v, password, _id, ...newUser} = this.toObject();
  newUser.uid = _id
  return newUser;
}

module.exports = model( 'User', UserSchema );