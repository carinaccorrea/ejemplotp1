module.exports={

listar:async (req,res)=>{
    
},
crear:async (req,res)=>{
    
},
listarInfo:async (req,res)=>{
    
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