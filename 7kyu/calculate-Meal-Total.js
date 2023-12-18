// DESCRIPTION
// Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.
// You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

//SOLUTION:
function calculate_total(subtotal, tax, tip) {
    return subtotal === 0
        ? 0
        : Math.round(((subtotal * (tax / 100)) + (subtotal * (tip / 100) + subtotal)) * 100) / 100
}