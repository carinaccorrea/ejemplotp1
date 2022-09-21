const {Router} = require('express');

const usuarioRouters= require('./usuarioRouters.js')
const medicoRouters= require('./medicoRouters.js')
const pacienteRouters= require('./pacienteRouters.js')
const tratamientoRouters= require('./tratamientoRouters.js')
const turnoRouters= require('./turnoRouters.js')
const mutualRouters= require('./mutualRouters.js')

const rutas_init =() =>{
  const router =Router()
  router.use('/usuarios',usuarioRouters)
  router.use('/medicos',medicoRouters)
  router.use('/pacientes',pacienteRouters)
  router.use('/tratamientos',tratamientoRouters)
  router.use('/turnos',turnoRouters)
  router.use('/mutuales',mutualRouters)

  return router
}

module.exports={rutas_init}