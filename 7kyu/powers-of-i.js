// DESCRIPTION:
//Complete the function pofi that returns
// i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).

// SOLUTION
function pofi(n){
    const result = ( n ) => n === 0 || n % 4 === 0 ? '1' : n === 1 || n % 4 === 1 ? 'i' : n === 2 || n % 4 === 2 ? '-1' : '-i';
    return result(n)
}
