# 3. Operatory

Zapoznawszy się z całkiem sporą liczbą typów danych i wybranych sposobów ich konwersji, warto zgłębić kolejny ważny element JavaScript — **operatory**.

Są bardzo przydatne, gdy trzeba pracować ze zmiennymi: modyfikować je, przeprowadzać obliczenia z ich użyciem, a także porównywać je. Nazwa "operator" wzięła się stąd, że te elementy są używane do przeprowadzania **operacji** z wykorzystaniem zmiennych.

---

## a) Operatory arytmetyczne

Mogą być używane do przeprowadzania operacji na liczbach. Większość tych operacji jest naturalna, ponieważ przedstawia podstawowe operacje matematyczne, z którymi masz styczność na co dzień.

### Dodawanie

Bardzo prosta operacja w JavaScripcie, do której używamy operatora `+`.

**Przykład:**
```javascript
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;
console.log(result1);
```

Operator `+` jest także stosowany do **konkatenacji** (łączenia) ciągów tekstowych. Należy zwrócić uwagę na spację po słowie "Operacja" — dzięki niej w wyniku też zobaczymy tę spację.

**Przykład:**
```javascript
let str1 = "Operacja ";
let str2 = "dodawania";
let result2 = str1 + str2;
console.log(result2);
```

Zostaną wygenerowane następujące dane wyjściowe dla tych dwóch fragmentów kodu:

```
26
Operacja dodawania
```

Dodawanie wartości liczbowych i tekstowych daje różne wyniki. Próba "dodania" dwóch ciągów tekstowych prowadzi do ich konkatenacji w postaci pojedynczego ciągu tekstowego.

> **Ćwiczenie praktyczne:** Utwórz zmienną przeznaczoną do przechowywania Twojego imienia, następną do przechowywania wieku i kolejną wskazującą, czy potrafisz programować w JavaScript. W konsoli wyświetl zdanie:
> `Witaj, mam na imię Maaike, mam 29 lat i potrafię programować w JavaScript: true.`

---

### b) Odejmowanie

Działa zgodnie z oczekiwaniami. Do jego przeprowadzenia używamy operatora `-`.

Ciekawe, jaki wynik da poniższy przykład:

```javascript
let nr1 = 20;
let nr2 = 4;
let str1 = "Cześć";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);
```

Pierwsza wygenerowana wartość to `16`, ale druga to `NaN`. Dlaczego? Ponieważ różnica liczby i ciągu tekstowego nie jest liczbą — i co ciekawe, JavaScript **nie zgłasza błędu** w takiej sytuacji, tylko zwraca `NaN`.

---

### c) Mnożenie

Iloczyn dwóch wartości liczbowych otrzymujemy po użyciu operatora `*`. W przeciwieństwie do innych języków programowania, w JavaScript nie możemy "sensownie" mnożyć liczby i ciągu tekstowego — wynikiem takiej operacji byłoby `NaN`.

**Przykład:**
```javascript
let nr1 = 15;
let nr2 = 10;
let str1 = "Cześć";
let nr3 = 3;
let result1 = nr1 * nr2;
let result2 = str1 * nr3;
console.log(result1, result2);
```

Powyższy fragment kodu wygeneruje następujące dane wyjściowe:

```
150 NaN
```

---

### d) Dzielenie

To kolejny prosty operator. Iloraz (wynik dzielenia) dwóch wartości liczbowych otrzymujemy po użyciu operatora `/`.

**Przykład:**
```javascript
let nr1 = 30;
let nr2 = 5;
let result1 = nr1 / nr2;
console.log(result1);
```

Iloraz przy tym fragmencie kodu wyniesie:

```
6
```

---

### e) Potęgowanie

Podniesienie określonej wartości bazowej do podanej potęgi, np. `x ** y` (dwie gwiazdki w JS symbolizują potęgowanie), gdzie oznacza to, że `x` jest podnoszone do potęgi `y` — czyli że `x` będzie mnożone przez samo siebie `y` razy.

**Przykład potęgowania w JavaScript:**
```javascript
let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
```

Jeśli wszystko zostało zapisane prawidłowo, w konsoli wynikiem będzie:

```
8
```

---

### f) Reszta z dzielenia (modulo)

Ta operacja wymaga wyjaśnienia.

Reszta z dzielenia to działanie, które ma na celu obliczenie, ile zostaje po dzieleniu całkowitym dwóch liczb — nie ma znaczenia, ile razy jedna liczba zmieści się w drugiej. Ważna jest **reszta**, która pozostaje po podzieleniu tych liczb. Operator reszty z dzielenia symbolizuje znak `%`.

