const router =require('express').Router()

const tratamientoController=require('../controllers/tratamientoController')

router.get('/', tratamientoController.prueba)
router.get('/listar', tratamientoController.listar)
router.post('/crear', tratamientoController.crear)
router.get('/:id', tratamientoController.listarInfo)

module.exports=router