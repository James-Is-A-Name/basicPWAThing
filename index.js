let express = require('express')

let server = express()

let port = process.env.PORT || 3000

let someData = 0;

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html')
})


//things needed for the pwa
server.get('/images/icons/icon-256x256.png', (req, res) => {
    res.sendFile(__dirname + '/images/256.png')
})
server.get('/images/icons/icon-128x128.png', (req, res) => {
    res.sendFile(__dirname + '/images/128.png')
})

//pwa files
server.get('/manifest.json', (req, res) => {
    res.sendFile(__dirname + '/manifest.json')
})
server.get('/service-worker.js', (req, res) => {
    res.sendFile(__dirname + '/service-worker.js')
})



//just some html pages
server.get('/other1', (req, res) => {
    res.sendFile(__dirname + '/pages/other1.html')
})
server.get('/other2', (req, res) => {
    res.sendFile(__dirname + '/pages/other2.html')
})


server.get('/data', (req, res) => {
    someData++;
    res.send("" + someData);
})


server.listen(port, () => {
    console.log('server up and running on port ' + port)
})