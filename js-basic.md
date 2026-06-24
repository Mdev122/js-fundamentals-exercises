# I. Podstawy JavaScript

## 1. Zmienne

Zmienna jest podstawowym elementem konstrukcyjnym, który poznajemy podczas nauki większości języków programowania. Jest to element mogący przechowywać różne wartości w kodzie, w trakcie każdego jego wykonania.

Przykład dwóch zmiennych w skrypcie:

```js
firstName = "Maaike";
x = 2;
```

W trakcie wykonywania kodu można im przypisać nowe wartości:

```js
firstName = "Edward";
x = 7;
```

Gdyby nie zmienne, dany fragment kodu działałby za każdym razem dokładnie w taki sam sposób. Czasami jest to użyteczna cecha, ale zastosowanie zmiennych zapewnia dużo większe możliwości — pozwala, aby kod działał inaczej przy każdym jego wykonaniu.

---

## 2. Deklarowanie zmiennej

Przy pierwszym wywołaniu zmiennej następuje jej **zadeklarowanie**. Aby to osiągnąć, potrzebujemy specjalnego słowa kluczowego:

- `let`
- `var`
- `const`

Aby przypisać istniejącej zmiennej nową wartość w trakcie kolejnych wywołań, używa się jedynie jej nazwy (bez słowa kluczowego):

```js
let firstName = "Maria";
firstName = "Jacky";
```

### Wartości "na stałe" vs wartości zewnętrzne

W powyższych przykładach wartości są przypisywane "na stałe" w skrypcie — nazywa się to **zdefiniowaniem wartości na stałe**, ponieważ wartość zmiennej jest ustalona w kodzie, a nie dynamicznie na podstawie danych zewnętrznych.

Takie rozwiązanie jest rzadko stosowane w rzeczywistym kodzie. W praktyce wartości częściej pochodzą ze źródeł zewnętrznych, np.:

- pole tekstowe wypełnione przez użytkownika na stronie internetowej,
- baza danych,
- inny kod wywołany przez nasz kod,
- itd.

Wykorzystanie wartości pochodzących ze źródeł zewnętrznych (zamiast wartości zdefiniowanych na stałe w skrypcie) jest tym, co pozwala skryptom **przystosowywać się do nowych informacji bez konieczności pisania nowego kodu**.

> Na razie wykorzystujemy wartości zmiennych zdefiniowane na stałe w skryptach — czyli niemodyfikowalne, aż do momentu zmiany ich w kodzie przez programistę. W przyszłości poznam, jak zmienna może pobierać wartość pochodzącą ze źródła zewnętrznego.

---

## 3. Słowa kluczowe: `let`, `var`, `const`

Definicja zmiennej składa się z trzech części:

| Część | Opis |
|---|---|
| a) Słowo kluczowe | `let`, `var`, `const` |
| b) Nazwa | np. `nr1` |
| c) Wartość | np. `12` |

Przykłady zmiennych zdefiniowanych za pomocą poszczególnych słów kluczowych:

```js
let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;
```

### a) Różnice między `let`, `var` i `const`

Słowa kluczowe `let` i `var` służą do definiowania zmiennej, której wartość może być **zmieniona** w trakcie działania programu.

Różnica między nimi związana jest z **zasięgiem (scope)**:

- **`var`** — zasięg **globalny / funkcyjny**. Zmienna zadeklarowana za pomocą `var` jest dostępna w obrębie całej funkcji, w której powstała (a poza funkcją — globalnie).
- **`let`** — zasięg **blokowy**. Zmienna zadeklarowana za pomocą `let` ma zastosowanie tylko wewnątrz bloku kodu, w którym została utworzona. Blok kodu zawsze rozpoczyna i kończy nawias klamrowy `{ }`, co pozwala precyzyjnie rozróżnić części kodu.

**`const`** to słowo kluczowe stosowane dla zmiennych, którym wartość przypisuje się **tylko jednokrotnie**. Przykładowo wartość `PI` nie powinna się zmieniać:

```js
const someConstant = 3;
someConstant = 4; // próba zmiany wartości const
```

Skutkiem powyższego kodu będzie błąd:

```
Uncaught TypeError: Assignment to constant variable.
```

> W większości przypadków używane jest słowo `let`.

### b) Konwencje nazewnictwa zmiennych

- Nazwa zmiennej zaczyna się od małej litery i powinna być **opisowa**. Jeśli zmienna przechowuje wiek, nadajemy jej nazwę `wiek`, a nie `x` — dzięki temu, wracając do kodu, można zrozumieć jego działanie po prostu odczytując kod źródłowy.
- Nazwa zmiennej **nie może zawierać spacji** — wyjątkiem jest znak podkreślenia `_`. Przy użyciu spacji JavaScript nie uzna takiego zapisu za jedną zmienną.
- Stosowany jest styl **camelCase** — jeśli nazwa zmiennej składa się z kilku słów, pierwsze zaczyna się od małej litery, a każde kolejne od wielkiej, np.:

```js
let wiekKlientaSklepu;
```

