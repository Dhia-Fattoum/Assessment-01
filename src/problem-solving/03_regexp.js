/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */
function containsNumber(str) {
return  /[0-9]/.test(str)
}
function containsRepeatingLetter(str){
   return   /([A-Za-z])\1{1,}/i.test(str)    
}
function endsWithVowel(str){
    return   /.*[aeiouy]$/i.test(str)    
 }
function isUSD(str){
    return /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(str)
   
}
function captureThreeNumbers(text) {
    const regex = /\d{3}/;
  
    const result = text.match(regex);
  
    return result ? result[0] : false;
  }

function matchesPattern(string){
    if(string.match(/^\d{3}-\d{3}-\d{4}$/)){
        return true
    }else{
        return false
    }
}
   module.exports = {
       isUSD,
       captureThreeNumbers,
       matchesPattern,
       endsWithVowel,
       containsNumber,
      containsRepeatingLetter

   }