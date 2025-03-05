// 11. Container With Most Water
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