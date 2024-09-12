/*
Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require("fs");

console.log("Current working directory:", process.cwd());

// Start reading the file asynchronously
fs.readFile("C:/Users/saksh/OneDrive/Desktop/github/harkirat-singh-course_code_and_notes/Week-02=Advanced JS and Bash/week-2=assignments/02-nodejs/files/a.txt", "utf-8", function (err, data)
{
    if (err)
    {
        console.error("Error reading the file", err);
        return;
    }

    // Simulate file contents being printed asynchronously after setTimeout
    setTimeout(function ()
    {
        console.log("\nWaiting for file contents to appear...\n");
        setTimeout(function ()
        {
            console.log("File contents: ", data);  // This will now run after the expensive operation
        }, 1000);
    }, 1000);
});

// Synchronous expensive operation starts after file read is initiated
console.log("Expensive operation starts");

for (let i = 0; i < 1000000000; i++)
{
    // Simulate an expensive task
    let j = i * 2;
}

console.log("Expensive operation ends");  // This will run before the file contents are printed