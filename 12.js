// Find the largest word in a sentence.

function largestWord(sentence) {
    const words = sentence.split(' ');
    let largest = '';

    for (const word of words) {
        if (word.length > largest.length) {
            largest = word;
        };
    };
    return largest;
};
console.log(largestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
