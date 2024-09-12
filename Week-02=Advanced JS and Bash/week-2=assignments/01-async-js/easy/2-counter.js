/*
Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

var count = 1;
function counter()
{
    setTimeout(function ()
    {
        console.log(count);
        count++;
        counter();
    }, 1000)
}

counter();