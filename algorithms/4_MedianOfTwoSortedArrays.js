/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    if((len1 + len2) % 2 === 0) {
        var r1 = find(nums1, 0, len1, nums2, 0, len2, (len1 + len2) / 2);
        var r2 = find(nums1, 0, len1, nums2, 0, len2, (len1 + len2) / 2 + 1);
        return (r1 + r2) / 2;
    } else {
        return find(nums1, 0, len1, nums2, 0, len2, (len1 + len2 + 1) / 2);
    }
};
var find = function(nums1, start1, end1, nums2, start2, end2, k) {
    var n = end1 - start1;
    var m = end2 - start2;

    if(n <= 0) {
        return nums2[start2 + k - 1];
    }
    if(m <= 0) {
        return nums1[start1 + k - 1];
    }
    if(k === 1) {
        return nums1[start1] < nums2[start2] ? nums1[start1] : nums2[start2];
    }
    var mid1 = Math.floor((start1 + end1) / 2);
    var mid2 = Math.floor((start2 + end2) / 2);

    if(nums1[mid1] <= nums2[mid2]) {
        if(Math.floor(n / 2) + Math.floor(m / 2) + 1 >= k) {
            return find(nums1, start1, end1, nums2, start2, mid2, k);
        } else {
            return find(nums1, mid1 + 1, end1, nums2, start2, end2, k - Math.floor(n / 2) - 1);
        }
    } else {
        if(Math.floor(n / 2) + Math.floor(m / 2) + 1 >= k) {
            return find(nums1, start1, mid1, nums2, start2, end2, k);
        } else {
            return find(nums1, start1, end1, nums2, mid2 + 1, end2, k - Math.floor(m / 2) - 1);
        }
    }
}