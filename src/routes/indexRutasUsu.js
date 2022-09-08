const {Router} = require('express');

const usuarioRouters= require('./usuarioRouters.js')

const rutas_init =() =>{
  const router =Router()
  router.use('/usuarios',usuarioRouters)
  //router.use('/medicos',medicoRouters)
  return router
}

module.exports={rutas_init}