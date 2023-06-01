const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()


router.get('/usuarios', UsuariosController.listaTodosOsUsuarios)
router.get('/usuario/:email', UsuariosController.mostraUsuario)
router.post('/usuarios', UsuariosController.criaUsuario)

module.exports = router

