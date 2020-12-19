const { createRoom } = require('./createRoom')
const { deleteRoom } = require('./deleteRoom')
const { getRoom } = require('./getRoom')
const { getAllRooms } = require('./getAllRooms')
const { getRooms } = require('./getRooms')
const { updateRoom } = require('./updateRoom')

module.exports = {
  getAllRooms,
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom
}
