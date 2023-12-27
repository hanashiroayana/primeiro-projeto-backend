const mongoose = require ('mongoose')
require('dotenv').config()

//uso o async para algo assíncrono
async function conectaBancoDeDados(){
    try{    console.log ('A conexão com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)
    
    console.log ('Conexão com o banco de dados realizada com sucesso')
}catch (erro){
    console.log (erro)
}

}

//usa-se esse module.exports para que ele fique disponível para outros
module.exports = conectaBancoDeDados