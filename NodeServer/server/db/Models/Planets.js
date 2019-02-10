const conn = require('../conn')

const Planets = conn.define('planet', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: conn.Sequelize.TEXT,
    allowNull: false
  },
  imgUrl: {
    type: conn.Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Planets