var isDivide = function(n){
    let num = n
    while(n>0){
        rem = n%10;
        if(rem == 0 || num%rem!==0){
            return false;
        }
        n = Math.floor(n/10);
    }
    return true;
}
var selfDividingNumbers = function(left, right) {
    let bag = []
    for(i=left;i<=right;i++){
        if(isDivide(i)){
            bag.push(i)
        }
    }
    return bag
};