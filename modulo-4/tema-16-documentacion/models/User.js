// models/user.js
const users = [{name: 'Juan', email: 'juan@example.com', phone: '1234567890'},{name: 'Ana', email: 'ana@example.com', phone: '0987654321'}]
let nextId = 1

class User {
  constructor({ name, email, phone }) {
    this.id    = nextId++
    this.name  = name
    this.email = email
    this.phone = phone
  }

  static findAll() {
    return users
  }

  static findById(id) {
    return users.find(c => c.id === id)
  }

  static create(data) {
    const c = new User(data)
    users.push(c)
    return c
  }

  static update(id, data) {
    const c = User.findById(id)
    if (!c) return null
    c.name  = data.name  ?? c.name
    c.email = data.email ?? c.email
    c.phone = data.phone ?? c.phone
    return c
  }

  static delete(id) {
    const idx = users.findIndex(c => c.id === id)
    if (idx === -1) return false
    users.splice(idx, 1)
    return true
  }
}

module.exports = User