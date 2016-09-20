/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var pattern = "^" + p + "$";
    pattern = new RegExp(pattern, 'g');
    return pattern.test(s);
};