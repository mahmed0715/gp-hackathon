const Customer = require('../../../models/Customer')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a Customer already exists in database
 * @param {string} email - email of item
 */
const CustomerExists = (email = '') => {
  return new Promise((resolve, reject) => {
    Customer.findOne(
      {
        email
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'Customer_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { CustomerExists }
