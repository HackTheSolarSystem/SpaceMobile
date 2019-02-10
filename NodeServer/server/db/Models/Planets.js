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
  },
  distanceActual:{
    type: conn.Sequelize.INTEGER,
    allowNull: false
  },
  distanceRoom: {
    type: conn.Sequelize.INTEGER,
    allowNull: false
  },
  SpeedActual:{
    type: conn.Sequelize.INTEGER,
    allowNull: false
  },
  SpeedRoom:{
    type: conn.Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Planets