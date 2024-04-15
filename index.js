function isPalindrome(word) {
  // Write your algorithm here
  let re = /[^A-Za-z0-9]/g;
  reverseWord = word.toLowerCase().replace(re, "").split("").reverse().join("")
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  };
}

/* 
  Add your pseudocode here
  let word = "mom"

  function isPalindrome(word) {
    re = /[^A-Za-z0-9]/g;
    reverseWord = word.toLowerCase().replace(re, "").split("").reverse("").join("")
  return reverseWord === word = true;
  return false if reverseWord !== word;
  }
*/

/*
  Add written explanation of your solution here

  RgeExp is used to remove unwanted characters from word passed;
    means it matches anything that is not enclosed between A-za-z0-9_
  change our word into lowecase, return a new string with matching patterns - use the regexp, split into an array, reverse them and later join the reversed new array
  check whether the two words are similar, and if so return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;