const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/page1.html'))
app.get('/data', (req, res) => res.sendFile(__dirname + '/public/html/page1.html'))
app.get('/project1', (req, res) => res.sendFile(__dirname + '/public/html/project1.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))