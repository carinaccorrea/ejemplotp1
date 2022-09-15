const router =require('express').Router()

const medicoController=require('../controllers/medicoController')

router.get('/', medicoController.prueba)
router.get('/listar', medicoController.listar)
router.post('/crear', medicoController.crear)
router.get('/:id', medicoController.listarInfo)

module.exports=router