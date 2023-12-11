//DESCRIPTION:
//Write
//
// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
//
// For example:
//
// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

//SOLUTION:
function smaller(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

console.log(smaller([5, 4, 3, 2, 1]));