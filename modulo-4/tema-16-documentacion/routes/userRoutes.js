// routes/userRoutes.js
const express = require('express')
const router = express.Router()

const {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controller/usersController')

/**
 * @openapi
 * /users:
 *  get:
 *    tags:
 *      - Users
 *    summary: Listar todos los usuarios
 *    responses:
 *      '200':
 *        description: Lista de usuarios
 */
router.get   ('/users',     listUsers)
router.get   ('/users/:id', getUser)
router.post  ('/users',     createUser)
router.put   ('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router