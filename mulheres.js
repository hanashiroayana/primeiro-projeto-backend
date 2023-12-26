const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ayana Hanashiro',
        imagem:'file:///C:/Users/Ayana/Pictures/Wallpapers/3.%20Bojji.jpg',
        minibio: 'Não entendi'
    },
    {
        nome: 'Karen Tozawa',
        imagem:'file:///C:/Users/Ayana/Pictures/FujiFilm/[10]%20Fuji_.jpg',
        minibio: 'Eu consigo, deixa eu fazer'
    },
    {
        nome: 'Tamires Ueda',
        imagem:'file:///C:/Users/Ayana/Pictures/Tami/WhatsApp%20Image%202023-11-13%20at%2022.54.23.jpeg',
        minibio: 'Kareeeen',
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}


function mostraPorta(){
    console.log ("Servidor criado e rodando na porta",porta)
}

app.use (router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
