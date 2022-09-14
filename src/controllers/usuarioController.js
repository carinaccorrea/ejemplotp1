module.exports={

listar:async (req,res)=>{
    res.json({ message: 'SE LISTAN USUARIOS' });
    
},
crear:async (req,res)=>{
    res.json({ message: 'SE CREA 1 USUARIO' });
    
},
listarInfo:async (req,res)=>{
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