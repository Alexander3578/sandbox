//DESCRIPTION:
//Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:
//
// the code length should be 8;
//
// The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".
//
// The 3rd-6th characters should be four numbers.
//
// the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".
//
// If Your code runs 100 times, It should generate 100 non duplicate verification codes.
//
// Some valid verification code examples:
//
// AB1234#$ MG6145$@ KJ2249@&
// CD5678%^ IG7593~% FH8638@&
// EF9012!@ GB7047%$ KD7604^%

//SOLUTION:
function rndCode() {
    let result = []
    for (let i = 0; i < 2; i++) {
        result.push("ABCDEFGHIJKLM"[Math.floor(13 * Math.random())]);
    }
    for (let i = 2; i < 6; i++) {
        result.push(Math.floor(10 * Math.random()));
    }
    for (let i = 6; i < 8; i++) {
        result.push("~!@#$%^&*"[Math.floor(9 * Math.random())]);
    }

    return result.join('')
}
    console.log(rndCode())