var reverseWords = function(s) {
    let str = s.trim().split(/\s+/);
    let left =0;
    let right  =str.length-1;
    while(left<right){
        [str[left],str[right]] = [str[right],str[left]];
        left++;
        right--;
    }
    return str.join(" ")
};