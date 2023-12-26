const express = require("express");
const router = express.Router();

const app = express()
const porta = 3333

function mostraMulher (request, response){
    response.json({
        nome: 'Ayana Hanashiro',
        imagem:'file:///C:/Users/Ayana/Pictures/Wallpapers/3.%20Bojji.jpg',
        minibio: 'Pesquisadora e programadora',
    })
}

function mostraPorta(){
    console.log ("Servidor criado e rodando na porta",porta)
}

app.use (router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)

