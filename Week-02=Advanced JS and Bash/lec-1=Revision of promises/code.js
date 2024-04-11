// understanding callback hell by using a scenario and writing normal callback and async await code for it

// Write a function that says hello after one second, then hello twice after 2 seconds and then hello thrice 3 seconds after that


// standard callback code
const SayingHello = () => console.log("Hello");
function delayCallback(callback, count, duration) {
    setTimeout(function () {
        for (let i = 0; i < count; i++)
            callback();
    }, duration)
}


function delayDemo() {
    let duration = 1000;
    delayCallback(SayingHello, 1, duration);
    duration += 2000;
    delayCallback(SayingHello, 2, duration);
    duration += 2000;
    delayCallback(SayingHello, 3, duration);
}

delayDemo();


// using promises
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

SayingHello = () => console.log("Hello");

function printHelloAfterDelay(delayTime, times) {
    return delay(delayTime)
        .then(() => {
            for (let i = 0; i < times; i++) {
                SayingHello();
            }
        });
}

// Using async/await
async function printHelloAsync() {
    await delay(1000);
    SayingHello();

    await printHelloAfterDelay(2000, 2);

    await printHelloAfterDelay(3000, 3);
}

// Call the async function
printHelloAsync();

// making a promise class of your own that functions exactly like the actual promise class

class PromiseCopy {
    constructor(callback) {
        callback(this.resolve, this.reject);
    }

    resolve(pass) {
        this.pass = pass;
    }

    reject(err) {
        this.err = err;
    }

    then(fn) {
        return fn(this.pass);
    }

    catch(fn) {
        return fn(this.err);
    }
};

const p = new PromiseCopy((resolve, reject) => {
    resolve(100);
});

p.then(function(x){
    console.log(x);
})


// real syntax of promises

function MyOwnPromisifiedTimeout() {
    return new Promise(function (OnDone, OnError /* Can pass as many functions here as you want */) {
        OnDone();
        OnError();
    });
}

MyOwnPromisifiedTimeout.then(function () {

})
    .catch(function () {

    })


// a simple code to understand how control flows through a promisified javascript code
console.log("Printing 1");
function SampleAsyncFunction() {
    console.log("Printing 3")
    return new Promise(function (resolve) {
        console.log("Printing 4");
        setTimeout(function () {
            console.log("Printing 5");
            resolve();
        }, 1000);
    })
}

console.log("Printing 2");
SampleAsyncFunction().then(function () {
    console.log("Printing 6");
});