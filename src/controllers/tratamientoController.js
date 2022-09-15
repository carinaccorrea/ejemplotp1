module.exports={

listar:async (req,res)=>{
    console.log('ejecutando listar TRATAMIENTOS en consola.');
    res.json({ message: 'SE LISTAN TRATAMIENTOS' });
    
},
crear:async (req,res)=>{
    console.log('ejecutando crear UN TRATAMIENTO en consola.');
    res.json({ message: 'SE CREA 1 TRATAMIENTO' });
    
},
listarInfo:async (req,res)=>{
    console.log('ejecutando listar un TRATAMIENTO en consola.');
    res.json({ message: 'SE LISTA INFO DEL TRATAMIENTO' });
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba TRATAMIENTOS en consola.');
       res.json({ message: 'Hola mundo TRATAMIENTOS' });
       
    
    }catch(err){
        console.log(err)
    }
},


}