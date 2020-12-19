const Customer = require('../../../models/Customer')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a Customer already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const CustomerExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    Customer.findOne(
      {
        name,
        _id: {
          $ne: id
        }
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

module.exports = { CustomerExistsExcludingItself }
