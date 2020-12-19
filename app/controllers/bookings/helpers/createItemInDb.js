const uuid = require('uuid')
const Booking = require('../../../models/Booking')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({
  name = '',
  email = '',
  password = '',
  role = '',
  phone = '',
  city = '',
  country = ''
}) => {
  return new Promise((resolve, reject) => {
    const booking = new Booking({
      name,
      email,
      password,
      role,
      phone,
      city,
      country,
      verification: uuid.v4()
    })
    booking.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      delete item.password
      delete item.blockExpires
      delete item.loginAttempts

      resolve(item)
    })
  })
}

module.exports = { createItemInDb }
