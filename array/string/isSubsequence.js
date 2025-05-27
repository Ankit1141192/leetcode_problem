// Approach  Using two pointers
// how to write code
// 1. Initialize two pointers, one at the start and one at the end of the array
// 2. Compare the elements at the two pointers
// 3. If the elements are equal, increment both pointers
// 4. If the elements are not equal, decrement the left pointer
// 5. Repeat steps 2-4 until the left pointer meets the right pointer
// 6. Return the left pointer as the result

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
