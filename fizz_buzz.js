/**
 * @param {number} n
 * @return {string[]}
 */
let res = [];
var fizzBuzz = function(n) {
    let index = n - 1;
    if(!n) {
        return res
    }
    
    if (n % 5 === 0 && n % 3 === 0) { 
        res[index] = "FizzBuzz";
        n -= 1
        return fizzBuzz(n)
    }else if (n % 5 === 0) {  
        res[index] = "Buzz"
        n -= 1
        return fizzBuzz(n)
    }else if (n % 3 === 0) {
        res[index] = "Fizz"
        n -= 1
       return fizzBuzz(n)
    }else { 
        res[index] = n.toString();
        n -= 1
        return fizzBuzz(n)
    }
    
	
   
};


var fizzBuzz = function(n) {
    let res = [];
    let newNum;
    let i = 0
    
    for(i; i < n; i++) {
        newNum = i+1
        
        if (newNum % 15 === 0) res.push("FizzBuzz"); 
        else if (newNum % 5 === 0) res.push("Buzz");
    	else if (newNum % 3 === 0) res.push("Fizz");
    	else res.push(String(newNum)); 
    } 
    return res;
}
