# AJAX_11.4


Zadanie: Pierwsze zapytanie do serwera



1. krok 1: (w pliku HTML)
stworznie prostego szablonu z przyciskiem do losowania kolejnego zartu i miejscem za zart.(paragraf)

2. krok 2:(w pliku script.js)
stworzenie zmiennej url, która bedzie zawierac pelny adres do naszych dowcipów

3. krok 3:
podpiecie do przycisku nasluchiwania na klikniecie

4. krok 4
stworzenie zmiennej paragraph do ktorej przypisany bedzie element DOM paragrafu, który odpowiada za wyswietlenie dowcipu

5. krok 5
implementacja funkcji getJoke();

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
}

6. krok 6 (dla chetnych)
zmodyfikowanie skryptu, aby przy pierwszym wejściu na stronę nie trzeba było wciskać przycisku pobierania dowcipu. 

