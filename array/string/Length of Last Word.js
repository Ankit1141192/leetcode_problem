// 58. Length of Last Word
var lengthOfLastWord = function(s) {
    let end = s.length-1;

    while(end>=0 && s[end]=== " "){
        end--;
    }
    
    let start = end;
    while(start >=0 && s[start] !== " "){
        start--;
    }
    return end - start;
};