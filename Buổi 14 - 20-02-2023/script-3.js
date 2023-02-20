/**
 * Viêt chương trình nhập vào 1 số n và đếm xem n có bao nhiêu chữ số,
 * sau đó tính tổng các chữ số của n và in ra số đảo ngược của n
 * Ví dụ: n = 12345
 * Output: 12345 có 5 chữ số, tổng các chữ số: 15, số đảo ngược của n: 54321
 */

let n = parseInt(prompt("Please input n: "));
let number = n;
let totalValue = 0;
let totalDigit = 0;

document.write("Số đảo ngược của n là: ");
while (n > 0) {
    totalValue += n % 10;
    document.write(n % 10);
    n = Math.floor(n / 10);
    totalDigit ++;
}

document.write(`<br>Tổng các chữ số của ${number} là: ${totalValue}<br>`);
document.write(`${number} có ${totalDigit} chữ số`);