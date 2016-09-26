/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var closest = nums[0] + nums[1] + nums[2];
    var diff = Math.abs(closest - target);
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        var start = i + 1;
        var end = nums.length - 1;
        while (start < end) {
            var sum = nums[i] + nums[start] + nums[end];
            var newDiff = Math.abs(sum - target);
            if(newDiff < diff) {
                diff = newDiff;
                closest = sum;
            }
            if(sum < target) {
                start ++;
            }
            else {
                end --;
            }
        }
    }
    return closest;
};