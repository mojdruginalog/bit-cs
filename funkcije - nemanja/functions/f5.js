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


console.log(letterCount("djooka", "m"));