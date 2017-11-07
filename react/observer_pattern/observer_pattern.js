// var counter =  localStorage.getItem("GetData") || 0;
// var button = document.getElementById("dugme");

// function whenClick() {

//     if (typeof(Storage) !== "undefined") {

//         counter++;
//         localStorage.setItem("GetData", counter);

//     }

//     $(button).html(counter);

// }


var observer = function(name){
    var spicname = name;

    var notify = function(msg){
        
        console.log(spicname + ": " + msg);
    }
     return {
         notify: notify
     }
};


var subject = function(){
    
    var observerCollection = [];
    
    var observerAdder = function(observer){
            observerCollection.push(observer);
        
    }

    var notifyAll = function(){
        for ( var i = 0; i < observerCollection.length; i++){
            observerCollection[i].notify("je primio platu");
        }    
    }
    
    var run = function(){
        for ( var i = 0; i < 100; i++){
            if(i % 11 == 0){
                notifyAll(i);
            }
        }
    }

    return {
        notifyAll: notifyAll,
        observerAdder: observerAdder,
        run: run,
    }
};

var observer1 = observer("Pera");
var observer2 = observer("Zika");


var subjekat = subject();

subjekat.observerAdder(observer1);
subjekat.observerAdder(observer2);

subjekat.run();


 