/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();

    var pattern = /^[-+]?[0-9]+/;
    var tmp = pattern.exec(str);

    if (tmp) {
        var num = parseInt(tmp[0]);
        var minn = -(1 << 30) * 2;
        var maxn = (1 << 30) * 2 -1 ;
        if (num < minn)
            return minn;
        if (num > maxn)
            return maxn;
        return num;
    }

    return 0;

};