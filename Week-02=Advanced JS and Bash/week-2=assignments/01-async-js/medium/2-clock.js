/*
Using 1 - counter.md or 2 - counter.md from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

const updateClock = () =>
{
    const now = new Date();

    // 24-hour format (HH:MM:SS)
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12-hour format with AM/PM
    const hours12 = String(now.getHours() % 12 || 12).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;

    // Clear console and display time
    console.clear();
    console.log('24-Hour Format:', time24);
    console.log('12-Hour Format:', time12);
};

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();