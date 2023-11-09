const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const db = require('./src/db')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

// Define as rotas da aplicação (declaradas na pasta /src/routes/)
app.use('/', require('./src/routes/anotacaoRoutes'));
app.use('/', require('./src/routes/usuarioRoutes'));
app.use('/', require('./src/routes/autenticacaoRoutes'));

db.sync(() => console.log(`Banco de dados conectado`));

const app_port = 8080
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port)
})
