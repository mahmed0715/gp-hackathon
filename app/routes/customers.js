const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  getAllCustomers,
  getCustomers,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customers')

const {
  validateCreateCustomer,
  validateGetCustomer,
  validateUpdateCustomer,
  validateDeleteCustomer
} = require('../controllers/customers/validators')

/*
 * Customers routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllCustomers)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getCustomers
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateCustomer,
  createCustomer
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetCustomer,
  getCustomer
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateCustomer,
  updateCustomer
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteCustomer,
  deleteCustomer
)

module.exports = router
