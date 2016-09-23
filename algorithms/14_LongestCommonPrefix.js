/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        if (prefix.length === 0 || strs[i].length === 0) {
            return "";
        }
        var len = prefix.length < strs[i].length ? prefix.length : strs[i].length;
        var j = 0;
        for (; j < len; j++) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
};