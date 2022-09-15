const router =require('express').Router()

const pacienteController=require('../controllers/pacienteController')

router.get('/', pacienteController.prueba)
router.get('/listar', pacienteController.listar)
router.post('/crear', pacienteController.crear)
router.get('/:id', pacienteController.listarInfo)

module.exports=router