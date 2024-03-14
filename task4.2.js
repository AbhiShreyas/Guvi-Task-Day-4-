//Arrow Functions

//a.Print odd numbers in an array.
var result = arr => {
    var b = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            b.push(arr[i]);
            i++;
        } 
        else {
            return "There are no odd numbers in the array";
        }
    }
    return b;
}
console.log(result([1, 2, 3, 4, 5]));

//b.Convert all the strings to title caps in a string array.
var result = arr =>{
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase()
    }
    return arr
}
console.log(result(["hello","world"]))

//c.Sum of all numbers in an array.
var result = arr=>{
    var sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
console.log(result([1,2,3,4,5]))

//d.Return all the prime numbers in an array.
const result = arr => {
    const primes = [];

    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(arr[i]);
        }
    }

    return primes;
};

console.log(result([1, 2, 3, 4, 5]))

//e.Return all the palindromes in an array.
var result = arr => {
    var palindrome = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].split('').reverse().join('')) {
            palindrome.push(arr[i]);
        }
    }
    return palindrome;
};
console.log(result(["malayalam", "hello", "noon"]))

