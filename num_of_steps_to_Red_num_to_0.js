/**
 * @param {number} num
 * @return {number}
 */
//number of steps to reduce a number to zero
var numberOfSteps = function(num) {
    if (!num) {
        return 0
    }

    if (num % 2 === 0) {
        return 1 + numberOfSteps(num / 2)
    } else {
        return 1 + numberOfSteps(num - 1)
    }
};
