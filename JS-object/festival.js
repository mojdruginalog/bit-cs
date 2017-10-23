'use strict';

(function () {

    var akcija = new Genre("akcija")
    var spiderman = new Movie("Spiderman", akcija, 120);

    console.log(akcija.getData());
    console.log(spiderman.getData());
    
    var program = new Program(new Date());
    var program1 = new Program(new Date());
    program.addMovie(spiderman);
    program1.addMovie(spiderman);
    
    
    console.log(program.getData());


})();

function Genre(name) {
    this.name = name;
    this.getData = function () {
        var upperC = this.name[0] + this.name[this.name.length - 1]
        return upperC.toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.title + ',' + this.length + 'min, ' + this.genre.getData();
    }

}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.numOfMovies = 0;

    this.getData = function () {
        var allLenght = 0
        var movieInfo = ''

        for (var i = 0; i < this.listOfMovies.length; i++) {
            allLenght += this.listOfMovies[i].length;
            movieInfo += "\t" + this.listOfMovies[i].getData() + '\n';
        }

        return this.date + ',' + allLenght + '\n' + movieInfo;
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }
}

function Festival(name, listOfPrograms, numOfAllMovies) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfAllMovies = 0;

    this.getData = function () {
        var allPrograms = '';

        for (var i = 0; i < this.listOfPrograms.length; i++) {
            allPrograms += this.listOfPrograms[i] + '\n';

        }
        return this.name + ', ' + this.numOfAllMovies + '\n' + allPrograms;
    }
}


