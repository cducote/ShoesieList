const express = require('express')
const router = express.Router({ mergeParams: true })

const { Shoe } = require('../db/Schema')

// Show all
router.get('/', async (req, res) => {
  const shoes = await Shoe.find()
  res.send(shoes)
})

// Show One
router.get('/:id', async (req, res) => {
  const shoe = await Shoe.findById(req.params.id)
  res.send(shoe)
})

// Create
router.post('/', async (req, res) => {
  const shoe = await Shoe.create(req.body)
  res.send(shoe)
})

// Update
router.put('/:id', async (req, res) => {
  const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(shoe)
})

// Delete
router.delete('/id', async (req, res) => {
  const shoe = await Shoe.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router;