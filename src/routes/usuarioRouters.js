const router =require('express').Router()

const usuarioController=require('../controllers/usuarioController')

router.get('/', usuarioController.prueba)
router.get('/listar', usuarioController.listar)
router.post('/crear', usuarioController.crear)
router.get('/:id', usuarioController.listarInfo)

module.exports=router