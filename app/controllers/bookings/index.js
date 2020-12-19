const { createBooking } = require('./createBooking')
const { deleteBooking } = require('./deleteBooking')
const { getBooking } = require('./getBooking')
const { getAllBookings } = require('./getAllBookings')
const { getBookings } = require('./getBookings')
const { updateBooking } = require('./updateBooking')

module.exports = {
  getAllBookings,
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  updateBooking
}
