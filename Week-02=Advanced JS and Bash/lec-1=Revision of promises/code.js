/*
Let's consider a scenario where you want to make a series of API calls sequentially (for example, fetching user data, then fetching their posts, and then fetching comments on those posts). If done with plain callbacks, it could easily lead to **callback hell**, where each subsequent callback is nested within the previous one.

Scenario:
You need to:
1. Fetch user data.
2. Fetch posts by the user.
3. Fetch comments on each post.
*/

// Example 1: Using Normal Callbacks(Callback Hell)
function getUser(userId, callback)
{
    setTimeout(() =>
    {
        console.log('Fetched User');
        callback({ id: userId, name: 'John' });
    }, 1000);
}

function getPosts(userId, callback)
{
    setTimeout(() =>
    {
        console.log('Fetched Posts');
        callback([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
    }, 1000);
}

function getComments(postId, callback)
{
    setTimeout(() =>
    {
        console.log(`Fetched comments for post ${postId}`);
        callback(['Comment 1', 'Comment 2']);
    }, 1000);
}

// Callback hell example
getUser(1, (user) =>
{
    getPosts(user.id, (posts) =>
    {
        getComments(posts[0].id, (comments) =>
        {
            console.log('Comments: ', comments);
        });
    });
});

// Example 2: Using`async` / `await`(Cleaner Code)
function getUser(userId)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            console.log('Fetched User');
            resolve({ id: userId, name: 'John' });
        }, 1000);
    });
}

function getPosts(userId)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            console.log('Fetched Posts');
            resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

function getComments(postId)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            console.log(`Fetched comments for post ${postId}`);
            resolve(['Comment 1', 'Comment 2']);
        }, 1000);
    });
}

// Async/await example
async function fetchUserData()
{
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log('Comments: ', comments);
}

fetchUserData();

/*
Explanation:
Callback hell: The first example uses nested callbacks, making the code harder to maintain and read.
Async /await: The second example avoids nesting and makes the code cleaner and easier to follow by allowing us to write asynchronous code in a synchronous style.
*/


// standard callback code
const SayingHello = () => console.log("Hello");
function delayCallback(callback, count, duration)
{
    setTimeout(function ()
    {
        for (let i = 0; i < count; i++)
            callback();
    }, duration)
}


function delayDemo()
{
    let duration = 1000;
    delayCallback(SayingHello, 1, duration);
    duration += 2000;
    delayCallback(SayingHello, 2, duration);
    duration += 2000;
    delayCallback(SayingHello, 3, duration);
}

delayDemo();


// using promises
function delay(ms)
{
    return new Promise(resolve =>
    {
        setTimeout(() =>
        {
            resolve();
        }, ms);
    });
}

SayingHello = () => console.log("Hello");

function printHelloAfterDelay(delayTime, times)
{
    return delay(delayTime)
        .then(() =>
        {
            for (let i = 0; i < times; i++)
            {
                SayingHello();
            }
        });
}

// Using async/await
async function printHelloAsync()
{
    await delay(1000);
    SayingHello();

    await printHelloAfterDelay(2000, 2);

    await printHelloAfterDelay(3000, 3);
}

// Call the async function
printHelloAsync();

// making a promise class of your own that functions exactly like the actual promise class

class PromiseCopy
{
    constructor(callback)
    {
        callback(this.resolve, this.reject);
    }

    resolve(pass)
    {
        this.pass = pass;
    }

    reject(err)
    {
        this.err = err;
    }

    then(fn)
    {
        return fn(this.pass);
    }

    catch(fn)
    {
        return fn(this.err);
    }
};

const p = new PromiseCopy((resolve, reject) =>
{
    resolve(100);
});

p.then(function (x)
{
    console.log(x);
})


// real syntax of promises

function MyOwnPromisifiedTimeout(time)
{
    return new Promise(function (OnDone, OnError /* Can pass as many functions here as you want */)
    {
        // Simulating a timeout with setTimeout for async behavior
        if (typeof time !== 'number' || time < 0)
        {
            // Reject if the time is invalid (negative or non-number)
            OnError("Invalid timeout duration");
        } else
        {
            setTimeout(function ()
            {
                OnDone(`Resolved after ${time} milliseconds`);
            }, time);
        }
    });
}

// Example usage:
MyOwnPromisifiedTimeout(2000) // Wait for 2000 ms (2 seconds)
    .then(function (message)
    {
        console.log(message); // "Resolved after 2000 milliseconds"
    })
    .catch(function (error)
    {
        console.error("Error:", error); // If time variable is invalid
    });

MyOwnPromisifiedTimeout(-1000) // Invalid duration
    .then(function (message)
    {
        console.log(message);
    })
    .catch(function (error)
    {
        console.error("Error:", error); // "Error: Invalid timeout duration"
    });

console.log(MyOwnPromisifiedTimeout(3000)); // promise completed (if done before call then it will show pending)
console.log(MyOwnPromisifiedTimeout(abc)); // Invalid timeout so promise gets rejected

// a simple code to understand how control flows through a promisified javascript code
console.log("Printing 1");
function SampleAsyncFunction()
{
    console.log("Printing 3")
    return new Promise(function (resolve)
    {
        console.log("Printing 4");
        setTimeout(function ()
        {
            console.log("Printing 5");
            resolve();
        }, 1000);
    })
}

console.log("Printing 2");
SampleAsyncFunction().then(function ()
{
    console.log("Printing 6");
});