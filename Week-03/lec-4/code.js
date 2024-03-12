const express = require('express')
const app = express()
const port = 3000

app.get("/ride1", function(req, res)
{
    res.json({
        msg: "You have successfully riden ride-1"
    })
})

app.listen(3000);