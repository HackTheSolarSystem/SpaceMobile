const conn = require('./conn')
const Planets = require('./Models/Planets') 

const syncAndSeed = () => {
  let sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
  return conn.sync({ force: true })
  .then(() => Promise.all([
    Planets.create({
      name: 'Sun',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/W3Gprpw8/Planet-500x500-sun.png',
      distanceActual: 0,
      distanceRoom: 0,
      speedActual: 0,
      speedRoom: 0,
    }),
    Planets.create({
      name: 'Mercury',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/mkk3knQb/Planet-500x500-Mercury.png',
      distanceActual: 150,
      distanceRoom: 1,
      speedActual: 195,
      speedRoom: 2,
    }),
    Planets.create({
      name: 'Venus',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/qvP1Yp22/Planet-500x500-Venus.png',
      distanceActual: 280,
      distanceRoom: 2,
      speedActual: 143,
      speedRoom: 1.9,
    }),
    Planets.create({
      name: 'Earth',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/g0DCd9Mr/Planet-500x500-Earth.png',
      distanceActual: 389,
      distanceRoom: 3,
      speedActual: 121,
      speedRoom: 1.8,
    }),
    Planets.create({
      name: 'Mars',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/m203Z8hs/Planet-500x500-Mars.png',
      distanceActual: 594,
      distanceRoom: 4,
      speedActual: 98,
      speedRoom: 1.4,
    }),
    Planets.create({
      name: 'Jupiter',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/RhgPbfT0/Planet-500x500-Jupiter.png',
      distanceActual: 2026,
      distanceRoom: 8,
      speedActual: 53,
      speedRoom: 0.8,
    }),
    Planets.create({
      name: 'Saturn',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/PrF3WWx3/Planet-500x500.png',
      distanceActual: 3713,
      distanceRoom: 15,
      speedActual: 40,
      speedRoom: 0.6,
    }),
    Planets.create({
      name: 'Uranus',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/vTZh9Tdw/Planet-500x500-uranus.png',
      distanceActual: 7468,
      distanceRoom: 29,
      speedActual: 28,
      speedRoom: 0.4,
    }),
    Planets.create({
      name: 'Neptune',
      description: 'Its hot',
      imgUrl: 'https://i.postimg.cc/sfTwzYpj/Planet-500x500-Neptune.png',
      distanceActual: 11700,
      distanceRoom: 45,
      speedActual: 22,
      speedRoom: 0.3,
    })
  ]))
}


module.exports = {
  syncAndSeed
}