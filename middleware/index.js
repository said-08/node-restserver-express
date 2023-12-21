const validatorInputs = require('../middleware/validator-inputs');
const validatorJWT = require('../middleware/validator-jwt');
const validatorRoles = require('../middleware/validator-roles');

module.exports = {
  ...validatorInputs,
  ...validatorJWT,
  ...validatorRoles
}