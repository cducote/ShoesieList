const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  avatar: String,
  wishList: [{ type: Schema.Types.ObjectId, ref: 'Shoe'}]
})

const ShoeSchema = new Schema({
  name: String,
  brand: String,
  Price: Number,
  img: String,
  wishers: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const UserModel = mongoose.model('User', UserSchema)
const ShoeModel = mongoose.model('Shoe', ShoeSchema)

module.exports = {
  User: UserModel,
  Shoe: ShoeModel
}