// Write a function to find position of first occurrence of character in a string. Result should be in human numeration form.
// If there are no occurrences of character function should return -1.


function firstOccurence(input, letter) {
    var result = -1;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === letter) {
            result = (
                function () {
                    var result = "";
                    if (((i + 1) % 100) >= 11 && ((i + 1) % 100) <= 13) {
                        result = (i + 1) + "th";
                    } else if (((i + 1) % 10) === 1) {
                        result = (i + 1) + "st";
                    } else if (((i + 1) % 10) === 2) {
                        result = i + 1 + "nd";
                    } else if (((i + 1) % 10) === 3) {
                        result = (i + 1) + "rd";
                    } else {
                        result = (i + 1) + "th";
                    }
                    return result;
                }
            )();
        }
    }
    return result;
}


console.log(firstOccurence("djokajd", "o"));