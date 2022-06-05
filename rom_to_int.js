/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_NUMERALS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
    
var romanToInt = function(s) {
    let current;
    let next;
    let currentVal;
    let nextVal;
    let integer = 0;
    let i = 0;
    let sLen = s.length;
    
    if (!(1 <= s.length) || !(s.length <= 15)) {
        throw new Error("argument length should not be less one or greater than 15");
    }
    
    for (let i of s) {
        if (!(ROMAN_NUMERALS.hasOwnProperty(i))) {
            throw new Error("argument should contain only roman numerals");
            break;
        }   
    }
    
    for (i; i < sLen; i++) {
        current = s[i];
        next = s[i + 1];
        currentVal = ROMAN_NUMERALS[current];
        nextVal = ROMAN_NUMERALS[next];
        
        if (currentVal < nextVal) {
            integer += (nextVal - currentVal);
            i++;
        } else {
            integer += currentVal;
        }
    }
    
    return integer;
    
};
