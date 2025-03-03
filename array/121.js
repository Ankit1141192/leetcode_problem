// 121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    let stock = 0;
    let buy = prices[0];

    for(let i =0;i<prices.length;i++){
        if(prices[i]<buy){
            buy = prices[i]
        }
        else{
            let current = prices[i]-buy;
            stock = Math.max(stock,current)
        }
    }
    return stock
};