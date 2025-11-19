// Check if a character is uppercase or lowercase.

function isUpperCase(char){
    return char >= 'A' && char <= 'Z';
}

function isLowerCase(char){
    return char >= 'a' && char <= 'z';
}

// Example usage:
console.log(isUpperCase('A')); // true
console.log(isUpperCase('a')); // false
console.log(isLowerCase('a')); // true
console.log(isLowerCase('A')); // false