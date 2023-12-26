//DESCRIPTION:
//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'

//SOLUTION:
function removeDuplicateWords (s) {
    return s.split(' ').filter((word, i, arr) => arr.indexOf(word) === i).join(' ')
}