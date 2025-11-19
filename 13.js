// Remove spaces from a string.

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}
// Example usage:
const input = "Hello,   World! This is a test.";
const output = removeSpaces(input);
console.log(output); // "Hello,World!Thisisatest."