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
 
const isPalindromePossible = function (input){
    let obj = {}
    let str = input.split('')
    for (ele of str){
      if (obj.hasOwnProperty(ele)){
        obj[ele] += 1
      } else{
        obj[ele] = 1
      }
    }
    console.log(obj)
    let val = Object.values(obj)
    console.log(val)
    let bool = {true:0,false:0}
    for(ele of val){
      if(ele % 2 === 0){
        bool[true] += 1
      } else{
        bool[false] += 1
      }
    }
    console.log(bool)
  
    return (bool[false] <= 1 && bool[true] >= 0 && input.length > 1)
  }
  module.export = isPalindromePossible