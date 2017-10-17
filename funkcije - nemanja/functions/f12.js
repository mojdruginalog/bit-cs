// Write a function to find number of years until retirement based on year of birth.


function untilRetirement(birthYear, pensionAge) {
    var result;
    result = birthYear + pensionAge - new Date().getFullYear();
    return result;
}


console.log(untilRetirement(1958, 65));