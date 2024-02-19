// const express = require('express') // ugly way to do auth because it has lots of bugs and issues in it
// const app = express()
// const port = 3000

// app.get('/health-checkup', (req, res) => {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "sarthak" || password != "123456") { // username and password check
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) { // input validation
//         res.status(411).json({
//             msg: "wrong inputs"
//         });
//         return;
//     }

//     // do something with the kidneys here

//     res.send("Your kidneys are healthy");
// });

// app.put("/replace-kidney", function(req, res){
//     // do health checks here
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "sarthak" || password != "123456") { // username and password check
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) { // input validation
//         res.status(411).json({
//             msg: "wrong inputs"
//         });
//         return;
//     }

//     // do something with the kidneys here

//     res.send("Your kidneys are healthy");
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// This above mentioned code violates the dry principle



// Slightly better solution is to use wrapper functions

// const express = require('express')
// const app = express()
// const port = 3000

// function usernameValidator(username, password) {
//     if (username != "sarthak" || password != "123456") // username and password check
//         return false;
//     return true;
// }

// function inputValidator(kidneyId) {
//     if (kidneyId != 1 && kidneyId != 2) // input validation
//         return false;
//     return true;
// }

// app.get('/health-checkup', (req, res) => {
//     if (!usernameValidator(req.headers.username, req.headers.password)) {
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//     }

//     if (!inputValidator(req.query.kidneyId)) {
//         res.status(411).json({
//             msg: "wrong inputs"
//         });
//     }

//     // do something with the kidneys here

//     res.send("Your kidneys are healthy");
// });

// app.put("/replace-kidney", function (req, res) {
//     // do health checks here
//     if (!usernameValidator(req.headers.username, req.headers.password)) {
//         res.status(403).json({
//             msg: "User doesn't exist"
//         });
//     }

//     if (!inputValidator(req.query.kidneyId)) {
//         res.status(411).json({
//             msg: "wrong inputs"
//         });
//     }

//     // do something with the kidneys here

//     res.send("Your kidneys are healthy");
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// But the issue is there is still a lot of code being repeated here

const express = require('express')
const app = express()
const port = 3000

function userMiddleware(req, res, next)
{
    
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))