//DESCRIPTION:
//Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.
//
// First, calculate the difference of the same index of the arr1 and arr2. Like this:
//
// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]
// Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result ;-)
//
// Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:
//
//   maxvalue , minvalue
// [    8     ,    2     ]

//SOLUTION:

function maxMin(arr1,arr2){
    let resultArr = arr1.reduce((acc, current, i) => acc.concat(Math.abs(current - arr2[i])), [])
    return [].concat(Math.max(...resultArr), Math.min(...resultArr))
}

console.log(maxMin([1,3,5],[9,8,7]));