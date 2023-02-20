/**
 * Nhập vào một số nguyên dương n. Tính giai thừa của n.
 * Note: Giai thừa của n được tính bằng công thức:
 * n! = n*(n - 1)*(n - 2)*....1
 * Ví dụ: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */

let n = parseInt(prompt("Please input n: "))
let factorial = 1;

for (let i = 1; i <= n; i++ ){
    factorial *= i;
}

alert(factorial);