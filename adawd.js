function print(string) {
    return console.log(string);
}
//print("hello world");

//prvi  zadatak

function iterate(a) {
        var res = a * a;
        return res;
        //print(res);
    }



function putInArray(){
    var res;
    for (var i = 0; i < arguments.length; i++) {
        res = [arguments[0], arguments[i]];
        
    }
    return res;
}

for (var i = 1; i <= 10; i++) {
    var res = "";
    var res = putInArray(i,iterate(i));
    print(res);
}

