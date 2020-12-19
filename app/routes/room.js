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
  getAllRooms,
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom
} = require('../controllers/rooms')

const {
  validateCreateRoom,
  validateGetRoom,
  validateUpdateRoom,
  validateDeleteRoom
} = require('../controllers/rooms/validators')

/*
 * Rooms routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllRooms)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getRooms
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  createRoom
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetRoom,
  getRoom
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateRoom,
  updateRoom
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteRoom,
  deleteRoom
)

module.exports = router
