const express = require('express')
const app = express()
var http = require('http').createServer(app)
const bodyParser = require('body-parser');
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));
app.use('/', router);
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.status(200);
	response.sendFile('views/index.html', {root: __dirname});
})


app.post('/', (req, res) => {
	res.status(200);
	// response.sendFile('view/formResults.html', {root : __dirname})
	console.log(req.body)
	res.render('results', {userData: req.body});
})


http.listen(PORT, () => {
	console.log(`Server is up and listening on ${PORT}`)
})
