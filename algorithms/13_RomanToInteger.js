/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        "I": 1,
        "X": 10,
        "C": 100,
        "M": 1000,
        "V": 5,
        "L": 50,
        "D": 500
    }

    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var item = map[s[i]];
        var nextItem = map[s[i+1]];
        if (nextItem > item) {
            num += nextItem - item;
            i++;
        } else {
            num += item;
        }
    }

    return num;
};