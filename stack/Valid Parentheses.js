var isValid = function(s) {
    let stack = [];
    let N = s.length
    for(i=0;i<N;i++){
         if (s[i] == '{') {
            stack.push('}');
        } else if (s[i] == '[') {
            stack.push(']');
        } else if (s[i] == '(') {
            stack.push(')');
        }
        else if (stack.pop() !== s[i]) {
            return false;
        }
    }
    return !stack.length ;
    
};