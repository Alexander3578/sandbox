//DESCRIPTION:
//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
//
// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

//SOLUTION:
function whatCentury(year)
{
    let latsNumber = Math.ceil(Number(year) / 100).toString().split('')[1];
    let end = [];
    if(Math.ceil(Number(year) / 100) !== 13 && latsNumber === '3') {
        end.push('rd');
    } else if(Math.ceil(Number(year) / 100) !== 12 && latsNumber === '2'){
        end.push('nd');
    } else if(Math.ceil(Number(year) / 100) !== 11 && latsNumber === '1'){
        end.push('st');
    } else {
        end.push('th');
    }
    return `${Math.ceil(Number(year) / 100)}${end.join('')}`
}

console.log(whatCentury('1234'))