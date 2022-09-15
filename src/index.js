// aplicacion basica con express

const express = require('express'); // importa express
const globalConstants= require('./const/globalConstants'); // importa seteos globales
const routerConfig=require('./routes/indexRutas') //importa rutas

const configuracionApi=(app) => {
    app.use(express.json()); // permite que express entienda json
    app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post
    
}

const configuracionRouter=(app) =>{
  app.use('/api/',routerConfig.rutas_init())

}

const init = () => {
    const app=express(); //se crea instancia de express
    configuracionApi(app); //se configuras aplic

    configuracionRouter(app)
    app.listen(globalConstants.PORT);
    console.log('corriendo aplic ' + globalConstants.PORT);
}

init();