require('dotenv').config(); //importo vbles de ambiente
module.exports={
    PORT :process.env.PORT || 5000,
    NOMBRE: process.env.NOMBRE
}
