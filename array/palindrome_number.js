// check palindrome
function isPalindrome(num){
    let S = num.toString()
    let bag = '';
    for(i=S.length-1;i>=0;i--){
        bag+=S[i]
        if(bag===S){
            return true;
        }
    }
    return false;
}

function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // For even-length numbers: x === reversedHalf
    // For odd-length numbers: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
