const express = require("express") //aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a rota
const cors = require('cors') //aqui estou trazendo o pacote cors que permite consumir essa api no front end
const conectaBancoDeDados = require('./bancoDeDados') // aqui ligo o banco de dados ao nosso código
conectaBancoDeDados() // Aqui estou chamando a função banco de dados lá do bancoDeDados.js

const Mulher = require ('./mulherModel')

const app = express() //aqui estou iniciando o app
app.use(express.json()) //aqui diz que as requisições também fazem parte do json
app.use (cors()) //aqui libero a api pra ser usada pelo front!
const porta = 3333  //aqui estou criando a porta


//GET
async function mostraMulheres(request, response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
    }catch(erro){
        console.log (erro)
    }
}

//POST
async function criaMulher (request,response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem:request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }catch(erro){
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request,response){
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.citacao){
            mulherEncontrada = request.body.citacao
        }
        
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    }catch(erro){
        console.log(erro)
    }
}

//DELETE
async function deletaMulher (request,response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})
    }catch(erro){
    console.log(erro)
    }
}

//PORTA
function mostraPorta(){
    console.log ("Servidor criado e rodando na porta",porta)
}

app.use (router.get('/mulheres', mostraMulheres)) // configurei a rota GET/mulheres
app.use (router.post('/mulheres', criaMulher)) // configurei a rota do POST/mulheres
app.use (router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota do PATCH/mulheres/:id 
app.use (router.delete('/mulheres/:id', deletaMulher)) // configurei a rota do DELETE/mulheres/:id
app.listen(porta, mostraPorta) // servidor ouvindo a porta
