function reverse(x){
    let bag = ''
    let str = x.toString()
    for(let i =str.length-1;i>=0;i--){
        bag+=str[i]
    }
    let result = parseInt(bag)
    result = x < 0 ? -result : result; 
     if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return result;
}