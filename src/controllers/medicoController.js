module.exports={

listar:async (req,res)=>{
    console.log('ejecutando listar medicos en consola.');
    res.json({ message: 'SE LISTAN MEDICOS' });
    
},
crear:async (req,res)=>{
    console.log('ejecutando crear UN MEDICO en consola.');
    res.json({ message: 'SE CREA 1 MEDICO' });
    
},
listarInfo:async (req,res)=>{
    console.log('ejecutando listar un MEDICO en consola.');
    res.json({ message: 'SE LISTA INFO DEL MEDICO' });
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba MEDICOS en consola.');
       res.json({ message: 'Hola mundo MEDICOS' });
       
    
    }catch(err){
        console.log(err)
    }
},


}