require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true } )

const Schema = require('./Schema.js')

const { User, Shoe } = Schema

const chris = new User({
  name: 'Chris',
  shoes: []
})

const nike = new Shoe({
  name: 'Free-Run',
  brand: 'Nike',
  Price: 99.99,
  wishers: []
})

User.deleteMany({})
  .then(() => chris.shoes.push(nike._id))
  .then(() => nike.wishers.push(chris._id))
  .then(() => chris.save())
  .then(() => nike.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

  