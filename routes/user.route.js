const { Router } = require('express');
const { getUsers, putUser, postUser, deleteUser } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { validator } = require('../middleware/validator-inputs');

const router = Router();

router.get('/', getUsers)

router.put('/:id', putUser)

router.post('/', [
  check('name', 'el nombre es obligatorio').not().isEmpty(),
  check('password', 'password es obligatorio').not().isEmpty(),
  check('email', 'Esto no es un correo').isEmail(),
  validator
], postUser)

router.delete('/', deleteUser)

module.exports = router;