const { validateCreateBooking } = require('./validateCreateBooking')
const { validateDeleteBooking } = require('./validateDeleteBooking')
const { validateGetBooking } = require('./validateGetBooking')
const { validateUpdateBooking } = require('./validateUpdateBooking')

module.exports = {
  validateCreateBooking,
  validateDeleteBooking,
  validateGetBooking,
  validateUpdateBooking
}
