module.exports={

listar:async (req,res)=>{
    console.log('ejecutando listar usuarios en consola.');
    res.json({ message: 'SE LISTAN USUARIOS' });
    
},
crear:async (req,res)=>{
    console.log('ejecutando crear usuario en consola.');
    res.json({ message: 'SE CREA 1 USUARIO' });
    
},
listarInfo:async (req,res)=>{
    console.log('ejecutando listar un usuario en consola.');
    res.json({ message: 'SE LISTA INFO DEL USUARIO' });
},

prueba:async (req,res)=>{
    try{
       console.log('ejecutando prueba usuario en consola.');
       res.json({ message: 'Hola mundooo' });
       
    
    }catch(err){
        console.log(err)
    }
},


}