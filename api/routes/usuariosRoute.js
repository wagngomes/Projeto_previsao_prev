const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/Usuarios', UsuariosController.listaTodosOsUsuarios)

module.exports = router

