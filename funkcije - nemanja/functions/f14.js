// Write a function to calculate number of years until retirement based on year of birth. Retirement for men is at age of 65 and for women at age of 60.
// If someone is already in retirement proper message should be provided.


function untilRetirement(birthYear,sex) {
    var result;
    var pensionAgeM = 65;
    var pensionAgeF = 60;
    var output = "";
    if (sex === "m") {
        result = birthYear + pensionAgeM - new Date().getFullYear();
    } else if (sex === "f") {
        result = birthYear + pensionAgeF - new Date().getFullYear();
    }
    if (result < 1 && result > -1) {
        output = "Cestitamo, od danas ste u penziji!";
    } else if (result < 0) {
        output = "Vec ste u penziji!";
    } else {
        output = "Do penzije imate jos " + result + " godina.";
    }
    return output;
}


console.log(untilRetirement(1930, "m"));