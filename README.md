> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# JavaScript: ECMAScript 2015+ 

Twój poprzednik stworzył pokaz slajdów, który masz przebudować. Wykorzystaj w tym celu najnowsze standardy języka JavaScript.

Utwórz klasę będąca modułem – niech reprezentuje nasz slider. Umieść ją w osobnym pliku, który zaimportujesz w odpowiednim miejscu (pamiętaj również o eksporcie tej klasy).

Wszędzie, gdzie to możliwe, wykorzystuj rozwiązania poznane w ostatnio przerabianym materiale: destrukturyzację, rozproszenie, wartości domyślne, funkcje strzałkowe itp.

Pamiętaj o odpowiednim nazywaniu metod w klasie. Im bardziej jednoznacznie nazwa określa sposób działania funkcji, tym lepiej.

Każda metoda powinna realizować jedno zadanie ([zasada pojedynczej odpowiedzialności](https://pl.wikipedia.org/wiki/Zasada_jednej_odpowiedzialno%C5%9Bci)). Jeśli tak nie jest, spróbują ją podzielić na mniejsze części.

Wykorzystaj webpacka, aby napisany kod JavaScript był wspierany przez starsze przeglądarki, tj. wszystkie wydane np. po 2016 roku i posiadające udział w rynku na poziomie co najmniej 1%.

**Uwaga:** Jeżeli po instalacji potrzebnych paczek uruchomiłeś projekt, lecz obrazy nie wczytują się, to prawdopodobnie zainstalowałeś webpack-dev-server w wersji powyżej 4. Wówczas wystarczy, że w pliku `webpack.config.js` określisz miejsce, z którego grafiki mają być serwowane. Możesz to zrobić przy pomocy tego ustawienia: 
```
const path = require('path');
module.exports = {
    // ...
    devServer: {
        static: './',
    },
}
```
Szczegóły znajdziesz w [dokumentacji webpacka](https://webpack.js.org/configuration/dev-server/#devserverstatic).

## Implementacja

W plikach znajdziesz kod implementujący slider oraz nieusunięte komentarze, które miały ułatwić zbudowanie odpowiedniej logiki.

Zadanie ma być wykonane w taki sposób, aby poniższy kod uruchamiał całą mechanikę rozwiązania:

```javascript
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

Najlepiej zbudować klasę `JSSlider` od zera. Należy stopniowo przenosić poszczególne rozwiązania z funkcji w pliku `script.js` do metod danej klasy.

Pamiętaj, że im częściej będziesz sprawdzać przenoszony kod, tym łatwiej będzie Ci się w nim odnaleźć.

Kiedy już przeniesiesz rozwiązania 1 do 1 i wszystko będzie działać, wykonaj [refaktoryzację kodu](https://pl.wikipedia.org/wiki/Refaktoryzacja).

## Zadania dodatkowe

### Zadanie 1

Postaraj się wykorzystać właściwości obiektu (`this.imagesList`), zamiast przekazywać wartości zmiennych przez parametry funkcji (`initEvents(imagesList, sliderRootElement)`).

To rozwiązanie zastosuj tylko dla zmiennych, które są wykorzystywane w różnych metodach.

### Zadanie 2

Utwórz dwa dodatkowe CustomEvents o nazwach `js-slider-start` oraz `js-slider-stop`. Ich zadaniem będzie uruchomienie lub zatrzymanie automatycznego przełączania zdjęć.

Zdarzenie `js-slider-start` jest uruchamiane w dwóch przypadkach:
- po kliknięciu w zdjęcie,
- po zjechaniu kursorem ze strzałki.

Zdarzenie `js-slider-stop` jest uruchamiane, gdy użytkownik najedzie kursorem na strzałkę.

**Uwaga!** Sprawdź, czy wszystko działa poprawnie, gdy pokaz slajdów jest uruchamiany i zatrzymywany wielokrotnie.


&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
