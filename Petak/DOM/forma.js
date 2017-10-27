function validate() {
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactnumberElement = document.getElementById("contactnumber");
    var addressElement = document.getElementById("address");

    var name = nameElement.value;
    var email = emailElement.value;
    var contactnumber = contactnumberElement.value;
    var address = addressElement.value;

    if (nameElement.hasAttribute('required') && name === '') {
        nameElement.classList.add('crveno');
    } else {
        nameElement.classList.remove('crveno');
    }

    if (emailElement.hasAttribute('required') && email === '') {
        emailElement.classList.add('crveno');
    } else {
        emailElement.classList.remove('crveno');
    }

    // all inputs

    // loop all inputs

};

function pobeze() {
    var div = getElementById('pobeze');
    div.classList.add('pobeze');
};

function clicko() {
    var telo = document.getElementsByTagName("body")[0];
    telo.classList.toggle('plavo');

}
var telo = null;

function automatika() {
    if (!telo) {
       telo = document.getElementsByTagName("body")[0];
    setInterval(function () {
        telo.classList.toggle('plavo');
    }, 2000);  
    }else{
        clearInterval(telo);
       telo = null;
    }

}


var dugme = document.querySelector("button");

dugme.onclick = function () {
    var unos = document.querySelector("input");
    var zaUbacivanje = unos.value;
    var mesto = document.querySelector("div");
    var kreiraj = document.createElement("p");
    var sadrzaj = document.createTextNode(zaUbacivanje);
    mesto.appendChild(kreiraj);
    kreiraj.appendChild(sadrzaj);
    unos.value = '';
}