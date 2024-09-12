/*
Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

// Data to be written to the file
const data = "This is the new content being written to the file!";

// Asynchronously write data to a file
fs.writeFile("output.txt", data, "utf-8", function (err)
{
    if (err)
    {
        console.error("Error writing to the file", err);
        return;
    }

    console.log("File written successfully!");
});

// Simulate another operation to see async behavior
console.log("This will print before the file is written due to async nature.");
