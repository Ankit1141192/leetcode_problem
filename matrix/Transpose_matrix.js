// Transpose matrix
var transpose = function(matrix) {
    const a = matrix.length, b =matrix[0].length;
    const ans = new Array(b).fill(0).map(()=> new Array(a));

    for(let i=0;i<a;i++){
        for(let j=0;j<b;j++){
            ans[j][i] = matrix[i][j];
        }
    } 
    return ans;
};