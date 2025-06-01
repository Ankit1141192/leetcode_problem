var countBits = function(n) {
    let res = [];
    for(let i =0;i<=n;i++){
        res.push(i.toString(2).split("").filter(x=> x==="1").length)
    }
    return res
};