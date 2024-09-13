const express = require('express') // ugly way to do auth because it has lots of bugs and issues in it
const app = express()
const port = 3000

const req = require("express/lib/request");

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "sarthak" || password != "123456") { // username and password check
        res.status(403).json({
            msg: "User doesn't exist"
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) { // input validation
        res.status(411).json({
            msg: "wrong inputs"
        });
        return;
    }

    // do something with the kidneys here

    res.send("Your kidneys are healthy");
});

app.put("/replace-kidney", function(req, res){
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "sarthak" || password != "123456") { // username and password check
        res.status(403).json({
            msg: "User doesn't exist"
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) { // input validation
        res.status(411).json({
            msg: "wrong inputs"
        });
        return;
    }

    // do something with the kidneys here

    res.send("Your kidneys are healthy");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// This above mentioned code violates the dry principle



// Slightly better solution is to use wrapper functions

const express = require('express')
// const app = express()
// const port = 3000

function usernameValidator(username, password) {
    if (username != "sarthak" || password != "123456") // username and password check
        return false;
    return true;
}

function inputValidator(kidneyId) {
    if (kidneyId != 1 && kidneyId != 2) // input validation
        return false;
    return true;
}

app.get('/health-checkup', (req, res) => {
    if (!usernameValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            msg: "User doesn't exist"
        });
    }

    if (!inputValidator(req.query.kidneyId)) {
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

    // do something with the kidneys here

    res.send("Your kidneys are healthy");
});

app.put("/replace-kidney", function (req, res) {
    // do health checks here
    if (!usernameValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            msg: "User doesn't exist"
        });
    }

    if (!inputValidator(req.query.kidneyId)) {
        res.status(411).json({
            msg: "wrong inputs"
        });
    }

    // do something with the kidneys here

    res.send("Your kidneys are healthy");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// But the issue is there is still a lot of code being repeated here


// const express = require('express');
// const app = express();
// const port = 3000;

// Rate limiter function
function rateLimiter(req, res, next) {
    // Implement rate limiting logic here
    // For example, you can use a library like express-rate-limit
    // or custom logic to limit the rate of requests
    next();
}

// Middleware to check user credentials
function userMiddleware(req, res, next) {
    const { username, password } = req.body; // Assuming username and password are in the request body
    if (username !== "sarthak" || password !== "pass") {
        return res.status(403).json({
            msg: "User doesn't exist"
        });
    }
    next();
}

// Middleware to check kidney ID
function kidneyMiddleware(req, res, next) {
    const { kidneyId } = req.params; // Assuming kidneyId is a URL parameter
    if (kidneyId !== "1" && kidneyId !== "2") {
        return res.status(403).json({
            msg: "Kidney doesn't exist"
        });
    }
    next();
}

// Middleware to calculate requests and send request count
let requests = 0;
function calculaterequests(req, res, next) {
    requests++;
    console.log("requests are: " + requests);
    next();
}

// Health check route with middleware
app.get("/health-checkup", userMiddleware, kidneyMiddleware, calculaterequests, function (req, res) {
    // Do something with the kidney here
    res.send("Your heart is healthy");
});

// Kidney check route with middleware
app.get("/kidney-check/:kidneyId", userMiddleware, kidneyMiddleware, calculaterequests, function (req, res) {
    // Do something with the kidney here
    res.send("Your kidney is functioning properly");
});

// Heart check route with middleware
app.get("/heart-check", userMiddleware, kidneyMiddleware, calculaterequests, function (req, res) {
    // Do something with the heart here
    res.send("Your heart is healthy");
});

// Route to increment request count
app.get("/add-request", calculaterequests, function(req, res) {
    res.send("request counted");
});

// Route to get request count
app.get("/get-request", function(req, res) {
    res.send("requests are: " + requests);
});

// Second route to get request count
app.get("/get-request2", function(req, res) {
    res.send("requests are: " + requests);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // old code

// new app.use code

// const express = require('express');
// const app = express();
// const port = 3000;

// let requests = 0;

function calculaterequests(req, res, next) {
    requests++;
    console.log("requests are: " + requests);
    next(); // Call next to proceed to the next middleware or route handler
}

// Apply calculaterequests middleware globally
app.use(calculaterequests);

// Define your route handlers
app.get("/health-checkup", function (req, res) {
    // Do something with the kidney here
    res.send("Your heart is healthy");
});

app.get("/kidney-check/:kidneyId", function (req, res) {
    // Do something with the kidney here
    res.send("Your kidney is functioning properly");
});

app.get("/heart-check", function (req, res) {
    // Do something with the heart here
    res.send("Your heart is healthy");
});

// Route to increment request count
app.get("/add-request", function(req, res) {
    res.send("request counted");
});

// Route to get request count
app.get("/get-request", function(req, res) {
    res.send("requests are: " + requests);
});

// Second route to get request count
app.get("/get-request2", function(req, res) {
    res.send("requests are: " + requests);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express')

// const app = express()
// const port = 3000

// can also do async functions like database calls should be made async
async function middleware(req, res, next) {
    await fetch();
    next();
}

function middleware2(req, res, next) {
    fetch().then({})
    next();
}

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2] expecting an array like this
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + " kidneys");
});

// global catches- catch any error that occurs globally into this codebase
let errorCount = 0;
app.use(function (err, req, res, next) {
    errorCount++; // if there are too many errors coming through, that means something is wrong with the code and not a fault from users
    res.json({
        msg: "Some error occurred"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const express = require('express')
// const app = express()
// const z = require('zod');
// const port = 3000

// const schema = zod.array(zod.number()); // statement telling what kind of input I am expecting from my user

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number()) // we can use z or zod both but for calling z I used const z = require('zod') in the package declaration at the top of the code else I would have done zod if I want to write zod.array instead
})

app.post("/health-checkup", function (req, res) {
    // kidneys = [1,2] expecting an array like this
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(obj);
    // const kidneyLength = kidneys.length;
    // res.send("you have " + kidneyLength + " kidneys");
    // res.send({
    //     response
    // })

    if (!response.success) {
        res.status(400).json({
            msg: "Invalid input"
        })
        return;
    }

    else {
        const kidneyLength = kidneys.length;
        res.send("you have " + kidneyLength + " kidneys");
        res.send({
            response
        })
        console.log(response);
    }
});

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// HW quetion
/*
If this is an array of strings with at least 1 input, return true, else return false with and without using zod(without zod you will have to use a for loop, check for each input and with zod just define a schema for the same)

typeof arr == "object", arr.length>=1, typeof arr[0] == "number"

function validateInput()
{
    
}
*/

