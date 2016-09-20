/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var str = "";
    nums.forEach(function(item, index) {
        while (num >= item) {
            str += romans[index];
            num -= item;
        }
    });

    return str;
};