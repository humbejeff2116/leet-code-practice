/**
 * @param {number} num
 * @return {string}
 */

 const ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}
 
let numKeys = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
   
const intToRoman = (num) => {
    let romanNum = '';
    let numKeysValue;
    let i = 0;
    let numKeysLen = numKeys.length;
    let floorNum
    
    for (i; i < numKeysLen; i++) {
        numKeysValue = numKeys[i];
        
        floorNum = Math.floor(num / ROMAN_NUMERALS[numKeysValue]);
        num %= ROMAN_NUMERALS[numKeysValue]; 

        if (floorNum !== 0) {
            romanNum += numKeysValue.repeat(floorNum);
        }

        if (num === 0) break;

    }
 
  return romanNum;
};
