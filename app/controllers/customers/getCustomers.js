const Customer = require('../../models/Customer')
const { checkQueryString, getItems } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCustomers = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Customer, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getCustomers }
