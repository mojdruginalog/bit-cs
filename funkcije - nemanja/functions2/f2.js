// Write a function that combines two arrays by alternatingly taking elements

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]


function alternateArrays(array1, array2) {
    var arrayResults = [];
    var counter1 = 0;
    var counter2 = 0;
    for (var i = 0; i <= (array1.length + array2.length); i++) {
        if (i % 2 === 0) {
            arrayResults[i] = array1[counter1];
            counter1++;
        } else {
            arrayResults[i] = array2[counter2];
            counter2++;
        }
    }
    return arrayResults;
}


console.log(alternateArrays(["a", "b", "c"], [1, 2, 3, 4]));