# JavaScript: ECMAScript 2015+ 

Twój poprzednik stworzył pokaz slajdów, który masz przebudować. Wykorzystaj w tym celu najnowsze standardy języka JavaScript.

Utworzymy klasę będąca modułem, który będzie reprezentował nasz Slider. Wspomniana klasa powinna być umieszczona w osobnym pliku, który importujemy w odpowiednim miejscu (pamiętaj również o eksporcie tej klasy).

Wszędzie, gdzie to możliwe wykorzystuj rozwiązania poznane w ostatnio przerabianym materiale tj. destrukturyzacja, rozproszenie, wartości domyślne, funkcje strzałkowe itp.

Pamiętaj, o odpowiednim nazywaniu metod w klasie. Im bardziej jednoznacznie będzie określała ona jej czynność, tym lepiej.

Każda metoda powinna realizować jedno zadanie (analogicznie jak [zasada pojedynczej odpowiedzialności w klasach](https://pl.wikipedia.org/wiki/Zasada_jednej_odpowiedzialno%C5%9Bci)). Jeśli tak nie jest, spróbują ją podzielić na mniejsze części.

Wykorzystaj Webpacka, aby napisany kod w JavaScript był wpierany przez starsze przeglądarki tj. wszystkie wydane np. po 2016 roku i posiadający udział w rynku na poziomie co najmniej 1%.

## Implementacja

W plikach znajdziesz kod implementujący Slider, który wykorzystuje funkcje. Znajdziesz tam również, nieusunięte komentarze, które miały ułatwić zbudowanie odpowiedniej logiki.

Zadanie ma być wykonane w taki sposób, aby poniższy kod uruchamiał całą mechanikę naszego rozwiązania:

```
import JSSlider from './modules/JSSlider';

const init = () => {
    const imagesList = document.querySelectorAll('.gallery__item');
    imagesList.forEach( img => {
        img.dataset.sliderGroupName = Math.random() > 0.5 ? 'nice' : 'good';
    });

    const jsSlider = new JSSlider('.gallery__item');
    jsSlider.run();
}

document.addEventListener('DOMContentLoaded', init);
```

Najlepszym sposobem rozwiązania tego zadania będzie zbudowanie klasy od zera. Należy stopniowo przenosić poszczególne rozwiązania z funkcji do metod danej klasy.

Kiedy już przeniesiesz rozwiązania 1 do 1, to wtedy możesz zastanowić się nad [refaktoryzacją kodu](https://pl.wikipedia.org/wiki/Refaktoryzacja).

Pamiętaj, że im częściej sprawdzasz przenoszony kod, tym łatwiej będzie Ci się w nim odnaleźć.
## Zadania dodatkowe

### Zadanie 1

Postaraj się wykorzystać właściwości obiektu ('this.imagesList'), zamiast przekazywać wartości zmiennych przez parametry funkcji ('initEvents(imagesList, sliderRootElement)').

To rozwiązanie zastosuj tylko dla zmiennych, które są wykorzystywane w różnych metodach.

### Zadanie 2

Utwórz 2 dodatkowe 'CustomEvent' o nazwach 'js-slider-start' oraz 'js-slider-stop'. Ich zadaniem jest uruchomienie lub zatrzymanie automatycznego przełączania zdjęć.

Zdarzenie 'js-slider-start' jest uruchamiane w 2 przypadkach.
- po kliknięciu w zdjęcie,
- po zjechaniu kursorem ze strzałki.

Zdarzenie 'js-slider-stop' jest uruchamiane, gdy użytkownik najedzie kursorem na strzałkę.

**Uwaga!** Pamiętaj, aby sprawdzić, czy wszystko działa poprawnie, kiedy pokaz slajdów jest uruchamiany i zatrzymywany wieloktronie.