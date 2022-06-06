/**
 * @param {number[][]} accounts
 * @return {number}
 */

//You are given an m x n integer grid accounts where accounts[i][j] 
//is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
//Return the wealth that the richest customer has.

//A customer's wealth is the amount of money they have in all their bank 
//accounts. The richest customer is the customer that has the maximum wealth.
var maximumWealth = function(accounts) {
    let highestSum = 0
    let asLen = accounts.length
    
    for (let i = 0; i < asLen; i++) { 
        let currSum = 0  
        let aLen = accounts[i].length 
        
        for (let j = 0; j < aLen; j++) { 
            currSum += accounts[i][j]    
        }
        if (highestSum < currSum) highestSum = currSum;    
    }
    return highestSum
};
