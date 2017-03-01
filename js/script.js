//stworzenie zmiennej url, która bedzie zawierac pelny adres do naszych dowcipów

var url = 'http://api.icndb.com/jokes/random';

//podpiecie do przycisku nasluchiwania na klikniecie

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
    getJoke();
});


//stworzenie zmiennej paragraph do ktorej przypisany bedzie element DOM paragrafu, który odpowiada za wyswietlenie dowcipu

var paragraph = document.getElementById('joke');


//Implementacja funkcji getJoke();

function getJoke () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}
    