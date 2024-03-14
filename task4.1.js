//Anonymous function and IIFE(Immediately Invoked Function Execution)

//a.Print odd numbers in an array

//Anonymous function
 var result = function(arr){
    var b =[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            b.push(arr[i])
            i++
        }
        else{
            return("There are no odd numbers in the  array") 
        }
    }
    return b
 }
 console.log(result([1,2,3,4,5]))
// IIFE
(function(arr) {
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            b.push(arr[i]);
        }
    }
    if (b.length === 0) {
        console.log("There are no odd numbers in the array");
    } else {
        console.log(b);
    }
})([1, 2, 3, 4, 5]);

//b.Convert all the strings to title caps in a string array.

//Anonymous function
var result = function(arr){
 for(i=0;i<arr.length;i++){
    arr[i]=arr[i].toUpperCase()
 }
 return arr
}
console.log(result(["hello","world"]))
//IIFE
(function(arr){
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].toUpperCase()
     }
    console.log(arr)
})([ "hello", "world"])

//c.Sum of all numbers in an array.

//Anonymous function
var addition = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(addition([1, 2, 3, 4, 5]));
// IIFE
(function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]);

//d.Return all the prime numbers in an array.

// Anonymous function
var result = function(arr) {
    var primes = [];
    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
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
//IIFE
(function(arr) {
    var primes = [];

    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
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
    console.log(primes);
})([1, 2, 3, 4, 5])

//e.Return all the palindromes in an array.

// Anonymous function
var result = function(arr) {
    var palindromes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].split('').reverse().join('')) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
};
console.log(result(["malayalam", "hello", "noon"]));

// IIFE
(function(arr) {
    var palindromes = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].split('').reverse().join('')) {
            palindromes.push(arr[i]);
        }
    }
    console.log(palindromes);
})(["malayalam", "hello","noon"]);

//f.Return Median of Two sorted arrays of the same size.

// Anonymous function
var result = function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
    if (merged.length % 2 !== 0) {
        return merged[mid];
    } else {
        return (merged[mid - 1] + merged[mid]) / 2;
    }
};
console.log(result([1, 3, 5], [2, 4, 6]))

// IIFE
(function(arr1, arr2) {
    var merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    var mid = Math.floor(merged.length / 2);
    if (merged.length % 2 !== 0) {
        console.log(merged[mid]);
    } else {
        console.log((merged[mid - 1] + merged[mid]) / 2);
    }
})([1, 3, 5], [2, 4, 6]);

//g.Remove all duplicates from an array.

//Anonymous function
var result = function(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (final.indexOf(arr[i]) === -1) {
            final.push(arr[i]);
        }
    }
    return final;
};
console.log(result([1, 2, 3, 3, 4, 5, 5, 6]))
//IIFE
(function(arr) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (final.indexOf(arr[i]) === -1) {
            final.push(arr[i]);
        }
    }
    console.log(final)
})([1, 2, 3, 3, 4, 5, 5, 6]);

//h.Rotate an array by k times.

//Anonymous function
var result = function(arr,k){
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
console.log(result[1,2,3,4,5],2)
//IIFE
(function(arr,k){
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
)([1,2,3,4,5],2)