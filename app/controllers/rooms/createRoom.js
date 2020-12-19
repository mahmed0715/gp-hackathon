const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const Room = require('../../models/Room')
const Customer = require('../../models/Customer')
const {
  emailExists,
  sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')
const {createItem} = require('../../middleware/db')

const debug = require('debug')('Room');


/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createRoom = async (req, res) => {
  try {
    req = matchedData(req, {includeOptionals: true})
    debug(req)
    // const roomAvailable = await roomAvailable(req.body)
    //
    //  if (!doesEmailExists) {
      // const RoomData = await createItem(req.body, Room)
    const item = await createItem(req.body, Room)
      res.status(201).json(item)
    // }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createRoom }
