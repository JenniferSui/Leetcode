/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var targets = [];
    var hash = {};
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        var target = nums[i];
        var start = i + 1;
        var end = nums.length - 1;
        while (start < end) {
            var sum = nums[start] + nums[end];
            if (hash[target + "," + nums[start] + "," + nums[end]]) {
                start ++;
                end --;
            } else if (sum + target === 0) {
                targets.push([target, nums[start], nums[end]]);
                hash[target + "," + nums[start] + "," + nums[end]] = 1;
                start ++;
                end --;
            } else if (sum + target < 0) {
                start ++;
            } else {
                end --;
            }
        }
    }
    return targets;
};
