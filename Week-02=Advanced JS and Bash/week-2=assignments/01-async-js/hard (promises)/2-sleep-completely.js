/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds)
{
    return new Promise((resolve) =>
    {
        const start = Date.now();
        while (Date.now() - start < milliseconds)
        {
            // Busy wait
        }
        resolve();
    });
}

async function example()
{
    console.log('Sleeping...');
    await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)
    console.log('Awoke!');
}

example();

module.exports = sleep;