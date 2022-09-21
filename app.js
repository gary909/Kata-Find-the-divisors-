function divisors(integer) {
    let myArr = [];

    // divisors check
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            myArr.push(i);
        }
    }
    // prime check
    if (myArr.length == 0) {
        return integer + " is prime"
    } else {
        return myArr;
    }
};

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // '13 is a prime'