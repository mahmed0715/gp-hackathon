const { createCustomer } = require('./createCustomer')
const { deleteCustomer } = require('./deleteCustomer')
const { getAllCustomers } = require('./getAllCustomers')
const { getCustomer } = require('./getCustomer')
const { getCustomers } = require('./getCustomers')
const { updateCustomer } = require('./updateCustomer')

module.exports = {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomer,
  getCustomers,
  updateCustomer
}
