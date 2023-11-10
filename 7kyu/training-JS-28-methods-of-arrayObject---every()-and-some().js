//DESCRIPTION:
//Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. Your task is find the first pair of mirror-image number and return as an array. The two number must be adjacent, and the returned array is in accordance with the order from left to right.
//
// What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.
//
// If no such number is found, return[-1,-1]

//SOLUTION:
function mirrorImage(arr = [454,0,57,0,16,88]){
    let a, b, c;
    let bool = arr.some((el, i) => {
        a = el;
        if(i === arr.length - 1) {
            c = false;
        } else c = arr[i + 1];
        b = Number(c.toString().split('').reverse().join(''));
        return a === b;
    })

    return bool ?  [a, c] : [-1, -1]

}

console.log(mirrorImage());