// const express = require('express')

// function sumTillNum(n)
// {
//     let sum = 0;
//     for(let i = 1; i < n; i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//     const n = req.query.n;
//     const ans = sumTillNum(n);
//     res.send(ans.toString());
// })
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// Now let us make a new hospital for ourselves, an in-memory hospital
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(bodyParser.json());
// app.use(express.json());


app.get('/', function (req, res) // in get requests, the popular way of getting input is by using query parameters
{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKidneys[i].healthy)
            healthyKidneys++;
    }
    const unHealthyKidneys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post('/', function (req, res) // does not matter if you put "/" or '/'
{
    const isHealthy = req.body.isHealthy; // unlike query parameters in get requests, post requests take input from body
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', function (req, res) // the route can be same for all methods, the only difference being when method is different, callback is different
{
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    });
})

app.delete('/', function (req, res) {
    // taking care of the edge case when user sends delete request and there are no unhealthy kidneys
    if (checkUnhealthyKidneys())
    {
        const newKidneys = [];
        for (let i = 0; i < users.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "Done!!!" });
    }

    else
    {
        res.status(411).json({ msg: "You have no unhealthy kidneys" });
    }
})

function checkUnhealthyKidneys() {
    let unHealthyKidneysPresent = false;
    for (let i = 0; i < users.length; i++) {
        if (!users[0].kidneys[i].healthy)
            unHealthyKidneysPresent = true;
    }
    return unHealthyKidneysPresent;
}

app.listen(3000, () => console.log(`listening on port 3000`))