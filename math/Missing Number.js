var missingNumber = function(nums) {
    let res = nums.length;
    for(i=0;i<nums.length;i++){
        res+= i-nums[i]
    }
    return res
};