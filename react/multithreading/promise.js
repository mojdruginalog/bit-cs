console.log('hi');

var p1 = new Promise(function (resolve, reject) {
    // var m = 0;
    for (var i = 0; i < 100; i++) {
        setTimeout(function (i) {
            console.log('p1 ' + i);
            if (i === 99) {
                resolve();
            }
        }, i, i);

    }
    // var date = new Date();

    // if (date.getMilliseconds() % 2 === 0){
    //     reject("ne moze ovako");
    // }else{
    // console.log("keep working sad");

    // resolve();
});

var p2 = new Promise(function (resolve, reject) {
    // var m = 0;
    for (var i = 0; i < 1000; i++) {
        setTimeout(function (i) {
            console.log('p2 ' + i);
            if (i === 999) {
                resolve();
            }
        }, i, i);

    }


});

// console.log('keep working sad');



// console.log("I'm done");

p1.then(function (rezultat) {
    console.log('p1 is done with ' + rezultat);
});

p1.catch(function (razlog) {
    console.log(razlog);
});


p2.then(function (rezultat) {
    console.log('p2 is done with ' + rezultat);
});

p2.catch(function (razlog) {
    console.log(razlog);
});
var allPromises = Promise.all([p1, p2]);

allPromises.then(function () {
    console.log('all promises done');
});

console.log('not done');