> Niezależnie od przyjętej konwencji, najważniejsza jest jej **spójne zastosowanie** w całym projekcie. Jeśli nazwy wszystkich zmiennych mają podobny format, kod staje się bardziej przejrzysty, czytelny i łatwiejszy do modyfikowania w przyszłości.

### c) Wartość zmiennej

Zmienna może mieć dowolną wartość. Zaczynamy od najłatwiejszych — prostych typów danych.

JavaScript jest językiem stosującym **luźne typowanie** (*loose typing*) — typ wartości jest ustalany automatycznie, na podstawie samej wartości, bez potrzeby jego wyraźnego deklarowania. Jeśli przypiszesz zmiennej wartość `5`, JS automatycznie rozpozna ją jako zmienną typu liczbowego.

---

## 4. Proste typy danych

JavaScript ma **siedem** prostych (prymitywnych) typów danych:

- `String`
- `Number`
- `BigInt`
- `Boolean`
- `Symbol`
- `Undefined`
- `Null`

Każdy z nich ma względnie prostą strukturę — zawiera **wartość** i **typ**.

### String

Typ danych używany do przechowywania wartości tekstowej. Taka wartość jest po prostu sekwencją znaków. Zmienną tekstową można zadeklarować na trzy sposoby:

- za pomocą **cudzysłowu** `" "`,
- za pomocą **apostrofów** `' '`,
- za pomocą **odwróconego apostrofu** (backtick) `` ` ` `` — specjalnego szablonu ciągu tekstowego (*template literal*), w którym zmienne mogą być używane bezpośrednio wewnątrz tekstu.

Przykład zadeklarowania zmiennych za pomocą cudzysłowu i apostrofów:

```js
let singleString = 'Witaj!';
let doubleString = "Jak się masz?";
```

> **Ważne:** preferowany styl zapisu (apostrof czy cudzysłów) można wybrać samodzielnie — ale tylko, jeśli pracujemy z kodem, w którym ten styl nie został już wcześniej ustalony. Musimy pamiętać o zachowaniu **spójności** w całym projekcie.

#### Różnica między apostrofem i cudzysłowem

Podstawowa różnica: w wartości ujętej w **cudzysłów** mogą znajdować się znaki **apostrofu** — i na odwrót.

Przy deklarowaniu ciągu tekstowego za pomocą apostrofów, ciąg ten **kończy się w momencie napotkania drugiego apostrofu** — nawet jeśli ten apostrof znajduje się w środku słowa. Poniższy przykład dobrze to ilustruje:

```js
let funActivity = 'Poznajemy język JavaScript, panie o'Hara';
```

Ciągiem tekstowym jest tutaj tylko `Poznajemy język JavaScript, panie o` — reszta znaków nie zostanie poprawnie zinterpretowana przez JavaScript (kod zwróci błąd składni).

Jeśli zadeklarujemy ten ciąg z użyciem cudzysłowu, zakończenie nie nastąpi w miejscu wystąpienia apostrofu, tylko na drugim znaku cudzysłowu. Dlatego poprawna wersja tego polecenia wygląda tak:

```js
let funActivity = "Poznajemy język JavaScript, panie O'Hara";
```

Analogicznie, zagnieżdżanie tego samego typu znaku nie zadziała w poniższym przykładzie:

```js
let question = "Czy chcesz poznać język JavaScript? "Tak!"";
```

Kompilator nie rozpozna użycia cudzysłowu w różnych kontekstach wewnątrz tego samego stringa i spowoduje to błąd.

#### Odwrócony apostrof (template literal)

Jeśli do zadeklarowania ciągu tekstowego używane są znaki odwróconego apostrofu (backtick), można odwołać się do zmiennej wewnątrz tekstu — zostanie użyta jej wartość. Składnia to `${nazwaZmiennej}`:

```js
let language = "JavaScript";
let message = `Poznajemy język ${language}`;

console.log(message);
// "Poznajemy język JavaScript"
```

---

## 5. Znaki sterujące (escape characters)

Powiedzmy, że w ciągu tekstowym chcemy użyć znaków cudzysłowu, apostrofu czy odwróconego apostrofu — i stajemy przed problemem, bo nie da się tego osiągnąć za pomocą wcześniej opisanych konstrukcji wprost. Na szczęście mamy na to rozwiązanie.

Możemy skorzystać ze znaku specjalnego, który w JavaScripcie ma następujące znaczenie: *"następny znak ma nie być traktowany w zwykły sposób"*. Jest to tzw. **znak sterujący**, czyli **ukośnik odwrotny** `\`.

W poniższym przykładzie ukośnik został użyty, aby zagwarantować, że interpreter nie potraktuje zbyt wcześnie znaku cudzysłowu jako zakończenia ciągu tekstowego:

```js
let str = "Witaj! Jak masz na imię, panie O'Hara? \"Mike\"?";
console.log(str);
```

Efektem tego kodu będzie wygenerowanie następujących danych wyjściowych:

```
Witaj! Jak masz na imię, panie O'Hara? "Mike"?
```

Jak widać, znaki cytowania w ciągu tekstowym zostały obsłużone bez problemów. Jest to możliwe dzięki umieszczeniu **przed** znakiem cytowania ukośnika, który zmienia jego znaczenie — w tym przypadku znak cytowania jest traktowany dosłownie, jako literał, a nie jako znak wskazujący koniec ciągu tekstowego.

### Inne zastosowania znaku sterującego

Znak sterujący ma jeszcze więcej możliwości. Pozwala m.in. na:

- zdefiniowanie znaku nowego wiersza — `\n`,
- użycie w tekście literału ukośnika — za pomocą składni `\\`.

Przykład zastosowania:

```js
let str3 = "Nowy \nwiersz.";
let str4 = "Ciąg tekstowy z ukośnikiem: \\!";

