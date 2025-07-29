// controllers/contactController.js
const Contact = require('../models/Contact.js')

// GET /api/contacts
const listContacts = (req, res) => {
  res.json(Contact.findAll())
}

// GET /api/contacts/:id
const getContact = (req, res) => {
  const contact = Contact.findById(+req.params.id)
  if (!contact) return res.status(404).json({ error: 'Contacto no encontrado' })
  res.json(contact)
}

// POST /api/contacts
const createContact = (req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'name, email y phone son obligatorios' })
  }
  const contact = Contact.create({ name, email, phone })
  res.status(201).json(contact)
}

// PUT /api/contacts/:id
const updateContact = (req, res) => {
  const id      = +req.params.id
  const updated = Contact.update(id, req.body)
  if (!updated) return res.status(404).json({ error: 'Contacto no encontrado' })
  res.json(updated)
}

// DELETE /api/contacts/:id
const deleteContact = (req, res) => {
  const success = Contact.delete(+req.params.id)
  if (!success) return res.status(404).json({ error: 'Contacto no encontrado' })
  res.status(200).json({ message: 'Contacto eliminado' })
}

module.exports = {
  listContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}