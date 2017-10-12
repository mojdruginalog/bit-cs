var students = [
    ['David', 80],
    ['Marko', 80],
    ['Dany', 80],
    ['John', 80],
    ['Thomas', 80]
];

var avrageMarks = 0;
var ss = 0;
for (var i = 0; i < students.length; i++) {
    avrageMarks += students[i][1];
    var avg = avrageMarks / students.length;
}
ss=Math.floor(avg/10);
console.info("Average grade: " + avrageMarks / students.length);

switch(ss){
    case 10: 
    console.log('AA');
    break;
    case 9: 
    console.log('A');
    break;
    case 8: 
    console.log('B');
    break;
    case 7: 
    console.log('C');
    break;
    case 6: 
    console.log('D');
    break;
    default:
    console.log("F");
    break;
}
console.log('Danas je ' + new Date().getFullYear() + ' godina.');
console.log('Tacno vreme je ' + new Date().getHours() +' casova i  ' + new Date().getMinutes() +' minuta');
