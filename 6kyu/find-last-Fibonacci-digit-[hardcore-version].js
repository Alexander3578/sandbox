//DESCRIPTION:
//Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).
//
// You will just get much bigger numbers, so good luck bruteforcing your way through it ;)
//
// lastFibDigit(1) == 1
// lastFibDigit(2) == 1
// lastFibDigit(3) == 2
// lastFibDigit(1000) == 5
// lastFibDigit(1000000) == 5

//SOLUTION:
function lastFibDigit(n) {
    const pisanoPeriod = 60; // Pisano period for modulo 10

    // Adjust n to fit within the Pisano period
    const pisanoN = n % pisanoPeriod;

    if (pisanoN <= 1) {
        return pisanoN;
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= pisanoN; i++) {
        const temp = (previous + current) % 10;
        previous = current;
        current = temp;
    }

    return current;
}

// Test cases
console.log(lastFibDigit(1));      // Output: 1
console.log(lastFibDigit(2));      // Output: 1
console.log(lastFibDigit(3));      // Output: 2
console.log(lastFibDigit(1000));   // Output: 5
console.log(lastFibDigit(1000000)); // Output: 5


console.log(lastFibDigit(21))