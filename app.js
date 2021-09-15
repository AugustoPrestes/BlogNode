//Carregando modulos
const bodyParser = require('body-parser')
const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()

// Configurações 
    // Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    //Mongoose
    


// Rotas

//Outras
const port = 8081

app.listen(port,() => {
    console.log("Servidor rodando na porta: " + port)
})