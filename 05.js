// Sum all numbers in an array.

function sumArray(arr){
    return arr.reduce((sum , num ) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, 0, 1])); // Output: 0