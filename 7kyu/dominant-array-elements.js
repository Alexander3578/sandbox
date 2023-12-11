// DESCRIPTION
// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements.

//SOLUTION:
function solve(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let moment = true;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] <= arr[j]){
                moment = false;
            }
        }
        if(moment) result.push(arr[i])
    }
    return result;
}

console.log(solve([92,52,93,31,89,87,77,105]));