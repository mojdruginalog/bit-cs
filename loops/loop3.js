
var students = [80, 77, 88, 95, 68];
var sum = 0;

for (var i = 0; i < students.length; i++) {
    sum += students[i] 

}

console.log(sum);
var avg=sum/students.length;

    console.log(avg);

var prc=students[i];
var ocena=["F","D","C","B","A"];

    if(avg < 60){
        console.log(ocena[0]);
    
    }else if(avg < 70){
        console.log(ocena[1]);
    }else if(avg < 80){
        console.log(ocena[2]);
    }else if(avg < 90){
        console.log(ocena[3]);
    }else{
        console.log(ocena[4]);
    }
    
    

