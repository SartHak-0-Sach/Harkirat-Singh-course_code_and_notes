// var a = 1;
// a = 2;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = 9;
// // c = 7;
// console.log(c);

// let firstName = "Sarthak";
// let age = 19;
// let isMarried = false;

// console.log("My name is " + firstName + " and my age is " + age);

// if (isMarried) {
//     console.log(firstName + "is married");
// }
// else {
//     console.log(firstName + "not married")
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Program-0 Print sum of all numbers from 1 to n using for, while, do-while loops

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// var totalSum = (n) => {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     console.log(ans);
// }

// var totalSum2 = function (n) {
//     let ans = 0;
//     let i = 1;
//     while (i <= n) {
//         ans += i;
//         i++;
//     }
//     console.log(ans);
// }

// var totalSum3 = (n) => {
//     let ans = 0;
//     let i = 1;
//     do {
//         ans += i;
//         i++;
//     } while (i <= n);
//     console.log(ans);
// }

// rl.question('Enter a number: ', (answer) => {
//     let n = parseInt(answer);
//     totalSum(n);
//     totalSum2(n);
//     totalSum3(n);
//     rl.close();
// });


// Program-1 Write a program that greets a person given their first and last name



// Program-2 Write a program that greets a person based on their gender.



// Program-3 Write a program that counts from 0-1000 and prints all of these numbers.

// for(let i = 0; i <= 1000; i++)
// {
//     console.log(i);
// }

// Program-4 Write a program that prints all even numbers in an array.



// Program-5 Write a program that can print the biggest number in an array.



// Program-6 Write a program that prints all the male people's first name given a complex object.



// Program-7 Write a program that reverses all the elements of an array



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const personArray = ["Sarthak", "Harkirat", "Sanjay"];

// const arraySize = personArray.length;

// console.log(personArray[0] + " is best friend of " + personArray[1]);

// personArray.push("Abhay");
// personArray.push("Saurabh");

// console.log(personArray[3]);
// console.log(arraySize);

// const UpdatedArraySize = personArray.length;

// console.log(UpdatedArraySize);
// As updating the previous arraySize will throw error but adding removing changing values of const array doesn't give error

// const allUsers = [
//     {
//         firstName: "Sarthak",
//         lastName: "Sachdev",
//         metadata: [
//             {
//                 age: 21, // here metadata is an array of objects and not an object in itself but an array
//             },
//         ],
//         gender: "male",
//     },
//     {
//         firstName: "Harkirat",
//         lastName: "Singh",
//         gender: "female",
//     },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i]["gender"] == "male") {
//         console.log(`${allUsers[i]["firstName"]} is male`);

//         // Check if metadata exists before accessing age property
//         if (allUsers[i]["metadata"] && allUsers[i]["metadata"][0]["age"] !== undefined) {
//             console.log(allUsers[i]["firstName"] + " is male and " + allUsers[i]["metadata"][0]["age"] +" is his age");
//         } else {
//             console.log(`${allUsers[i]["firstName"]} is male, but age is not available`);
//         }
//     }
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Q1 Write some function that finds sum of 2 numbers



// Q2 Write a function that displays result in a pretty format



// Q3 Write a function that takes this sum and prints it in passive tense

// function sum(num1, num2, fnToCall)
// {
//     return num1 + num2;
// }

// function displayResult(result)
// {
//     console.log("Result of sum is: " + result);
// }

// function displayResultInPassive(data)
// {
//     console.log("Sum's result is: " + data);
// }

// // If we are only allowed to call one function after this and we don't know which function user will call that is why we add callbacks(fnToCall) in our function to do this:-

// const ans = sum(1,2,displayResultInPassive);

// Q4 Write a function that can convert numbers to text



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// let sum = 0;

// for (let i = 0; i < 1000000000; i++) {
//     sum += i;
// }

// console.log(sum); // bounty question

// first way of calling functions

// var bro1 = function(a,b){
//     return a + b;
// }

// console.log(bro1(2,5));

// second way of calling functions

// var bro2 = (a,b) =>{
//     return a + b;
// }

// third way

// var bro3 = new Function('a', 'b', 'return a + b');

// fourth way

// var obj = {
//     bro4: function(a, b) {
//         return a + b;
//     }
// };

// console.log((String)(bro1(4,6)) + " " + (String)(bro2(7,4)) + " " + (String)(bro3(3,6)) + " " + (String)(obj(obj.bro4(8, 9)))); // or you can also call bro4 using obj["bro4"](8,9)

// var bro3 = new Function('a', 'b', `
// This is a more complex function
//     var result = a * b;
//     if (result > 10) {
//         return 'High';
//     } else {
//         return 'Low';
//     }
// `);

// // Example of calling the function
// console.log(bro3(4, 3)); // Output: 'Low'
// console.log(bro3(5, 3)); // Output: 'High'

