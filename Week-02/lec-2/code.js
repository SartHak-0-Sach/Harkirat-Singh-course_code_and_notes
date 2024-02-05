const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// example chatGPT backend works like-
app.post('/backend-api/conversation', function (req, res) {
    // run a machine learning model here which will run when control reaches here after user asks a question
    res.send("Hello World!!");
})

app.get('/route-handler', (req,res) => {
    // write code of headers, body, query params(short for parameters)
    // write your machine learning model here
    res.send('Hello World!!')
    res.json({
        // send a javascript object to the server here
    })
})

