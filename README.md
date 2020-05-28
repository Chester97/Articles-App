# Article App

Założeniem aplikacji jest wyświetlanie listy artykułów i po tapnięciu(mobile) lub kliknięciu(desktop) wyświetlenie pełnej treści artykułu.

## Szczegóły implementacyjne

### Widoki, routing

Na aplikację składają się dwa główne widoki: lista artykułów (jako główna strona) oraz pełny artykuł (dostępny pod ścieżką w stylu `/article/<id>`).

### Komunikacja klient-serwer

Za realizację żądań z wykorzystaniem GraphQL odpowiada biblioteka Apollo.

### PWA

W aplikacji został zastosowany system cache'owania danych. Pozwala to na korzystanie w trybie offline. Całość oparta jest o dostarczone przez Create React App rozwiązanie wspierające PWA oraz moduły wspierające Apollo w tym aspekcie.

### Struktura projektu

Struktura projektu to fraktal, co w sporej mierze rozwiązuje potencjalne problemy związane ze skalowaniem. Komponenty logicznie powiązane jako dzieci znajdują się wewnątrz folderu komponentu rodzica. Takie podejście sprawia, że osoba czytająca kod nie musi przeszukiwać zupy komponentów, a szukając np. komponentu karty artykułu - który wyświetlany jest tylko i wyłącznie na liście artykułów - intuicyjnie przejdzie pod ścieżkę `pages/Main/Articles/ArticleCard`.

Widoki, funkcje pomocnicze i zapytania o dane są od siebie odseparowane i nazwane zgodnie z domeną, której dotyczą.

### Importy bezwzględne

Dla zwiększenia czytelności importów i wyeliminowania tzw. drabinek (`../../../rzecz`) została ustalona ścieżka bazowa w pliku `jsconfig.json`.

### Estetyka kodu

W projekcie została wykorzystana minimalna konfiguracja modułu `prettier`, aby zachować spójność w stylu kodu.

### Wygląd

UI oparty jest o bibliotekę `react-bootstrap` oraz `styled-components`.

## Instalacja i uruchomienie

Instalacja zależności

```
npm install
```

Uruchomienie

```
npm start
```

Budowa produkcyjna

```
npm run build
```