Poniżej kilka przykładów takiej operacji:

```javascript
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);

let nr3 = 8;
let nr4 = 2;
let result2 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result2}`);

let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log(`${nr5} % ${nr6} = ${result3}`);
```

Zostaną wygenerowane następujące wyniki:

```
10 % 3 = 1
8 % 2 = 0
15 % 4 = 3
```

#### Praktyczne zastosowanie — dodawanie minut do bieżącej godziny

Tego rodzaju operacje automatycznie przeprowadza się "w pamięci". Powiedzmy, że ktoś poprosi Cię o dodanie 125 minut do bieżącej godziny — najprawdopodobniej przeprowadzisz dwie operacje:

1. **Dzielenie całkowite** — w celu ustalenia, ile pełnych godzin mieści się w 125 minutach.
2. **Reszta z dzielenia** — w celu ustalenia, ile minut zostaje po odjęciu tych pełnych godzin (czyli `125 % 60`, gdzie 60 to liczba minut odpowiadająca jednej pełnej godzinie).

W ten sposób zostanie ustalone, że w 125 minutach mieszczą się dwie pełne godziny i pozostaje jeszcze 5 minut.

**Przykład kodu obliczającego:**

```javascript
let nr1 = 125;
let nr2 = 60;
let result1 = nr1 / nr2;
console.log(result1); // 2.0833333333333335

let nr3 = 125;
let nr4 = 60;
let result2 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result2}`); // 125 % 60 = 5
```

> **Uwaga praktyczna (własny wniosek z testowania kodu):** to ręczne podejście (dzielenie całkowite + reszta z dzielenia, a potem dodawanie wyniku do bieżącej godziny) działa, ale w praktyce jest dość rozbudowane — trzeba pamiętać o "przeniesieniu" nadwyżki minut do godzin (np. `59 + 5 = 64`, czyli w rzeczywistości `+1 godzina i 4 minuty`), a także o przekroczeniu 24 godzin. W realnym kodzie do takich obliczeń znacznie wygodniejszy jest wbudowany obiekt `Date`, który robi to automatycznie w jednej linii:
> ```javascript
> let teraz = new Date();
> let nowaData = new Date(teraz.getTime() + 125 * 60 * 1000); // 125 minut w milisekundach
> console.log(nowaData.toLocaleTimeString());
> ```
> Ręczne liczenie z `%` i `/` jest jednak świetnym ćwiczeniem do **zrozumienia**, jak działa reszta z dzielenia — i dlatego warto przejść przez nie samodzielnie, zanim sięgnie się po gotowe rozwiązanie.

---

## Najczęstsze błędy znalezione w pierwotnej wersji notatek (do zapamiętania na przyszłość)

Przy przepisywaniu tej sekcji wystąpiło kilka powtarzających się typów literówek — warto je znać, bo łatwo je przeoczyć przy czytaniu, a JavaScript jest na nie bardzo czuły:

| Typ błędu | Przykład błędny | Poprawka | Skutek błędu |
|---|---|---|---|
| Literówka w nazwie zmiennej | `n32` (zamiast `nr2`) | `nr2` | `ReferenceError: nr2 is not defined` |
| Spacja w nazwie zmiennej | `let result 1 = ...` | `let result1 = ...` | `SyntaxError` — JS nie uzna tego za jedną nazwę |
| Brak spacji po `let` | `letnr3 = 3;` | `let nr3 = 3;` | JS odczyta to jako jedną (nieistniejącą) nazwę |
| Wielka litera w nazwie zmiennej | `nr1 % Nr2` | `nr1 % nr2` | `ReferenceError` — JS rozróżnia wielkość liter |
| Nawias okrągły zamiast klamrowego w template literal | `` `${nr} = $(result)` `` | `` `${nr} = ${result}` `` | tekst wyświetli się dosłownie jako `$(result)`, bez podstawienia wartości |
| Niedomknięty backtick (zamknięty innym znakiem) | `` `${a}'); `` | `` `${a}`); `` | string się "nie zamyka", reszta kodu jest źle interpretowana |

**Wniosek:** najlepszą obroną przed takimi błędami jest zawsze samodzielne testowanie kodu (np. w `node` lub konsoli), a nie tylko czytanie przykładu w materiałach — nawet sprawdzone książki i kursy zawierają literówki.