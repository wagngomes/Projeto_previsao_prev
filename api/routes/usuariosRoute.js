const {Router} = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)


router.get('/usuarios', UsuariosController.listaTodosOsUsuarios)
router.get('/usuario/:email', UsuariosController.mostraUsuario)
router.post('/usuarios', UsuariosController.criaUsuario)

module.exports = router

