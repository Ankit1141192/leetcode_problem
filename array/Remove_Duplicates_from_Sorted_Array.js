// Remove Duplicates from Sorted Array
function removeDuplicate(nums){
    if(nums.length===0) return 0;
    let i =0;
    for(j=1;j<nums.length;j++){
        if(nums[j] !==nums[i]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
}