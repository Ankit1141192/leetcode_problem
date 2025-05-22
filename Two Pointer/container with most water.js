// Approaching the problem using the two pointer technique
// The idea is to use two pointers, one at the beginning and one at the end of the array.
// We calculate the area formed by the lines at these two pointers and move the pointer pointing to the shorter line towards the other pointer.
// This is because the area is limited by the shorter line, so moving the taller line won't increase the area.
// We repeat this process until the two pointers meet.
// The time complexity of this approach is O(n), where n is the number of elements in the array.
// The space complexity is O(1) since we are using only a constant amount of extra space.
var maxArea = function(height) {
    let l =0;
    let r = height.length-1;
    let maxWater = 0;

    while(l<r){
        let heights = Math.min(height[l],height[r]);
        let width = r-l;
        let water = heights*width;
        maxWater = Math.max(maxWater,water);
        if(height[l]<height[r]){
            l++;
        }
        else{
            r--;
        }
    }
    return maxWater
};