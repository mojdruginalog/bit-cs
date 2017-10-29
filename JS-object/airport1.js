<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Airport OOP JS</title>
</head>
<body>
<h1>Airport Practice</h1>
	<script>
		'use strict';
		(function(){
			// var flight = new Flight('Belgrade - Paris',new Date('Oct 28 2017'));
			// document.write(flight.getData());
			// var person = new Person('John','Snow');
			// // document.write(person.getData());
			// var seat = new Seat(12,'b');

			// var passenger = new Passenger(person, seat);
			// document.write(passenger.getData());

			function createFlight(relation,date){
				var flight = new Flight(relation,date);

				return flight;
			}

			function createPassenger(name,surname,seatNumber,category){
				var passenger = new Passenger(name,surname,seatNumber,category);
				return passenger;
			}

			var airport = new Airport();

			var newYork = createFlight('relation:"Belgrade - New York"', new Date('Oct 28 2017'));
			var barcelona = createFlight('relation:"Barcelona - Belgrade"', new Date('Nov 11 2017'));

			var John = createPassenger('Name: "John"','surname: "Snow"','seat number: 1','category:"b"');
			var Cersei = createPassenger('Name: "Cersei"','surname: "Lannister"','seat number: 2','category:"b"');
			var Daenerys = createPassenger('Name: "Daenerys"','surname: "Targaryen"','seat number: 14');
			var Targaryen = createPassenger('Name: "Targaryen"','surname: "Lannister"');

			newYork.addPassenger(John);
			newYork.addPassenger(Cersei);

			barcelona.addPassenger(Daenerys);
			barcelona.addPassenger(Targaryen);

			airport.addFlight(newYork);
			airport.addFlight(barcelona);

			document.write(airport.getData());

		})();

		function Person(name,surname){
			this.name = name;
			this.surname = surname;
			this.getData = function(){
				var output = '';
				output = '"' + this.name + '", "' + this.surname + '" -> ' + this.name + ' ' + this.surname + '"';
				return output;
			}
		}

		function Seat(seatNumber,category){
			this.seatNumber = seatNumber || Math.ceil(Math.random()*(100-10)+10);
			this.category = category || 'e';
			this.getData = function(){
				var output = '';
				var categoryUpperC = this.category.toUpperCase();
				output = this.seatNumber + ', ' + categoryUpperC + ',' + person.name + ' ' + person.surname;
				return output;
			}
		}

		function Passenger(person,seat){
			this.person = new Person(person);
			this.seat = new Seat(seat);
			this.getData = function(){
				var categoryUpperC = seat.category.toUpperCase();
				var output = '';
				output = person.name + '' +  person.surname + ',' + categoryUpperC + ',' + seat.seatNumber +  '->' + seat.seatNumber + ',' + categoryUpperC + ', ' + person.name + ' ' + person.surname;
				return output;
			}
		}

		function Flight(relation,date){
			this.relation = relation;
			var dateString = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
			this.date = dateString;
			this.listOfPassenger = [];
			this.totalNumberOfPassengers = 0;
			this.getData = function(){
				var output = '';
				output = '"' + this.relation + ', "' + this.date + '" -> ' + this.date + ' ' + this.relation;
				return output;
			}
			this.addPassenger = function(passenger){
				this.listOfPassenger.push(passenger);
				this.totalNumberOfPassengers++;
				
			}
		}

		function Airport(){
			this.name = 'Nikola Tesla';
			this.listOfFlights = [];
			this.totalNumberOfPassengersInAll = 0;
			this.getData = function(){
				var output = '';
				var result;
				var totalPassenger = 0;
				
				for (var i = 0; i < this.listOfFlights.length; i++) {
					var flight = this.listOfFlights[i];
					//console.log(flight);
					output += '\t\t' + flight.getData() + '\n';
				}
				result = 'Airport: ' + this.name + ',' + 'total passengers: ' + this.totalNumberOfPassengersInAll + '\n' + output;
				return result;
			}
			this.addFlight = function(flight){
				this.listOfFlights.push(flight);
				this.totalNumberOfPassengersInAll += flight.totalNumberOfPassengers;
			}
		}
	</script>	
</body>
</html>
