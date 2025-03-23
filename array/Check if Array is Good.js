//2706. Buy Two Chocolates
// scr 1: https://leetcode.com/problems/buy-two-chocolates/
// Input: prices = [1,2,2], money = 3
// Output: 0
// Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.
//approach:
//1. sort the prices array
//2. iterate through the array
//3. if the sum of the first two elements is less than or equal to money, return 0
//4. else return the difference between the sum of the first two elements and money
//5. if the sum of the first two elements is greater than money, return the sum of the first two elements minus money
//6. if the sum of the first two elements is equal to money, return 0
//7. if the sum of the first two elements is less than money, return 0
//8. if the sum of the first two elements is greater than money, return the sum of the first two elements minus money
//9. if the sum of the first two elements is equal to money, return 0
//10. if the sum of the first two elements is less than money, return 0
//11. if the sum of the first two elements is greater than money, return the sum of the first two elements minus money
//12. if the sum of the first two elements is equal to money, return 0
//13. if the sum of the first two elements is less than money, return 0

var buyChoco = function(prices, money) {
   prices.sort((a,b)=>a-b);
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]+prices[i+1]<=money) return 0;
        else return prices[i]+prices[i+1]-money;
    }
    return 0;
};
