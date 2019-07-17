const express = require('express')
const app = express()
var http = require('http').createServer(app)
const path = require('path')
const router = express.Router()
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/view'))
app.use('/', router)


app.get('/', (request, response) => {
	response.status(200);
	response.sendFile('view/index.html', {root: __dirname});
})

app.get('/form', (request, response) => {
	response.status(200);
	response.sendFile('view/form.html', {root : __dirname})
})


http.listen(PORT, () => {
	console.log(`Server is up and listening on ${PORT}`)
})
