const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const RoomSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: 'room'
    },
    bedCount: {
      type: Number,
      default: 1
    },
    location: {
      type: String
    },
    available: {
      type: Boolean,
      required: true,
      default: true
    },
    condition: {
      type: String,
      default: 'good'
    }
   
  },
  {
    versionKey: false,
    timestamps: true
  }
)
RoomSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Room', RoomSchema)
