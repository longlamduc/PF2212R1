// Nhập vào 2 số a, b. Tính tổng của hai số vừa nhập.
// Nhập vào 2 số c, d. Tính tổng của hai số vừa nhập.

// let a = parseInt(prompt("Please input a: "));
// let b = parseInt(prompt("Please input b: "));

// let sumAB = a + b;

// console.log(sumAB);

// let c = parseInt(prompt("Please input c: "));
// let d = parseInt(prompt("Please input d: "));

// let sumCD = c + d;
// console.log(sumCD);

function calculateSum() {
    let n1 = parseInt(prompt("Please input n1: "));
    let n2 = parseInt(prompt("Please input n2: "));

    let total = n1 + n2;

    // console.log(total);

    // sau khi tính toán xong, trả kết quả ra 
    // bên ngoài thay vì in trực tiếp
    return total;  // trả kết quả mà hàm đã xử lý ra chương trình chính
}

let result = calculateSum();
console.log(result);
// calculateSum();
// calculateSum();