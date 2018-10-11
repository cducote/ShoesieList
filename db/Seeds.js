require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true } )

const Schema = require('./Schema.js')

const { User, Shoe } = Schema

const chris = new User({
  name: 'Chris',
  avatar: 'https://scontent-atl3-1.cdninstagram.com/vp/1623f8b6cdf07e7b681798de55af0f38/5C4AA37D/t51.2885-19/s320x320/25006611_2000806196840068_6208027273887481856_n.jpg',
  wishList: []
})

const nike1 = new Shoe({
  name: 'Free-Run',
  brand: 'Nike',
  Price: 99.99,
  img: 'https://www.sneakerhouse.pl/images/classics/3000-4000/Nike-Free-RN_%5B3898%5D_1200.jpg',
  wishers: []
})

const addidas1 = new Shoe({
  name: 'Ultra Boost 4.0',
  brand: 'Addidas',
  Price: 99.99,
  img: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/06/mens-street-style-adidas-ultra-boost-1.0-cream-1170x599.jpg',
  wishers: []
})
const newbalance1 = new Shoe({
  name: '420',
  brand: 'New Balance',
  Price: 99.99,
  img: 'https://asphaltgold.de/media/catalog/product/cache/1/image/930x669/0f396e8a55728e79b48334e699243c07/n/e/new-balance-wrl420ea-bone-wrl420ea-1.jpg',
  wishers: []
})
const vans1 = new Shoe({
  name: 'Sk8-Hi MTE',
  brand: 'Vans',
  Price: 99.99,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS607fXar6Glt64TWFjhgmlsc_2horrod7Y53rKewTPMK3G9CKJuQ',
  wishers: []
})
const converse1 = new Shoe({
  name: 'Midnight Studios',
  brand: 'Converse',
  Price: 99.99,
  img: 'https://media.gq.com/photos/5b203639525bfc1dee1a6620/master/pass/Converse_00A90003_RT.jpg',
  wishers: []
})
const nike2 = new Shoe({
  name: 'Free X Metcon',
  brand: 'Nike',
  Price: 99.99,
  img: 'https://sneakerbardetroit.com/wp-content/uploads/2018/03/nike-free-x-metcon-release-date-AH8141-004.jpg',
  wishers: []
})
const addidas2 = new Shoe({
  name: 'Ultra Boost',
  brand: 'Addidas',
  Price: 99.99,
  img: 'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/adidas-ultra-boost-cream-boostvibes_vjuxy6.jpg',
  wishers: []
})
const vans2 = new Shoe({
  name: 'Old Skool',
  brand: 'Vans',
  Price: 99.99,
  img: 'https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/07/Vans-Old-Skool-Trainers-All-You-Need-To-Know-1170x657.jpg',
  wishers: []
})

User.deleteMany({})
  .then(() => chris.wishList.push(nike1._id))
  .then(() => chris.save())


Shoe.deleteMany({})
  .then(() => nike1.wishers.push(chris._id))
  .then(() => nike1.save())
  .then(() => nike2.save())
  .then(() => addidas1.save())
  .then(() => addidas2.save())
  .then(() => newbalance1.save())
  .then(() => converse1.save())
  .then(() => vans1.save())
  .then(() => vans2.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

  