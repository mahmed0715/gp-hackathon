const { validateResult } = require('../../../middleware/utils')
const validator = require('validator')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateRoom = [
 
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateRoom }
