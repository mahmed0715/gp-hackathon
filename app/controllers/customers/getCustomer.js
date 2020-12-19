const { matchedData } = require('express-validator')
const Customer = require('../../models/Customer')
const { getItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCustomer = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, Customer))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCustomer }
