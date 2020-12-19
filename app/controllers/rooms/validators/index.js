const { validateCreateRoom } = require('./validateCreateRoom')
const { validateDeleteRoom } = require('./validateDeleteRoom')
const { validateGetRoom } = require('./validateGetRoom')
const { validateUpdateRoom } = require('./validateUpdateRoom')

module.exports = {
  validateCreateRoom,
  validateDeleteRoom,
  validateGetRoom,
  validateUpdateRoom
}
