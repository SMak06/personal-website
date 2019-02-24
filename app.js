const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/bio', (req, res) => res.sendFile(__dirname + '/bio.html'))
app.get('/portfolios', (req, res) => res.sendFile(__dirname + '/portfolios.html'))
app.get('/professional', (req, res) => res.sendFile(__dirname + '/professional.html'))
app.get('/skills', (req, res) => res.sendFile(__dirname + '/skills.html'))
app.get('/projects', (req, res) => res.sendFile(__dirname + '/./projects.html'))
app.get('/websites', (req, res) => res.sendFile(__dirname + '/./websites.html'))
app.get('/logos', (req, res) => res.sendFile(__dirname + '/./logos.html'))
app.get('/designs', (req, res) => res.sendFile(__dirname + '/./designs.html'))


app.listen(3000, () => console.log('App listening on port 3000'))
