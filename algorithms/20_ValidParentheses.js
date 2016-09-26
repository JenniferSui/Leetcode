/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    var chars = [s[0]];
    for (var i = 1; i < s.length; i++) {
        if (s[i] === map[chars[chars.length-1]]) {
            chars.pop();
        } else {
            chars.push(s[i]);
        }
    }
    return !chars.length;
};