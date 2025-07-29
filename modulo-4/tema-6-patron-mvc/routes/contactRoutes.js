// routes/contactRoutes.js
const express = require('express')
const router = express.Router()

const {
  listContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controller/contactController')

router.get   ('/contacts',     listContacts)
router.get   ('/contacts/:id', getContact)
router.post  ('/contacts',     createContact)
router.put   ('/contacts/:id', updateContact)
router.delete('/contacts/:id', deleteContact)

module.exports = router