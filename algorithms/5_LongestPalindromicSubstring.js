/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str = Manacher(s);
    return str;
};

var Manacher = function(s) {
    var str = "*#";
    var dp = [];
    var maxn = 0;
    var idx = 0;

    for(var i = 0; i < s.length; i++)
        str += s[i] + "#";

    console.log(str);

    for(var i = 1; i < str.length; i++) {
        if (maxn > i) dp[i] = Math.min(dp[2*idx - i], maxn - i);
        else dp[i] = 1;

        while(str[i - dp[i]] === str[i + dp[i]]) dp[i] ++;

        if(dp[i] + i > maxn)
            maxn = dp[i] + i, idx = i;
    }

    console.log(dp);

    var ans = 0;
    var pos;

    for (var i = 1; i < str.length; i++) {
        if (dp[i] > ans)
            ans = dp[i], pos = i;
    }

    var f = str[pos] === "#";
    var tmp = f ? "" : str[pos];
    var startPos = f ? pos + 1 : pos + 2;
    var endPos = f ? dp[pos] - 3 + startPos : dp[pos] - 4 + startPos;

    for(var i = startPos; i <= endPos; i += 2)
        tmp = str[i] + tmp + str[i];

    return tmp;
};