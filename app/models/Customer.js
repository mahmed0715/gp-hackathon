const mongoose = require('mongoose')
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2')

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: 'EMAIL_IS_NOT_VALID'
      },
      lowercase: true,
      unique: true,
      required: true
    },
   
    phone: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

CustomerSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Customer', CustomerSchema)
