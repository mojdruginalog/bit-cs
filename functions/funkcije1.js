
//prva funkcija
function print(string){
     return console.log(string);
}
print("hello world");

//prvi  zadatak
function iterate(){
    for (var i = 0; i <=10; i++) {
        var res = print(i*i);
    }
    return res;
}
iterate();

//drugi zadatak
function evenOdd(){
    for (var index = 0; index < 16 ; index++) {
        if(index % 2 === 0){
            print('Even');
        }else{
            print ('Odd');
        }
    }
    return;
}
evenOdd();



var niz = [];
niz.push(iterate()) = iterate();
print(niz);
/*
//treci zadatak
function iljade(){
    var zbir = 0;
    for (var i = 0; i <= 999; i++) {
        if ((i%3==0) && (i%5==0)) {
             zbir +=i;
        }    
    }
    print("Zbir brojeva je: " + zbir);
   return;
}

iljade();
//cetvrti zadatak
var sum = 0;
var product = 1;
function compute(){
    var array = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
        
    }
    return print('Sum ' +sum+ ' Product '+ product);
}
compute();
//peti zadatak
var string = '';
function single(){
    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
    for (var i = 0; i < x.length; i++) {
         string += x[i];
        
    }
    return print(string);
}
single();
*/

