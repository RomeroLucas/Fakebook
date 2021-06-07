// import de LIBS
const express = require('express')
const app = express()

//permissão para deixar a API disponivel para outras aplicações
const cors = require('cors')
app.use(cors())
//config para o express usar json via post
app.use(express.json())



//import das rotas
const user = require('./routes/user')
app.use(user)
const post = require('./routes/post')
app.use(post)


// função que inicia o servidor node
const port = 4000
app.listen(port, ()=> {
    console.log(`Servirdor rodando em: http://localhost:${port}`)
})