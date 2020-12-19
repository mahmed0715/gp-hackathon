const { validateCreateCustomer } = require('./validateCreateCustomer')
const { validateDeleteCustomer } = require('./validateDeleteCustomer')
const { validateGetCustomer } = require('./validateGetCustomer')
const { validateUpdateCustomer } = require('./validateUpdateCustomer')

module.exports = {
  validateCreateCustomer,
  validateDeleteCustomer,
  validateGetCustomer,
  validateUpdateCustomer
}
