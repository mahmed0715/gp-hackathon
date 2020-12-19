const { itemNotFound } = require('../utils')

/**
 * Gets item from database by id
 * @param {string} id - item id
 */
const getItemByKey = (key = '', model = {}, value = '') => {
  return new Promise((resolve, reject) => {
    model.find({[key]: value}, async (err, item) => {
      try {
        resolve(item[0])
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getItemByKey }
