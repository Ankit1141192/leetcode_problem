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