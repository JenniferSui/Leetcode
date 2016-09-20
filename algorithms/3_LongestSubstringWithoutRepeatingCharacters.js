/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') {
        return 0;
    }
    var maxLen = 1;
    var currentLen = 1;
    for(var i = 1; i < s.length; i ++) {
        var repeat = s.substr(i - currentLen, currentLen).indexOf(s.substr(i, 1));
        if(repeat === -1) {
            currentLen ++;
        }
        else {
            currentLen -= repeat;
        }
        if(maxLen < currentLen) {
            maxLen = currentLen;
        }
    }
    return maxLen;
};