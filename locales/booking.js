const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../app/controllers/auth')

const {
  getBookings,
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking
} = require('../app/controllers/bookings')

const {
  validateCreateBooking,
  validateGetBooking,
  validateUpdateBooking,
  validateDeleteBooking
} = require('../app/controllers/bookings/validators')

/*
 * Bookings routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getBookings
)

/*
 * Create new item route
 */
// router.post(
//   '/',
//   requireAuth,
//   roleAuthorization(['admin']),
//   trimRequest.all,
//   validateCreateBooking,
//   createBooking
// )

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetBooking,
  getBooking
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateBooking,
  updateBooking
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteBooking,
  deleteBooking
)

module.exports = router
