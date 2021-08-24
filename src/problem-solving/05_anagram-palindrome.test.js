import fs from 'fs';
import path from 'path';
import { isPalindromePossible } from './05_anagram-palindrome.js';

describe('anagram-palindrome', () => {
  it('should return true for possible to make palindrome', () => {
    expect(isPalindromePossible('aaabbbb')).toBe(true);
    expect(isPalindromePossible('cdcdcdcdeeeef')).toBe(true);

    const bigContent = fs.readFileSync(path.resolve(__dirname, '../test-data/anagram-palindrome-success1.txt'),'ascii');
    expect(isPalindromePossible(bigContent)).toBe(true);
  });

  it('should return false for if not possible to make palindrome', () => {
    expect(isPalindromePossible('cdefghmnopqrstuvw')).toBe(false);

    const bigContent = fs.readFileSync(path.resolve(__dirname, '../test-data/anagram-palindrome-fail1.txt'),'ascii');
    expect(isPalindromePossible(bigContent)).toBe(false);
  });
});

var pal = function (input){
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

  return (bool[false] <= 1 && bool[true] >= 1)
}
