//DESCRIPTION:
//Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
//
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
//
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

//SOLUTION:
function min(arr, toReturn) {
    let result = arr.slice().sort((a, b) => a - b)[0];
    return toReturn === 'value' ? result : arr.indexOf(result)
}

console.log(min([224, 0, 1, 4, 6], 'index'))