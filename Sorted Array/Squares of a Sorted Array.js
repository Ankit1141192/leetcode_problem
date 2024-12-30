// Squares of a Sorted Array
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i] * nums[i];
  }
  for(i=0;i<nums.length-1;i++){
      for(j=0;j<nums.length-i-1;j++){
          if(nums[j]>nums[j+1]){
              let temp = nums[j]
              nums[j] = nums[j+1]
              nums[j+1] = temp
          }
      }
  }
  return nums;
};