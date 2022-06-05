/**
 * @param {string} digits
 * @return {string[]}
 */


const strings = {
    "2": ["a", "b", "c"], 
    "3": ["d", "e", "f"], 
    "4": ["g", "h", "i"], 
    "5": ["j", "k", "l"], 
    "6": ["m", "n", "o"], 
    "7": ["p", "q", "r", "s"], 
    "8": ["t", "u", "v"], 
    "9": ["w", "x", "y", "z"]
}

var letterCombinations = function(digits) {
    let res = [];
    let digitsLen = digits.length
    let i = 0;
   
    if(!digits) return res;
    
    if(digitsLen < 2) return strings[digits]
    
    for(i; i < digitsLen; i++) {
        permutateArray(strings[digits[i]])  
    } 
    return res;
  
    function permutateArray(arr) {
        if (res.length) {
      	    res = res.flatMap(str1 => arr.map(str2 => str1 + str2)) 
        } else {
            res.push(...arr)
        } 
    }
};
