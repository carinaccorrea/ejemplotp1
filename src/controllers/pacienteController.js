module.exports={

listar:async (req,res)=>{
    console.log('ejecutando listar pacientes en consola.');
    res.json({ message: 'SE LISTAN PACIENTES' });
    
},
crear:async (req,res)=>{
    console.log('ejecutando crear UN PACIENTE en consola.');
    res.json({ message: 'SE CREA 1 PACIENTE' });
    
},
listarInfo:async (req,res)=>{
    console.log('ejecutando listar un PACIENTE en consola.');
    res.json({ message: 'SE LISTA INFO DEL PACIENTE' });
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba PACIENTES en consola.');
       res.json({ message: 'Hola mundo PACIENTES' });
       
    
    }catch(err){
        console.log(err)
    }
},


}