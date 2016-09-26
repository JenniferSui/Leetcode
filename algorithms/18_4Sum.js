/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var results= [];
    nums.sort(function(a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) {
                continue;
            }

            var start = j + 1;
            var end = nums.length - 1;
            while (start < end) {
                if (start > j + 1 && nums[start] === nums[start-1]) {
                    start ++;
                    continue;
                }
                if (end < nums.length - 1 && nums[end] === nums[end + 1]) {
                    end --;
                    continue;
                }

                var sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (sum === target) {
                    results.push([nums[i], nums[j], nums[start], nums[end]]);
                    start ++;
                    end --;
                } else if (sum < target) {
                    start ++;
                } else {
                    end --;
                }
            }
        }
    }
    return results;
};