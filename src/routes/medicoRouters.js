const router =require('express').Router()

const medicoController=require('../controllers/medicoController')

router.get('/prueba', medicoController.prueba)
router.get('/', medicoController.listar)
router.post('/', medicoController.crear)
router.get('/:id', medicoController.listarInfo)

module.exports=router