let num1 = 15; // e.g.
let num2 = 20; // e.g.

/**
 * Create a variable called "isLargerNumber". (Do not use var.)
 * If "num2" is larger than "num1", than "isLargerNumber" should be true.
 * If "num1" is larger than "num2", than "isLargerNumber" should be false.
 * If "num1" and "num2" are equal, than "isLargerNumber" should be false.
 * Your answer should still work when "num1" and "num2" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isLargerNumber;

if (num1 < num2) {
    isLargerNumber = true}
     else if (num1 > num2) {
    isLargerNumber = false
} else if (num1 === num2) {
    isLargerNumber = false
}

console.log(isLargerNumber)