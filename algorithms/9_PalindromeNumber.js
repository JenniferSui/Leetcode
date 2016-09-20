/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var str = "#";
    for (var i = 0; i < x.length; i++) {
        str += x[i] + "#";
    }
    var mid = Math.floor(str.length / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str [mid * 2 - i])
            return false;
    }

    return true;
};