const { Router } = require('express');
const { getUsers, putUser, postUser, deleteUser } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { isRoleAllowed, alreadyExistsEmail, alreadyExistsId } = require('../helpers/db-validator');

const {
  validator,
  validatorJWT,
  esAmdinRole,
  tieneRole
} = require('../middleware')

const router = Router();

router.get('/', getUsers)

router.put('/:id', [
  check('id', 'No es un Id valido, mi perro').isMongoId(),
  check('id').custom(alreadyExistsId),
  validator
], putUser)

router.post('/', [
  check('name', 'el nombre es obligatorio').not().isEmpty(),
  check('password', 'password es obligatorio').not().isEmpty(),
  check('email', 'Esto no es un correo').isEmail(),
  check('email').custom(alreadyExistsEmail).isEmail(),
  check('role').custom(isRoleAllowed),
  validator
], postUser)

router.delete('/:id', [
  validatorJWT,
  esAmdinRole,
  tieneRole('ADMIN_ROLE', 'SALES_ROLE'),
  check('id', 'No es id Válido').isMongoId(),
], deleteUser)

module.exports = router;