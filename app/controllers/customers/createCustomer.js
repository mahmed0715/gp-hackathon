const Customer = require('../../models/Customer')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { CustomerExists } = require('./helpers')
const debug = require('debug')('customer');

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createCustomer = async (req, res) => {
  try {
    debug(req.body);  
    req = matchedData(req)
    debug(req);
    const doesCustomerExists = await CustomerExists(req.email)
    if (!doesCustomerExists) {
      res.status(201).json(await createItem(req, Customer))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createCustomer }
