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

const personArray = ["Sarthak", "Harkirat", "Sanjay"];

const arraySize = personArray.length;

console.log(personArray[0] + " is best friend of " + personArray[1]);

personArray.push("Abhay");
personArray.push("Saurabh");

console.log(personArray[3]);
console.log(arraySize);

const UpdatedArraySize = personArray.length;

console.log(UpdatedArraySize);
// As updating the previous arraySize will throw error but adding removing changing values of const array doesn't give error

