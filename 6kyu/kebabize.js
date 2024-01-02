//DESCRIPTION:
//Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

//SOLUTION:
function kebabize(str) {
    let kebabized = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (/[A-Z]/.test(currentChar)) {
            if (i !== 0) {
                kebabized += '-';
            }
            kebabized += currentChar.toLowerCase();
        } else if (/[a-z]/.test(currentChar)) {
            kebabized += currentChar;
        }
    }

    return kebabized;
}
