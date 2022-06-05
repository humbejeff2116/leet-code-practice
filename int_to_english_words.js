/**
 * @param {number} num
 * @return {string}
 */
const ONES = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
const TEENS = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

var numberToWords = function(num) {
    let modulus 
    if(num > (2**31 -1)) throw new Error("integer out of expected range")
    
    if (num === 0) return "Zero"
    
    if (num >= 1_000_000_000) { 
        modulus = num % 1_000_000_000
        return numberToWords(Math.floor(num / 1_000_000_000)) + " Billion" + (modulus ? ` ${numberToWords(modulus)}` : "" ) 
    }
    
    if (num >= 1_000_000) { 
        modulus = num % 1_000_000
        return numberToWords(Math.floor(num / 1_000_000)) + " Million" + (modulus ? ` ${numberToWords(modulus)}` : "" ) 
    }
    
    if (num >= 1_000) {
        modulus = num % 1_000
       return numberToWords(Math.floor(num / 1_000)) + " Thousand" + (modulus ? ` ${numberToWords(modulus)}` : "")
    }
    
    if (num >= 100) {
        modulus = num % 100
      return ONES[Math.floor(num / 100)] + " Hundred" + (modulus ? ` ${numberToWords(modulus)}` : "")
    }
    
    if (num >= 20 && num < 100) {
        modulus = num % 10
        return TENS[Math.floor(num / 10)] + (modulus ? ` ${numberToWords(modulus)}` : "")  
    }
    
    if (num < 20 && num >= 10) {
        return TEENS[num - 10]
    }
    
    if (num < 10) {
       return  ONES[num]
    }
};
