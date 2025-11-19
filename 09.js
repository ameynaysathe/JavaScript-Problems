// Find the minimum number in an array.

function findMinimum(arr){
    return Math.min(...arr);
}
console.log(findMinimum([3, 1, 4, 1, 5, 9])); // 1  
console.log(findMinimum([-7, -3, -2, -8]));   // -8