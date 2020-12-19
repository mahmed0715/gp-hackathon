const uuid = require('uuid')
const Room = require('../../../models/Room')
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
    const Room = new Room({
      name,
      email,
      password,
      role,
      phone,
      city,
      country,
      verification: uuid.v4()
    })
    Room.save((err, item) => {
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
