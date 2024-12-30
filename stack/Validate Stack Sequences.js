// validate Stack Sequences
var validateStackSequences = function(pushed, popped) {
    let stack =[];j =0;n=pushed.length;

    for(let i =0;i<n;i++){
        stack.push(pushed[i]);

        while(stack.length>0 && stack[stack.length-1] == popped[j]){
            stack.pop();
            j++;
        }
    }
    return stack.length===0;
};