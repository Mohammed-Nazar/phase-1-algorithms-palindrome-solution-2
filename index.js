function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    firstPart = word[i];
    secondPart = word[j];
    if (firstPart!== secondPart) {
      return false;
    }
    return true;
  }
}

/* 
  Add your pseudocode here
  split the word into 2 parts and itreate throw the first part 
  and the second part if they are the same
  return true if not flase
*/

/*
  Add written explanation of your solution here
  first we divide the words into 2 parts
  the itreate throw both parts but for the second
  part we start with last letter then each part
  saved in a variable
  if the first part is not the same as the second part
  return false
  else return true


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
