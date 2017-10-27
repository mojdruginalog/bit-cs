var movies = [];


var div = document.getElementById("ubaceniFilmovi");
var lista = document.createElement("ul");
div.appendChild(lista);


function createMovie(title,length,genre){
    var nazivFilma = document.getElementById("movieTitle");
    var duzinaFilma = document.getElementById("movieLength");
    var zanrFilma = document.getElementById("movieSelect")[document.getElementById("movieSelect").selectedIndex];
    var title = nazivFilma.value;
    var length = duzinaFilma.value;
    var genre = zanrFilma.value;
    var error = document.getElementById("error");
    if (!title || !length || (genre === 'none')) {
        error.innerHTML = "Greska brt!";
        return;
    }else{

    
    var movie = new Movie(title,length,genre);
    movies.push(movie);
    
    
  
    for (var i = 0; i < movies.length; i++) {
        var filmObj = movies[i];
        var listItem = document.createElement("li");
        var tekstListItema = document.createTextNode(filmObj.getInfo());
       
        
    }
    listItem.appendChild(tekstListItema);
    lista.appendChild(listItem);
}
nazivFilma.value = '';
duzinaFilma.value = '';

}
