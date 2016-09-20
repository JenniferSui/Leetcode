/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var minn = -(1 << 30) * 2;
    var maxn = (1 << 30) * 2 - 1;
    var symbol = x >= 0 ? 1 : -1;
    var num = Math.abs(x);
    num = parseInt(num.toString().split('').reverse().join('')) * symbol;
    if(num < minn || num > maxn)
        return 0;
    else
        return num;
};