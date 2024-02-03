function sum1(a, b) { // this is a normal function
    return a + b;
}

const sum2 = (a, b) => { // this is an arrow function
    return a + b;
}


// learning how to use maps

function TransformationFunction(a) {
    return Math.pow(a, 3);
}

const SampleArray = [1, 2, 3, 4, 5, 6, 7];

const TransformedSampleArray = SampleArray.map(TransformationFunction);

TransformedSampleArray.forEach(element => console.log(element));


// maps can even be used with strings
const str = "hello";

const result = Array.prototype.map.call(str, function (char) {
    return char.toUpperCase();
});

console.log(result); // Output: ["H", "E", "L", "L", "O"]


// maps can also be used for array of strings
const arrayOfStrings = ["apple", "banana", "cherry"];

const uppercasedArray = arrayOfStrings.map(function (str) {
    return str.toUpperCase();
});

console.log(uppercasedArray); // Output: ["APPLE", "BANANA", "CHERRY"]


// maps can also be used for array of characters
const SampleString = "hello";

const charArray = Array.prototype.map.call(SampleString, function (char) {
    return char.toUpperCase();
});

console.log(charArray);
// Output: ["H", "E", "L", "L", "O"]


// assignment answer
function MapYourArrays(SampleArray, TransformationFunction) {
    let NewSampleArray = SampleArray.map(TransformationFunction);
    return NewSampleArray;
}

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8];

function SampleTransformationFunction(a) {
    return a * 3;
}

const NewSampleArray = MapYourArrays(sampleArray, SampleTransformationFunction);


NewSampleArray.forEach(element => console.log(element));


// Learning syntax of how to use filter

const arr = [1, 2, 3, 4, 5, 6]

// const FilteringLogic = n => n % 2 === 0; // single line arrow function
// const ans = arr.filter(FilteringLogic);

const ans = arr.filter(n => n % 2 === 0); // merged the above two lines of code by using an anonymous arrow function
console.log(ans);


// can use with any type of arrays, example array of strings
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry'];
const filteredNames = names.filter(name => !name.toLowerCase().startsWith('h'));
console.log(filteredNames);


// Cannot be used with strings and so for strings we have to first convert them to array of characters then use filter then reassemble if needed
const inputString = 'Hello, World!';
const characterArray = inputString.split('');
const filteredArray = charArray.filter(char => char.toLowerCase() !== 'h');
const filteredString = filteredArray.join('');
console.log(filteredString);

