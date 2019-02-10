const conn = require('./conn')
const Planets = require('./Models/Planets') 

const seed = () => {
  


}

const sync = () => {
  return conn.sync({ force: true })
}

module.exports = {
  seed,
  sync
}