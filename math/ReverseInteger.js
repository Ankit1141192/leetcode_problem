// reverse Integer
var reverse = function(x) {
    let isNegative = x<0;
    x = Math.abs(x);
    let bag = 0;
    while(x!==0){
        let digit = x%10;
        bag =bag*10 +digit;
        x = Math.floor(x/10)
    }
    if(isNegative) bag =-bag;
    if(bag<Math.floor(-(2**31)) || bag>Math.floor(2**31) -1) return 0;
    return bag;
};