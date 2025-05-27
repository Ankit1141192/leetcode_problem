var isSubsequence = function(s, t) {
    let left = 0;
    let right = 0;
    while(left<s.length && right<t.length){
        if(s[left]==t[right]){
            left++;
        }
        right++;
    }
    
    return left === s.length
};