//Maximum Subarray Sum With Length Divisible by K
// You are given an array of integers nums and an integer k.

// Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

// fix problem
var maxSubarraySum = function(nums, k) {
    const n = nums.length;
    let maxSum = -Infinity;
    g

    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + k - 1; j < n; j += k) {
            const currentSum = prefixSums[j + 1] - prefixSums[i];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};