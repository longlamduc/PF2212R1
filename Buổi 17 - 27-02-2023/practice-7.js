let array1 = ["Hello ", "take "];
let array2 = ["Dear", "Sir"];
let array3 = [];

for (let i in array1) {
    for (let j in array2) {
        array3.push(array1[i] + array2[j]);
    }
}

console.log(array3);