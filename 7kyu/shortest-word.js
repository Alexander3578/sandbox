//DESCRIPTION:
//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

//SOLUTION:
function findShort(s){
    return s.split(' ').sort((a, b) => { return a.length - b.length})[0].length;
}

console.log(findShort('adad afdad asd d'))