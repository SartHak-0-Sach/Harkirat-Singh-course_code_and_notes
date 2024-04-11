/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// XXXXXXXXXXXXXXXXXXXXXXXXX    1st approach     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// function isAnagram(str1, str2) {
//   if (str1.length != str2.length)
//     return false;

//   const sortedString1 = str1.toLowerCase().split('').sort().join('');
//   const sortedString2 = str2.toLowerCase().split('').sort().join('');

//   return sortedString1 === sortedString2;
// } 

// XXXXXXXXXXXXXXXXXXXXXXXXX     2nd approach     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function check(char, str) {
  let checkCase = false;
  for (let j = 0; j < str.length; j++) {
    if (char.toLowerCase() == str[j].toLowerCase()) {
      checkCase = true;
      break;
    }
  }
  return checkCase;
}

function isAnagram(str1, str2) {
  if (str1.length != str2.length)
    return false;

  for (let i = 0; i < str1.length; i++) {
    let found = check(str1[i], str2);
    if (found == false)
      return false;
  }
  return true;
}

module.exports = isAnagram;