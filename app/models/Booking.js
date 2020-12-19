const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')

const BookingSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: true
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    arival: {
      type: Date,
      default: new Date().toISOString()
    },
    bookTime: {
      type: Date,
      required: true,
      default: new Date().toISOString()
    },
    bookType: {
      type: String,
      default: 'normal'
    },
    due: {
      type: Number,
      default: 0
    },
    payments: [{
      amount: Number, 
      date: Date
    }]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

BookingSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Booking', BookingSchema)
