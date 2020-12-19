const Customer = require('../../models/Customer')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { CustomerExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateCustomer = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesCustomerExists = await CustomerExistsExcludingItself(id, req.name)
    if (!doesCustomerExists) {
      res.status(200).json(await updateItem(id, Customer, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateCustomer }
