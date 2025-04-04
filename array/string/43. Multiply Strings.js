//  Multiply Strings
// Approach:
// 1. Initialize an array to store the result of the multiplication.
// 2. Reverse both input strings to facilitate multiplication from the least significant digit.
// 3. Iterate through each digit of the first string (num1) and multiply it with each digit of the second string (num2).
// 4. Store the result in the result array, taking care of carry-over values.
// 5. Convert the result array back to a string, removing any leading zeros.
// 6. Return the final result.

var multiply = function(num1, num2) {
  let res = new Array(num1.length + num2.length).fill(0);
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            res[i + j] += (num1[i] - '0') * (num2[j] - '0');
            res[i + j + 1] += Math.floor(res[i + j] / 10);
            res[i + j] %= 10;
        }
    }
    while (res.length > 1 && res[res.length - 1] === 0) {
        res.pop();
    }
    return res.reverse().join("");
 };