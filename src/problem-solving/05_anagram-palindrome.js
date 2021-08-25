/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */
 function isPalindromePossible(string) {
 let set = new Set();
 let listOfchar = [...string];

 listOfchar.forEach((char) => {
   if (set.has(char)) {
     set.delete(char);
   } else {
     set.add(char);
   }
 });

 return set.size < 2 ? true : false;
}

  module.exports= {
    isPalindromePossible
  }