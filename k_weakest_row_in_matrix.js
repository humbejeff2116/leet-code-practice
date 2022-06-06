/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) { 
    let numOfSoldiers = [];
    let res = [];
    let i = 0
    let metLen = mat.length

    for(i; i < metLen; i++) {
        let len = mat[i].length;
        let j = 0;
        let totalNumOfSoldiers = 0;

        for(j; j < len; j++) {
            if(mat[i][j]) totalNumOfSoldiers += 1
        }
        numOfSoldiers.push({key: i, val: totalNumOfSoldiers});
    }
    i = 0;

    numOfSoldiers.sort((a, b) => a.val - b.val);

    for(i; i < k; i++) {
        res.push(numOfSoldiers[i].key)
    }

    return res
};
