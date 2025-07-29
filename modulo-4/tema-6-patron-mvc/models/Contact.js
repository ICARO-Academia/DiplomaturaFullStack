// models/contact.js
const contacts = []
let nextId = 1

class Contact {
  constructor({ name, email, phone }) {
    this.id    = nextId++
    this.name  = name
    this.email = email
    this.phone = phone
  }

  static findAll() {
    return contacts
  }

  static findById(id) {
    return contacts.find(c => c.id === id)
  }

  static create(data) {
    const c = new Contact(data)
    contacts.push(c)
    return c
  }

  static update(id, data) {
    const c = Contact.findById(id)
    if (!c) return null
    c.name  = data.name  ?? c.name
    c.email = data.email ?? c.email
    c.phone = data.phone ?? c.phone
    return c
  }

  static delete(id) {
    const idx = contacts.findIndex(c => c.id === id)
    if (idx === -1) return false
    contacts.splice(idx, 1)
    return true
  }
}

module.exports = Contact