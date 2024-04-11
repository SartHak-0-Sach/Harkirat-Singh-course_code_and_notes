/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

  let j = cleanedStr.length - 1;

  for (let i = 0; i < j; i++) {
    if (cleanedStr[i] !== cleanedStr[j])
      return false;

    j--;
  }

  return true;
}

module.exports = isPalindrome;