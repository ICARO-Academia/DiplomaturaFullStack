// controllers/contactController.js
const User = require('../models/User.js')

// GET /api/contacts
const listUsers = (req, res) => {
  res.json(User.findAll())
}

// GET /api/contacts/:id
const getUser = (req, res) => {
  const user = User.findById(+req.params.id)
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
  res.json(user)
}

// POST /api/user
const createUser = (req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'name, email y phone son obligatorios' })
  }
  const user = User.create({ name, email, phone })
  res.status(201).json(user)
}

// PUT /api/users/:id
const updateUser = (req, res) => {
  const id      = +req.params.id
  const updated = User.update(id, req.body)
  if (!updated) return res.status(404).json({ error: 'Contacto no encontrado' })
  res.json(updated)
}

// DELETE /api/contacts/:id
const deleteUser = (req, res) => {
  const success = User.delete(+req.params.id)
  if (!success) return res.status(404).json({ error: 'Contacto no encontrado' })
  res.status(200).json({ message: 'Contacto eliminado' })
}

module.exports = {
  listUsers: listUsers,
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}