console.log(str3);
console.log(str4);
```

Efektem tego fragmentu kodu będzie wygenerowanie następujących danych wyjściowych:

```
Nowy
wiersz.
Ciąg tekstowy z ukośnikiem: \!
```

> Istnieją jeszcze inne znaki sterujące (np. `\t` — tabulacja), ale na razie te dwa przykłady wystarczą jako wprowadzenie.

---

## 6. Number

Typ danych używany do wyrażania liczb. W wielu językach programowania stosuje się wiele różnych typów liczbowych, ale w przypadku JavaScript twórcy zdecydowali o wykorzystaniu **tylko jednego** typu dla wszystkich wartości liczbowych — `Number`.

Mówiąc dokładniej, typ `Number` reprezentuje **64-bitową liczbę zmiennoprzecinkową**, co oznacza możliwość przechowywania ogromnych liczb — zarówno ze znakiem, jak i bez niego, liczb z przecinkiem dziesiętnym itd.

### Różne sposoby zapisu liczb

Liczby możemy przedstawiać jako liczby całkowite (np. `4`, `89`), ale typ `Number` pozwala również na zapis liczb zmiennoprzecinkowych, w notacji wykładniczej, a także liczb ósemkowych, szesnastkowych i binarnych:

```js
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // wartość dziesiętna to 8
let hexNr = 0x3e8; // wartość dziesiętna to 1000
let binNr = 0b101; // wartość dziesiętna to 5
```

Nie trzeba się tym przerażać — to są po prostu różne sposoby zapisu, na które można natknąć się w informatyce. Najważniejsze, żeby zapamiętać, że **wszystkie te liczby są wyrażane za pomocą jednego, tego samego typu danych** (`Number`).

### Liczby całkowite

```js
let intNr2 = 3434;
let intNr3 = -111;
```

### Liczby zmiennoprzecinkowe

```js
let decNr2 = 45.78;
```

### Liczby binarne

```js
let binNr2 = 0b100; // wartość dziesiętna to 4
```

To jest podstawowy, liczbowy typ danych, powszechnie używany w skryptach. Zachodzą jednak sytuacje, w których powstaje potrzeba użycia jeszcze większych liczb.

### Zakres wartości typu `Number`

Typ danych `Number` pozwala na obsługę wartości z zakresu:

```
od -(2^53 - 1) do (2^53 - 1)
```

Jeśli zachodzi potrzeba użycia większych liczb, wkraczamy na nowy typ danych — `BigInt`.

```js
console.log(Number.MAX_SAFE_INTEGER); //  9007199254740991  →  2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991  → -(2^53 - 1)
```

---

## 7. BigInt

Ten typ danych można rozpoznać po charakterystycznym **postfiksie `n`** na końcu liczby:

```js
let bigNr = 9007199254740992n;
```

### Mieszanie `Number` i `BigInt`

Przyjrzyjmy się przypadkowi przeprowadzania obliczeń między wartością typu `Number` (`intNr`) i `BigInt` (`bigNr`):

```js
let result = bigNr + intNr;
```

Efektem tego kodu będzie błąd:

```
Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions.
```

**Co się stało?** Po prostu nie możemy łączyć wartości `BigInt` i `Number` bezpośrednio w jednej operacji.

> **To ważne!** Wartości `BigInt` działają poprawnie tylko z innymi wartościami `BigInt` — nie z `Number`. Aby je połączyć, trzeba jawnie skonwertować jeden z typów (np. `BigInt(intNr)` albo `Number(bigNr)`), o czym pewnie będzie więcej w kolejnym rozdziale o konwersji typów.

---

- *(miejsce na rzeczy, które chcę jeszcze dopytać)*

---

## Do przećwiczenia

- [ ] Spróbować zadeklarować tę samą zmienną przez `let` i przez `const`, porównać błędy
- [ ] Sprawdzić w konsoli różnicę zasięgu `let` vs `var` w bloku `if {}`
- [ ] Napisać własny przykład z template literal (`` ` ``) i kilkoma zmiennymi naraz
- [ ] Napisać string zawierający jednocześnie cudzysłów i apostrof, używając `\"` do escapowania
- [ ] Sprawdzić w konsoli `console.log(Number.MAX_SAFE_INTEGER)` i `Number.MIN_SAFE_INTEGER`
- [ ] Spróbować dodać do siebie wartość `Number` i `BigInt` bez konwersji — zobaczyć błąd na własne oczy
- [ ] Zapisać tę samą liczbę w postaci dziesiętnej, binarnej (`0b`) i szesnastkowej (`0x`), porównać w konsoli