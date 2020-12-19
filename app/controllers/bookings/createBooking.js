const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')
const Booking = require('../../models/Booking')
const Room = require('../../models/Room')
const Customer = require('../../models/Customer')
const {
  emailExists,
  sendRegistrationEmailMessage
} = require('../../middleware/emailer')
const { createItemInDb } = require('./helpers')
const {createItem, getItemByKey} = require('../../middleware/db')

const debug = require('debug')('Booking');


/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createBooking = async (req, res) => {
  try {
    // req = matchedData(req, {includeOptionals: true})
    debug(req.body)
    // const roomAvailable = await roomAvailable(req.body)
    //
    //  if (!doesEmailExists) {
      // const RoomData = await createItem(req.body, Room)
     try{
        var CustomerData = await createItem(req.body, Customer) 
        req.body.customer = CustomerData._id;
     }catch(error){
      var CustomerData = await getItemByKey('email', Customer, req.body.email);
      debug(CustomerData)
      req.body.customer = CustomerData._id;
     }  
    const item = await createItem(req.body, Booking)
      res.status(201).json(item)
    // }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createBooking }
