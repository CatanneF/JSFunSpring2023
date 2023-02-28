let fullName = "Joe Washington"; // e.g.
let newLastName = "Fernandez"; // e.g.

// fullName = "Emily Rose";
 // let newLastName = "Smith";

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Washington";
 * let newLastName = "Fernandez";
 * The new value for "fullName" should result in "Joe Fernandez".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const index = fullName.indexOf(" ");
const oldLastName = fullName.substring(index + 1);
console.log(oldLastName);
fullName = fullName.replace(oldLastName, newLastName);
console.log(fullName);

