// 13. Roman to Integer
function romanToInt(s) {
    let Symbol = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let Value = [1000, 500, 100, 50, 10, 5, 1];
     let sum = 0;
    for (let i = 0; i < s.length; i++) {
       
        let currentVal = Value[Symbol.indexOf(s[i])];
        let nextVal = Value[Symbol.indexOf(s[i + 1])] || 0; 

        
        if (currentVal < nextVal) {
            sum -= currentVal;
        } else {
            sum += currentVal;
        }
    }

    return sum;
}
