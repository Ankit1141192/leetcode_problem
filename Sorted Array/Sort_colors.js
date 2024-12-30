// Sort_Colors
function sortColors(nums){
    let N = nums.length
    let low =0,mid =0,high =N-1;
    
    while(mid<=high){
      if(nums[mid]=== 0){
        [nums[low],nums[mid]]= [nums[mid],nums[low]];
        low++;
        mid++
      }
      else if(nums[mid]===1){
        mid++
      }
      else{
        [nums[mid],nums[high]] = [nums[high],nums[mid]];
        high--;
      }
        
    }
    return  nums.join(" ")
}