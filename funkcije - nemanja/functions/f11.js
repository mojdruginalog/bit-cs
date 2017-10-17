// Write a function to get first n number of characters and add “...” at the end of newly created string.


function cutString(string,n) {
    var result = "";
    var output = "";
    for (var i = 0; i < n; i++) {
        result += string[i];
    }
    output = result + "...";
    return output;
}


console.log(cutString("marmelada",3));