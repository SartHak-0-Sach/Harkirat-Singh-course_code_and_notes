// example of synchronous code
// function sum(n)
// {
//     let sum = 0;
//     for(let i = 0; i<n; i++)
//     sum+=i;
//     return sum;
// }
// console.log(sum(21));


// example of asynchronous code
setTimeout(function () {
    console.log("Hello world");
}, 100);

function sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += i;
    return sum;
}

console.log(sum(2100000000));

console.log("Namaste duniya");

setTimeout(function () {
    console.log(sum(21));
}, 100);

/* In JavaScript, setTimeout schedules a function to run asynchronously after a specified delay. However, the actual execution order is influenced by the event loop and the nature of the tasks involved.

Let's analyze the code:

The first setTimeout is scheduled to execute console.log("Hello world") after a delay of 100 milliseconds.

The synchronous console.log(sum(2100000000)) is executed. This operation is time-consuming due to the large loop in the sum function.

While the main thread is busy executing the synchronous console.log(sum(2100000000)), the timer for the first setTimeout expires.

The callback function console.log("Hello world") is placed in the event queue.

The main thread finishes the execution of the synchronous code (console.log(sum(2100000000))).

The event loop picks up the callback from the event queue and executes console.log("Hello world").

So, even though the setTimeout for "Hello world" was declared first, its actual execution was delayed by the synchronous execution of the sum(2100000000) code. The asynchronous nature of setTimeout allows other tasks to proceed while waiting for the specified delay, but the order of execution is determined by the event loop and the completion of tasks. 

In the context of your example, the output of the asynchronous function scheduled with setTimeout waits for the completion of the synchronous function (console.log(sum(2100000000))) before its own output is displayed. The asynchronous function is indeed calculated before, but its output is deferred until the synchronous code has completed execution. This behavior is a result of how the event loop in JavaScript manages the execution of asynchronous tasks alongside synchronous tasks.*/

//filesystem module
const fs = require('fs');

fs.readFile("notes.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("hi there"); // this will run first because the above function is an async function and only after the thread is not busy will it go on and output all the pending callbacks like the fs.readFile function


// Making an async function of our own
const fs = require('fs');

function MyOwnAsyncFunction(callback) {
    fs.readFile("notes.txt", "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        callback(data); // to run this just adjust the file path to this folder first in the terminal else it won't run
    });
}

function onDone(data) {
    console.log(data);
}

MyOwnAsyncFunction(onDone);


// Cleaner way to create your own async function
const fs = require('fs');
const { callbackify } = require('util');

function SarthakReadsFile() {
    return new Promise(function (resolve) {
        fs.readFile("notes.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    })
}

function OnDone(data) {
    console.log(data);
}

// SarthakReadsFile().then(OnDone);
var a = SarthakReadsFile();
console.log(a); // IMP!!! this will display Promise { <pending> } as output because the .then statement is not written yet
a.then(OnDone);


var d = new Promise(function (anyName) {/*empty function */ })
console.log(d); // in this whole code file the two promise pending were executed first and later on other async functions from callback queue


// example of promise state resolved and pending code
var a = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("foo");
    }, 1000)
});

function callBack(data) {
    console.log(data);
}

console.log(a);
a.then(callBack);


// async await syntax explained with an example
function SarthakSaysHello() {
    return new Promise(function (resolve) {
        // some async logic written here
        setTimeout(function () {
            resolve("Hi there");
        }, 1000)
    });
}

async function main() {
    const value = await SarthakSaysHello();
    console.log(value);
    console.log("This will wait for promise to resolve")
}

main();
console.log("Thread doesn't wait for main to get completed and this will print first")

// above code is same as writing
function SarthakSaysHello() {
    return new Promise(function (resolve) {
        // some async logic written here
        setTimeout(function () {
            resolve("Hi there");
        }, 1000)
    });
}

function main()
{
    SarthakSaysHello().then(function(value){
        console.log(value);
        console.log("This will wait for promise to resolve")
    })
}

main();
console.log("Thread doesn't wait for main to get completed and this will print first")