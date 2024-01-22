//DESCRIPTION:
//Write a function that returns the number of arguments it received.
//
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

//SOLUTION:
const args_count = () => {
    return arguments.length;
}

console.log(args_count(1, 2, 3, 4, 5))