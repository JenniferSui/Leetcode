/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height){
    return Math.max(fn(height), fn(height.reverse()));
};

function fn(height) {
    var start = 0;
    var end = height.length - 1;
    var maxV = 0;

    while (start < end) {
        var contains = Math.min(height[start], height[end]) * (end - start);
        maxV = Math.max(maxV, contains);

        if (height[start] < height[end]) {
            start ++;
        } else {
            end --;
        }
    }

    return maxV;
}