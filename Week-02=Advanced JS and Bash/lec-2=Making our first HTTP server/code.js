const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000 // explanation given in notes

// middlewares
app.use(bodyParser.json());
// app.use(express.json()); // This also works instead of using bodyParser

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// example chatGPT backend works like-
app.post('/backend-api/conversation', function (req, res) {
    // run a machine learning model here which will run when control reaches here after user asks a question
    res.send("Hello World!!");
    // spawn("python", "a.py", ...) // can even spawn a machine learning model or spawn a python code also in backend
    console.log(req.headers["authorization"]); // can also do req.headers.authorization
    console.log(req.body);
    res.send({
        name: "Sarthak",
        age: 12
    });

    res.json({
        gender: "male",
        msg: "Love you 3000"
    });
    const message = req.body.message; // can also use req.query.message
    console.log(message);
})

app.get('/route-handler', (req, res) => {
    // write code of headers, body, query params(short for parameters)
    // write your machine learning model here
    res.send('Hello World!!'); // can also send objects using res.send
    res.json({
        // send a javascript object to the server here
        name: "Sarthak",
        age: 12
    });
    res.send('<b> Hi there </b>'); // can also send HTML code
})