//DESCRIPTION:
//n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
//
// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
//
// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//SOLUTION:
function digPow(n, p){
    let nStr = n.toString();
    let sum = 0;

    // Вычисляем сумму цифр, возведенных в степень p
    for (let i = 0; i < nStr.length; i++) {
        sum += Math.pow(parseInt(nStr[i]), p + i);
    }

    // Проверяем, существует ли целое число k, удовлетворяющее условию
    if (sum % n === 0) {
        return sum / n;
    } else {
        return -1;
    }
}