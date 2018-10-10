require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true } )

const Schema = require('./Schema.js')

const { User, Shoe } = Schema

const chris = new User({
  name: 'Chris',
  wishList: []
})

const nike = new Shoe({
  name: 'Free-Run',
  brand: 'Nike',
  Price: 99.99,
  img: 'https://www.sneakerhouse.pl/images/classics/3000-4000/Nike-Free-RN_%5B3898%5D_1200.jpg',
  wishers: []
})

User.deleteMany({})
  .then(() => chris.wishList.push(nike._id))
  .then(() => chris.save())


Shoe.deleteMany({})
  .then(() => nike.wishers.push(chris._id))
  .then(() => nike.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

  