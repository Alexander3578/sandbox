//DESCRIPTION:
//Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

//SOLUTION:
function getCount(str) {

        const regex = /[aeiou]/gi;
        const matches = str.match(regex);
        return matches ? matches.length : 0;
}

