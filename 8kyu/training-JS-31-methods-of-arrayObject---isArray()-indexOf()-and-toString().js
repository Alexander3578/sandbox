//DESCRIPTION:
//Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
//
// If arr is not an array, function should return:
//
// "It's a fake array"
// If arr contains elements 5 and 13, function should return:
//
// "It's a black array"
// If arr contains neither 5 nor 13, function should return:
//
// "It's a white array"

//SOLUTION:
function blackAndWhite(arr){
    return !Array.isArray(arr)
        ? "It's a fake array"
        : ((arr.indexOf(5) !== -1) && (arr.indexOf(13) !== -1))
            ?  "It's a black array" : "It's a white array"
}


const result = blackAndWhite([5,13] );
console.log(result); // Выведет 532350