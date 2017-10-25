
(function(){
    // var flight = new Flight('Belgrade-Paris',new Date());
    // var person = new Person('John','Snow');
    // console.log(flight.getData());
    // console.log(person.getData());
    function createFlight(relation,date){
        var flight = new Flight(relation,date);
        return flight;
    }
    function createPassenger(name,surname,seatNumber,category){
        var passenger = new Passenger(name,surname,seatNumber,category);
        return passenger;
    }

    var airport = new Airport();

    var flight1 = createFlight('Belgrade - New York',new Date('Oct 25 2017'));
    var flight2 = createFlight('Barcelona - Belgrade',new Date('Nov 11 2017'));
    console.log(flight1.getData());
    console.log(flight2.getData());

    var passenger1 = createPassenger('Name:"John"','surname:"Snow"','seat number:1','category:"b"');
    var passenger2 = createPassenger('Name:"Cersei"','surname:"Lannister"','seat number:2','category:"b"');
    var passenger3 = createPassenger('Name:"Daenerys"','surname:"Targaryen"','seat number:14');
    var passenger4 = createPassenger('Name:"Tyrion"','surname:"Lannister"');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);

    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

})();

function Person(name,surname){
    this.name = name;
    this.surname = surname;
    this.getData = function(){
        var output = '';
        output = '"'+ this.name + '", '+ '"' + this.surname + '" ' + '->' + '"'+ this.name + ' '+ this.surname + '"';  
        return output;
    }
}

function Seat(seatNumber,category){
    this.seatNumber = seatNumber || Math.ceil(Math.random()*(100-10)+10);
    this.category = category || 'e';
}

function Passenger(person,seat){
    this.person = new Person(person);
    this.seat = new Seat(seat);
}

function Flight(relation,date){
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
    this.getData = function(){
        var output = '';
        output = '"'+ this.relation + '", ' + '"'+ this.date + '" -> '+ this.date + this.relation;
        return output;  
    }
    this.addPassenger = function(passenger){
        this.listOfPassengers.push(passenger);
    }
}

function Airport(name){
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.getData = function (){
        var output = '';
        var totalPassengers = 0;
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            var element = this.listOfPassengers[i];
            
        }
        output = 'Airport :' + this.name + ',' + 'total passengers:'+this.totalPassengers
    }
    this.addFlight = function(flight){
        this.listOfFlights.push(flight);
    }
}