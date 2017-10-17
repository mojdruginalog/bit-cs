function multiplyByTwo(a,callback1,divide) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        var element = a[i]*2;
        result[i] = Math.ceil(callback1(divide(element)));    
    }
    return result;
}





function divide(number){
    return number/10;
}




(
    function () {
        var result = arguments + 1;
        return result;
    }
) (5)


console.log(multiplyByTwo([2,6]git statu));