// Write a function to check whether an `input` is a string or not.

// "My random string" -> true
// 12 -> false

//prvi zadatak
function ifString(input){
    return (input === "string")?true:false ;
}
console.log(ifString("string"));



//drugi zadatak
// Write a function to check whether a string is blank or not.

// "My random string" -> true
// " " -> true
// 12 -> false
// false -> false


//drugi zadatak
function ifStringBlank(input){
    return (input === "")?true:false ;
}
console.log(ifStringBlank());

// Write a function to concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

//treci zadatak
function concatenate(string, n) {
    var result = "";
    for (var i = 1; i <= n; i++) {
        result += string;   
    }   
    return result;
}
console.log(concatenate("djoka", 4));

// Write a function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th


function humanize(n) {
    var result = "";
    if ((n % 100) >= 11 && (n % 100) <= 13) {
        result = n + "th";
    } else if ((n % 10) === 1) {
        result = n + "st";
    } else if ((n % 10) === 2) {
        result = n + "nd";
    } else if ((n % 10) === 3) {
        result = n + "rd";
    } else {
        result = n + "th";
    }
    return result;
}


console.log(humanize(111));

//peti zadatak
// Write a function to count number of letter occurrences in a string.
// "My random string", "n" -> 2

function letterCount(input, letter) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === letter) {
            result++;
        }
    }
    return result;
}

console.log(letterCount("djooka", "o"));

//sesti zadatak
// Write a function to find position of first occurrence of character in a string. Result should be in human numeration form. If there are no occurrences of character function should return -1.

function humanize(n) {
    var result = "";
     if ((n % 100) >= 11 && (n % 100) <= 13) {
        result = n + "th";
    } else if ((n % 10) === 1) {
        result = n + "st";
    } else if ((n % 10) === 2) {
        result = n + "nd";
    } else if ((n % 10) === 3) {
        result = n + "rd";
    } else {
        result = n + "th";
    }
    return result;
}

function firstOccurence(input,letter) {
    var result = -1;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === letter) {
           result = humanize(i);
           return result;
        }
    }
    return result;
    }

console.log(firstOccurence("djokajd", "j"));










//sedmi zadatak
// Write a function to find position of last occurrence of character in a string. Result should be in human numeration form.
// If there are no occurrences of character function should return -1.


function humanize(n) {
    var result = "";
     if ((n % 100) >= 11 && (n % 100) <= 13) {
        result = n + "th";
    } else if ((n % 10) === 1) {
        result = n + "st";
    } else if ((n % 10) === 2) {
        result = n + "nd";
    } else if ((n % 10) === 3) {
        result = n + "rd";
    } else {
        result = n + "th";
    }
    return result;
}

function lastOccurence(input,letter) {
    var result = -1;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === letter) {
           result = humanize(i);
        }
    } 
    return result;
}

console.log(lastOccurence("djokajd", "d"));


//osmi zadatak

// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]


function stringToArray(string) {
    var result = [];
    for (var i = 0; i < string.length; i++) {
        result[i] = string[i];
        if (result[i] === " ") {
            result[i] = "null";
        }
    }
    return result;
}

console.log(stringToArray("random string"));

//deveti zadatak (ne valja)

// Write a function that accepts a number as a parameter and check if the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function ifPrime(num) {
    var result;
    for (i = 2; i < Infinity; i++) {
        if (i !== num) {            
            if ((num > 1) && (num % i) !== 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(ifPrime(3));