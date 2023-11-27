//DESCRIPTION:
//Sort the given array of strings in alphabetical order, case insensitive. For example:
//
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

//SOLUTION:
sortMe = function(names) {
    return names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}
