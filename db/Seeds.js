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

  