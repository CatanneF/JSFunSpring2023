let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isPalindrome;

const reverseString = (str) => {
    var splitString = str.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    if(string === joinArray) {
        isPalindrome = true  
    } else {
        isPalindrome = false
    }
    console.log(isPalindrome);
}

reverseString(string);

