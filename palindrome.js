// Declare two variables using prompt to get user input
let word1 = "RACECAR";
let word2 = "RECORDER";

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings to the console
console.log("Original String 1: " + word1);
console.log("Reversed String 1: " + reversedWord1);
console.log("Original String 2: " + word2);
console.log("Reversed String 2: " + reversedWord2);

// Log the truth value of whether the original string is equivalent to the reversed string
console.log("Is the first word a palindrome? " + (word1 === reversedWord1));
console.log("Is the second word a palindrome? " + (word2 === reversedWord2));