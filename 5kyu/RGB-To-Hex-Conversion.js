//DESCRIPTION:
//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

//SOLUTION:
function rgb(r, g, b) {
    // Переводит одно число в шестнадцатеричную систему, обрезая и дополняя по необходимости
    const toHex = (x) => {
        if (x <= 0) return "00";
        if (x >= 255) return "FF";
        return x.toString(16).padStart(2, "0").toUpperCase();
    };

    return toHex(r) + toHex(g) + toHex(b);
}

// Примеры использования
console.log(rgb(173, 255, 47));   // "9400D3"
