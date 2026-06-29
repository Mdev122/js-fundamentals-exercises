# Dokumentacja nauki JavaScript

> Notatki własne, sporządzone w trakcie nauki JavaScript od podstaw. Przykłady kodu testowane samodzielnie w `node`. Błędy i literówki z materiałów źródłowych zostały poprawione, a niejasne fragmenty doprecyzowane na podstawie własnych testów i analizy.

**Spis treści:**
- **Część I** — Podstawy JavaScript (zmienne, `let`/`var`/`const`, proste typy danych, konwersja typów)
- **Część II** — Operatory (arytmetyczne, jednoargumentowe, prefix/postfix, łączenie, przypisania, porównania, większy/mniejszy, logiczne)
- **Część III** — Projekty i sprawdzian umiejętności

---

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

## 8. Boolean

`Boolean` jest typem danych, który może przechowywać tylko dwie wartości: `true` i `false`. Ten typ danych bardzo często znajduje zastosowanie w kodzie, szczególnie w wyrażeniach, w których wynikiem musi być wartość logiczna.

```js
let bool1 = false;
let bool2 = true;
```

Powyższy przykład pokazuje wykorzystanie typu boolowskiego — wartości `true`/`false` mogą reprezentować np. tak/nie, włączony/wyłączony.

Przykład takiej sytuacji — wskazanie, czy obiekt został usunięty:

```js
let objectIsDeleted = false;
```

Inny przykład — czy światło jest włączone:

```js
let lightIsOn = true;
```

W omawianych przykładach: pierwsza zmienna wskazuje, że obiekt **nie** został usunięty, a druga — że światło **jest** włączone.

---

## 9. Symbol

Jest to zupełnie nowy typ danych, wprowadzony w specyfikacji **ES6** (ECMAScript 6). `Symbol` możemy wykorzystać w sytuacji, gdy ważne jest, aby dwie zmienne **nie były takie same**, nawet jeśli mają ten sam typ i wartość (opis tekstowy).

Poniżej deklaracje ciągów tekstowych i symboli (wszystkie mają tę samą wartość/opis):

```js
let str1 = "JavaScript to świetny język programowania!";
let str2 = "JavaScript to świetny język programowania!";
console.log("Te dwa ciągi tekstowe są takie same:", str1 === str2);

let sym1 = Symbol("JavaScript to świetny język programowania!");
let sym2 = Symbol("JavaScript to świetny język programowania!");
console.log("Te dwa obiekty Symbol są takie same:", sym1 === sym2);
```

Ten fragment kodu generuje następujące dane wyjściowe:

```
Te dwa ciągi tekstowe są takie same: true
Te dwa obiekty Symbol są takie same: false
```

W pierwszej części kodu JavaScript uznaje, że oba ciągi tekstowe są takie same (mają tę samą wartość i typ).

> **Ważne!** W drugiej części kodu poszczególne symbole są unikatowe — pomimo tego, że zawierają ten sam ciąg tekstowy (opis), to nie są takie same, czego efektem jest wygenerowanie wartości `false`. **Każde** wywołanie `Symbol(...)` tworzy zupełnie nowy, unikalny obiekt — opis tekstowy jest tylko etykietką do czytania, nie wpływa na "tożsamość" Symbolu.

Ten typ danych jest bardzo użyteczny przy obsłudze właściwości obiektów (np. jako unikalny klucz, który nigdy nie "zderzy się" z innym).

---

## 10. Undefined

JavaScript posiada specjalny typ danych przeznaczony dla zmiennej, której **nie została przypisana żadna wartość**. Ten typ danych określany jest mianem `undefined`.

Przykład:

```js
let unassigned;
console.log(unassigned);
```

Powyższy przykład spowoduje wygenerowanie następujących danych wyjściowych:

```
undefined
```

Wartość tego typu może być też przypisana **wyraźnie** — ale jest to uznawane za **bardzo złą praktykę**:

```js
let terribleThingToDo = undefined;
```

### Dlaczego to jest złą praktyką?

Pomimo że jest to wykonalne, jest to mocno odradzane, z wielu powodów. Jednym z nich jest sprawdzanie, czy dwie zmienne są takie same. Jeżeli jedna zmienna **nie została zdefiniowana** (czyli jest `undefined` automatycznie), a druga ma **wyraźnie przypisaną** wartość `undefined`, to zostaną one uznane za **takie same** (`===` da `true`).

To rodzi problem — jeśli celem porównania jest sprawdzenie, czy dwie zmienne są **rzeczywiście** równe (mają tę samą, sensowną wartość), a nie tylko to, że obie są "niezdefiniowane".

**Przykład:** jeśli zmienna przeznaczona na imię zwierzęcia i zmienna przeznaczona na nazwę użytkownika będą **obie** typu `undefined`, JS uzna je za takie same — pomimo że tym zmiennym nie przypisano żadnych sensownych wartości, i logicznie nie powinny być traktowane jako "równe".

---

## 11. Null

Ten typ danych jest wartością specjalną, wskazującą, że zmienna jest **pusta** lub ma **nieznaną wartość**. Wielkość liter ma przy nim znaczenie — zapisujemy go małymi literami:

```js
let empty = null;
```

Jeśli rozwiązujemy problem związany z napotkaniem zmiennej o wartości `undefined` (opisany w sekcji powyżej), przypisanie jej wartości `null` pozwala wyeliminować ten problem.

To jeden z powodów, dla których lepszym rozwiązaniem jest przypisanie wartości `null` zmiennej, która ma pozostać pusta/niewiadoma — zamiast jawnie przypisywać jej `undefined`.

**Przykład:**

```js
let terribleThingToDo = undefined;
let lastName;
console.log("Jedna zmienna jest typu undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Jedna zmienna jest typu null:", lastName === betterOption);
```

Powyższy kod wygeneruje następujące dane wyjściowe:

```
Jedna zmienna jest typu undefined: true
Jedna zmienna jest typu null: false
```

Ten przykład pokazuje, że automatycznie niezainicjowana zmienna (`lastName`) i zmienna, której wyraźnie przypisano wartość `undefined` (`terribleThingToDo`), są uznawane za takie same — co może być problematyczne. Natomiast zmienne `lastName` i `betterOption` (wyraźnie zdefiniowana jako `null`) **nie** są uznane za równe — co automatycznie eliminuje ten problem.

---

## 12. Analizowanie i modyfikowanie typów danych

Mając omówione wszystkie proste typy danych, czas na kolejną, ściśle powiązaną wiedzę. JavaScript posiada **wbudowane metody**, pomagające w pracy z prostymi typami danych — możemy z nich korzystać bez konieczności pisania własnej logiki od zera.

Jedną z takich wbudowanych metod już znamy i używamy:

```js
console.log()
```

Istnieje wiele metod wbudowanych, poznamy tu tylko wybrane:

1. Ustalenie typu zmiennej
2. Konwersja typu danych
3. Operatory:
   - a) operatory arytmetyczne
   - b) operatory jednoargumentowe — inkrementacja i dekrementacja
   - c) operatory prefiks i postfiks
   - d) łączenie operatorów
   - e) operatory przypisania
   - f) operatory porównania
   - g) operatory większy niż / mniejszy niż
   - h) operatory logiczne

### 1. Ustalenie typu zmiennej — operator `typeof`

Ustalenie typu zmiennej może być trudne, szczególnie w przypadku wartości `null` i `undefined`. Na szczęście mamy na to rozwiązanie w postaci operatora `typeof`, którego wartością zwrotną jest typ danej zmiennej.

Możemy go użyć z nazwą zmiennej oddzieloną spacją, albo umieszczoną w nawiasie okrągłym — obie formy są równoważne.

**Przykład wykorzystania:**

```js
let testVariable = 1;
let variableTypeTest1 = typeof testVariable;
let variableTypeTest2 = typeof(testVariable);

console.log(variableTypeTest1);
console.log(variableTypeTest2);

// pamiętać o literówkach — JS jest ściśle restrykcyjny co do wielkości liter (case-sensitive)
```

W wyniku wywołania, dla obu przypadków otrzymamy `"number"`. Nawias nie jest wymagany, ale jego użycie to dobra praktyka — bywa bardziej czytelne.

### Kolejny przykład — `typeof` w akcji, na wszystkich typach prostych

```js
let str = "Witaj!";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unikatowy");
let undef = undefined;
let unknown = null;

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);
```

`console.log` wyświetla najpierw nazwę zmiennej (jako ciąg tekstowy zdefiniowany za pomocą cudzysłowu), a potem jej typ, ustalony za pomocą `typeof`.

**Wygenerowany wynik:**

```
str string
nr number
bigNr bigint
bool boolean
sym symbol
undef undefined
unknown object
```

### Ciekawostka / pułapka: `typeof null`

Zauważmy, że w danych wyjściowych mamy jeden dziwny wiersz — dla zmiennej typu `null` wynik to `"object"`. Skoro mamy do czynienia z **prostym typem**, a nie obiektem, to wygląda na błąd — i faktycznie jest to dobrze znany, **historyczny błąd** w samym języku JavaScript.

> Błąd istnieje od bardzo dawna, ale nie został usunięty, aby nie powodować problemów ze **wsteczną zgodnością** (naprawienie tego mogłoby zepsuć ogromną ilość istniejącego kodu na świecie, który już na ten błąd "liczy"). Nie wpływa to negatywnie na działanie programów — ważne jest tylko, żeby wiedzieć, że ta anomalia istnieje, i nie dać się jej zaskoczyć.

---

### 2. Konwersja typu danych

Zmienna w JavaScripcie może zmienić typ. Czasami JavaScript robi to **automatycznie** (niejawnie). Zastanówmy się, jaki będzie wynik wykonania poniższego kodu:

```js
let nr1 = 2;
let nr2 = "2";

console.log(nr1 * nr2);
```

Próbujemy tu pomnożyć zmienną typu `Number` ze zmienną typu `String`. W przeciwieństwie do innych języków programowania, JavaScript **nie zgłosi tu błędu** — będzie próbował skonwertować wartość tekstową na liczbę. Jeśli to się uda, kod zostanie wykonany bez problemów, a `console.log()` wyświetli w konsoli wartość:

```
4
```

**Jednak taki kod jest niebezpieczny!** Zobaczmy, jaki będzie wynik bardzo podobnie wyglądającego przykładu:

```js
let nr1 = 2;
let nr2 = "2";

console.log(nr1 + nr2);
```

Wynikiem będzie:

```
22
```

Znak `+` służy do **konkatenacji** ciągów tekstowych. Dlatego w tym przykładzie, zamiast konwertować wartość tekstową na liczbę, JavaScript przeprowadza konwersję **liczby na ciąg tekstowy**, a następnie łączy obie wartości — sklejenie `"2"` i `"2"` daje w wyniku `"22"`.

> To jest dokładnie ta "pułapka konkatenacji", o której już wspominałem — `*` i `+` zachowują się różnie w kontakcie z mieszanymi typami: `*` zawsze próbuje matematyki (konwertuje string na liczbę), a `+` przy mieszanych typach woli konkatenację (konwertuje liczbę na string).

Na szczęście nie trzeba polegać na niejawnej (automatycznej) konwersji JavaScriptu — istnieją **wbudowane funkcje**, które można wykorzystać do **jawnej** (świadomej, kontrolowanej) konwersji typu zmiennej.

#### Trzy metody konwersji: `String()`, `Number()`, `Boolean()`

- **`String()`** — konwertuje zmienną na typ `String` (przyjmuje dowolną wartość, także `undefined` i `null`, a następnie "ujmuje ją w cudzysłów", czyli zwraca jako tekst).
- **`Number()`** — próbuje skonwertować zmienną na liczbę. Jeśli nie da się tego zrobić logicznie, wartością wynikową będzie `NaN` (z ang. *Not a Number*, czyli "to nie liczba").
- **`Boolean()`** — konwertuje zmienną na wartość boolowską. Wynikiem będzie `true` dla **wszystkich** wartości, **poza**: `null`, `undefined`, `0` (zero), pusty ciąg tekstowy `""` i `NaN`.

**Przykład tych metod w akcji:**

```js
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "każdy ciąg tekstowy to wartość true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);
```

Po uruchomieniu powyższego kodu nastąpi wygenerowanie następujących danych wyjściowych:

```
6 string
12 number
true boolean
```

Wydaje się to całkiem proste — ale nie każda konwersja kończy się tak przewidywalnym wynikiem.

#### Przypadki specjalne — `null` i pusty string konwertowane na liczbę

```js
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let emptyToNr = "";
emptyToNr = Number(emptyToNr);
console.log("pusty ciąg tekstowy", emptyToNr, typeof emptyToNr);
```

Powyższe fragmenty kodu wygenerują następujące dane wyjściowe:

```
null 0 number
pusty ciąg tekstowy 0 number
```

Widzimy, że wynikiem konwersji **pustego ciągu tekstowego** i wartości **`null`** na liczbę jest `0`. To wybór dokonany przez twórców JavaScript — warto o nim wiedzieć. Przydaje się np. gdy chcemy skonwertować ciąg tekstowy na `0`, jeśli jest on pusty lub ma wartość `null`.

#### Kiedy konwersja na liczbę się nie udaje — `NaN`

```js
let strToNr2 = "witaj";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);
```

Dane wyjściowe tego fragmentu kodu:

```
NaN number
```

> **Ciekawostka:** `typeof NaN` to `"number"` — `NaN` jest, paradoksalnie, traktowany jako wartość *typu* liczbowego, mimo że dosłownie oznacza "to nie liczba". To jeszcze jedna mała pułapka warta zapamiętania, podobna do `typeof null` zwracającego `"object"`.

Dane te potwierdzają, że jeśli wartość tekstowa **nie może** zostać logicznie skonwertowana na liczbę, w wyniku konwersji otrzymujemy `NaN`.

#### Konwersja stringów na Boolean — częsta pułapka

```js
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let emptyToBool = "";
emptyToBool = Boolean(emptyToBool);
console.log(emptyToBool, typeof emptyToBool);
```

Wygenerowane zostaną następujące dane wyjściowe:

```
true boolean
false boolean
```

> **Uwaga, to jest nieintuicyjne!** Ciąg tekstowy `"false"` (czyli **słowo** "false" jako tekst) po konwersji na `Boolean` daje `true`! Dlaczego? Bo `Boolean()` nie "czyta" treści stringa — sprawdza tylko, czy string jest **pusty czy nie**. A `"false"` to niepusty string (ma 5 znaków), więc konwertuje się na `true`.

Ten przykład pokazuje, że **każdy niepusty** ciąg tekstowy konwertowany na wartość boolowską otrzymuje wartość `true` — to dotyczy nawet ciągu tekstowego `"false"`. Tylko **pusty ciąg** (`""`) oraz wartości `null` i `undefined` przyjmą wartość boolowską `false`.

#### Łączenie niejawnej i jawnej konwersji — naprawienie przykładu z konkatenacją

Wróćmy do przykładu z samego początku tej sekcji:

```js
let nr1 = 2;
let nr2 = "2";

console.log(nr1 + Number(nr2));
```

Konsola wygeneruje wynik:

```
4
```

Ponieważ ciąg tekstowy jest **najpierw jawnie konwertowany** na liczbę (przez `Number(nr2)`), a dopiero później przeprowadzana jest operacja `+`. Dlatego w tym miejscu zachodzi operacja matematyczna, a nie konkatenacja ciągu tekstowego — **kontrolujemy** to sami, zamiast zdawać się na niejawne (automatyczne) zachowanie JS.

#### Ćwiczenie praktyczne (z książki)

Jakie są typy poniższych zmiennych? Sprawdź to za pomocą `typeof` i wyświetl wyniki w konsoli:

```js
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
```

---

## Wnioski praktyczne (z testowania kodu)

### O literówkach i błędach w materiałach

Książki i kursy do nauki — nawet renomowane — czasem zawierają literówki w przykładach kodu (np. błędny ukośnik, brak spacji w nazwie zmiennej, niekonsekwentna wielkość liter). To się zdarza i nie jest oznaką, że "czegoś nie rozumiem" — to błąd w materiale.

**Najlepsza obrona przed tym:** zawsze testować kod samodzielnie w `node` / konsoli, a nie tylko wierzyć tekstowi. Jeśli coś nie działa zgodnie z opisem, to dobry sygnał do sprawdzenia, czy to literówka, czy faktycznie czegoś nie rozumiem.

### Częste przyczyny błędu `ReferenceError: X is not defined`

1. **Literówka w nazwie zmiennej** — np. `variableTypetest2` (małe `t`) vs `variableTypeTest2` (wielkie `T`). JavaScript jest **case-sensitive** — różnica jednej litery to dla niego dwie zupełnie różne nazwy.
2. Zmienna nie została zadeklarowana wcale, zanim próbuję jej użyć.
3. Zmienna jest zadeklarowana **niżej** w pliku niż linia, w której próbuję jej użyć (JS czyta kod od góry do dołu).

### Workflow przy testowaniu kodu w `node`

1. Napisz/popraw kod w pliku.
2. **Zapisz plik (Ctrl+S)** — bez tego `node` uruchomi starą wersję pliku! Łatwo o tym zapomnieć na początku.
3. Uruchom `node nazwa-pliku.js` w terminalu.
4. Jeśli błąd — przeczytaj uważnie komunikat (nazwa błędu + numer linii), to zwykle wskazuje **dokładnie**, co jest nie tak.

### O `let`/`const` w przykładach z książki

Niektóre przykłady w książce pomijają `let`/`const` przy pierwszym użyciu zmiennej (np. `testVariable = 1;` bez słowa kluczowego). To "działa" technicznie (tworzy niejawną zmienną globalną), ale jest **złą praktyką** — w trybie `'use strict'` (używanym w prawdziwych projektach, np. w moim projekcie pizzerii) taki kod wywoła błąd.

**Zasada na przyszłość:** zawsze pisać `let`/`const` przy pierwszej deklaracji zmiennej, nawet jeśli przykład w książce tego nie robi.

### O `'use strict'`

- **Krótkie ćwiczenia/testy do nauki** → niepotrzebny, mogę pisać bez niego.
- **Prawdziwy, większy projekt** → dobra praktyka, dodawać na górze plików JS.
- Klasy (`class`) i moduły ES (`import`/`export`) automatycznie włączają strict mode od wewnątrz, nawet bez wpisania `'use strict'` wprost.

---

## Do przećwiczenia

- [ ] Spróbować zadeklarować tę samą zmienną przez `let` i przez `const`, porównać błędy
- [ ] Sprawdzić w konsoli różnicę zasięgu `let` vs `var` w bloku `if {}`
- [ ] Napisać własny przykład z template literal (`` ` ``) i kilkoma zmiennymi naraz
- [ ] Napisać string zawierający jednocześnie cudzysłów i apostrof, używając `\"` do escapowania
- [ ] Sprawdzić w konsoli `console.log(Number.MAX_SAFE_INTEGER)` i `Number.MIN_SAFE_INTEGER`
- [ ] Spróbować dodać do siebie wartość `Number` i `BigInt` bez konwersji — zobaczyć błąd na własne oczy
- [ ] Zapisać tę samą liczbę w postaci dziesiętnej, binarnej (`0b`) i szesnastkowej (`0x`), porównać w konsoli
- [ ] Sprawdzić `typeof null` na własne oczy i zapamiętać, że to znany "błąd historyczny" (`object`, nie `null`)
- [ ] Porównać `===` dla dwóch identycznych stringów i dla dwóch `Symbol()` z tym samym opisem — zobaczyć różnicę (`true` vs `false`)
- [ ] Sprawdzić, czy zmienna niezainicjowana (`let x;`) i zmienna z jawnie przypisanym `undefined` są sobie równe przez `===`
- [ ] Napisać `typeof` dla wszystkich 7 prostych typów danych w jednym pliku i porównać z tabelką z notatek
- [ ] Sprawdzić `console.log(2 * "2")` i `console.log(2 + "2")` w jednym pliku, porównać wyniki i typy (`typeof`)
- [ ] Skonwertować `null`, `""` (pusty string) i `"witaj"` przez `Number()`, porównać wyniki — kiedy daje `0`, a kiedy `NaN`
- [ ] Skonwertować string `"false"` przez `Boolean()` i zweryfikować, że wynikiem jest `true` (pułapka!)
- [ ] Rozwiązać ćwiczenie z książki: sprawdzić `typeof` dla `str1`, `str2`, `val1`, `val2`, `myNum`

---
---

# II. Operatory

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

## g) Operatory jednoargumentowe — inkrementacja i dekrementacja

Te dwa operatory arytmetyczne to — zarówno dla osób operujących na innych językach programowania, jak i uczących się od podstaw JavaScriptu — absolutna nowość.

Pojęciem używanym w kontekście ich używania jest **operand**. Operator przeprowadza działania na operandach, więc w przypadku operacji `x + y` operandami są `x` oraz `y`. Podczas inkrementacji i dekrementacji potrzebny jest tylko **jeden** operand, dlatego nazywa się je **jednoargumentowymi**.

Jeśli widzisz zapis w postaci `x++`, odczytujesz go jako `x = x + 1` (operator **inkrementacji**). Jeśli chodzi o operator **dekrementacji**, zapis `x--` odczytujemy jako `x = x - 1`.

**Przykład inkrementacji i dekrementacji:**

```javascript
let nr1 = 4;
nr1++;
console.log(nr1);

let nr2 = 4;
nr2--;
console.log(nr2);
```

Wygenerowane wyniki to:

```
5
3
```

---

## h) Operatory prefix i postfix

Operator inkrementacji może znajdować się **po** operandzie (`x++`) i jest wówczas nazywany operatorem jednoargumentowym typu **postfix**. Ten sam operator może być również umieszczony **przed** operandem (`++x`) i jest wtedy nazywany operatorem jednoargumentowym typu **prefix**.

Brzmi skomplikowanie 🙂, a działanie tych operatorów jest odmienne — ale analiza kodu i cierpliwe, rozsądne podejście powinno tu pomóc.

### Postfix (`x++`)

Operator postfix jest wykonywany **po** przekazaniu (odczytaniu) zmiennej, a tym samym **po** przeprowadzeniu operacji odczytu. W omawianym przykładzie zmienna `nr2` jest inkrementowana o 1 już **po** użyciu jej do wyświetlenia wartości. Pierwsze wywołanie `console.log` wyświetla **starą** wartość zmiennej `nr2`, ponieważ nie została ona jeszcze uaktualniona — natomiast drugie wywołanie `console.log` wyświetla już **uaktualnioną** wartość zmiennej.

```javascript
let nr2 = 2;
console.log(nr2++);
console.log(nr2);
```

Ten fragment kodu wygeneruje następujące dane wyjściowe:

```
2
3
```

### Prefix (`++x`)

Operator prefix jest wykonywany **przed** przekazaniem zmiennej, przy czym taka potrzeba często się pojawia. Spójrzmy na kolejny przykład:

```javascript
let nr2 = 2;
console.log(++nr2);
```

Ten fragment kodu wygeneruje:

```
3
```

### Sprawdzimy, czy rozumiemy zagadnienie — przykład złożony

```javascript
let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3);
```

Wynikiem wykonania tego kodu jest **16**.

**Analiza krok po kroku:**

JavaScript przetwarza takie wyrażenie w **dwóch etapach**:

**Etap 1 — najpierw rozwiązywane są wszystkie `++`/`--`:**
- `nr1++` (postfix) → do wyrażenia wraca **stara** wartość `nr1`, czyli `4`. Sama zmienna `nr1` zostaje zwiększona do `5`, ale **już po tym**, jak jej stara wartość trafiła do obliczenia.
- `++nr2` (prefix) → `nr2` jest **najpierw** zwiększane do `6`, i to właśnie `6` (nowa wartość) trafia do wyrażenia.
- `nr3` → nie ma przy nim żadnego `++`/`--`, więc bierze udział w obliczeniu ze swoją niezmienioną wartością: `2`.

Po tym etapie wyrażenie wygląda jak zwykłe równanie liczbowe:
```
4 + 6 * 2
```

**Etap 2 — liczymy resztę według standardowego priorytetu operatorów (mnożenie przed dodawaniem):**
```
6 * 2 = 12
4 + 12 = 16
```

**Wynik: `16`.** Po wykonaniu tej linii zmienne mają wartości: `nr1 = 5`, `nr2 = 6`, `nr3 = 2` (bez zmian).

> **Ważna zasada do zapamiętania:** `++`/`--` **nie mają "pierwszeństwa" przed mnożeniem** w sensie priorytetu operatorów arytmetycznych — to są dwa zupełnie różne mechanizmy. Inkrementacja/dekrementacja jest po prostu rozwiązywana **jako pierwszy, osobny krok** (zamieniana na konkretną liczbę), a dopiero **potem** JavaScript liczy to, co zostało, zwykłymi zasadami matematycznymi (priorytet `*` przed `+`).

---

## i) Łączenie operatorów

Operatory mogą być łączone i działają tak samo, jak w matematyce. Są wykonywane zgodnie z kolejnością działań, a **nie** od lewej do prawej strony. Wynika to z fenomenu nazywanego **pierwszeństwem operatorów**.

Jest jeszcze jedna istotna kwestia — tzw. **grupowanie** `(...)`, do którego używany jest nawias okrągły. Operacje znajdujące się w nawiasie mają pierwszeństwo. Kolejność operacji jest ustalana na zasadzie jej typu (najpierw ta, która ma pierwszeństwo). Jeżeli operacje są równorzędne, zostaną wykonane od lewej do prawej.

**Tabela pierwszeństwa operacji:**

| Operacja | Symbol | Przykład |
|---|---|---|
| Grupowanie | `(...)` | `(x + y)` |
| Potęgowanie | `**` | `x ** y` |
| Inkrementacja i dekrementacja (prefix) | `++`, `--` | `++x`, `--y` |
| Mnożenie, dzielenie, reszta z dzielenia | `*`, `/`, `%` | `x * y`, `x / y`, `x % y` |
| Dodawanie i odejmowanie | `+`, `-` | `x + y`, `x - y` |

---

## Zadanie: obliczenie przeciwprostokątnej trójkąta (twierdzenie Pitagorasa)

**Treść zadania:** Utwórz kod przeznaczony do obliczenia przeciwprostokątnej trójkąta, używając do tego twierdzenia Pitagorasa i długości dwóch pozostałych boków trójkąta. Zgodnie z twierdzeniem Pitagorasa związek między bokami trójkąta prostokątnego można wyrazić jako `a**2 + b**2 = c**2`. Twierdzenie Pitagorasa ma zastosowanie tylko dla trójkąta prostokątnego. Boki połączone kątem 90° są nazywane przyprostokątnymi — we wzorze są one oznaczone jako `a` i `b`. Natomiast najdłuższy, niepołączony z kątem prostym bok to przeciwprostokątna, oznaczona jako `c`. Następnie oblicz sumę ich kwadratów, a później znajdź jej pierwiastek kwadratowy. Wynik obliczeń powinien zostać wyświetlony w konsoli.

### Rozwiązanie (wersja w `node`, z pobraniem danych od użytkownika)

> W oryginalnej treści zadania jako sposób pobrania danych wskazany był `prompt()` — ten jednak działa tylko w przeglądarce, nie w `node`. Skoro `node` jest naszym głównym środowiskiem nauki, do pobrania danych od użytkownika użyto pakietu `readline-sync` (instalacja: `npm install readline-sync`), który daje ten sam efekt co `prompt()`, tylko w terminalu.

```javascript
// Import narzędzia (modułu) do pobierania danych od użytkownika w node.
// const, bo to przypisanie nigdy się nie zmienia w trakcie działania programu.
const readlineSync = require('readline-sync');

// ETAP 1: pobranie danych od użytkownika (jako tekst)
let przyprostokątna1 = readlineSync.question("Podaj długość przyprostokątnej a: ");
let przyprostokątna2 = readlineSync.question("Podaj długość przyprostokątnej b: ");

// ETAP 2: konwersja pobranego tekstu na liczby
// (readlineSync, podobnie jak prompt, zawsze zwraca string — trzeba to jawnie skonwertować)
przyprostokątna1 = Number(przyprostokątna1); // a
przyprostokątna2 = Number(przyprostokątna2); // b

// ETAP 3: obliczenie przeciwprostokątnej ze wzoru Pitagorasa
// a² + b² = c²   →   c = √(a² + b²)
// kolejność wykonania zgodna z priorytetem operatorów: ** przed +, a Math.sqrt() liczy się na końcu, na już gotowej sumie
let przeciwprostokątna = Math.sqrt(przyprostokątna1 ** 2 + przyprostokątna2 ** 2); // c

// wyświetlenie wyniku w konsoli
console.log(`Przeciwprostokątna wynosi: ${przeciwprostokątna}`);
```

**Przykładowe uruchomienie** (`node nazwa-pliku.js`):
```
Podaj długość przyprostokątnej a: 3
Podaj długość przyprostokątnej b: 4
Przeciwprostokątna wynosi: 5
```

### Wyjaśnienie kluczowych elementów zadania

| Element kodu | Co robi |
|---|---|
| `const readlineSync = require(...)` | Import narzędzia do pobierania danych w `node`. `const`, bo ta referencja nigdy się nie zmienia. |
| `readlineSync.question("...")` | Wyświetla podany tekst jako pytanie w terminalu i **zwraca** to, co użytkownik wpisał — jako tekst (string), bez żadnej walidacji. |
| `Number(...)` | Jawna konwersja tekstu na liczbę — niezbędna, bo operatory `**` i `+` mają działać matematycznie, nie jako konkatenacja tekstu. |
| `a ** 2`, `b ** 2` | Kwadraty przyprostokątnych — liczone **najpierw**, zgodnie z priorytetem operatorów (potęgowanie przed dodawaniem). |
| `+` | Suma kwadratów — prawa strona wzoru `a² + b²`. |
| `Math.sqrt(...)` | Wbudowana funkcja z obiektu `Math`, licząca pierwiastek kwadratowy z **już gotowej** sumy. To "odwrócenie" wzoru `c² = a² + b²` względem `c`. |
| `let` (dla zmiennych przyprostokątna1/2, przeciwprostokątna) | Użyte, bo te wartości mogą się zmieniać przy każdym uruchomieniu programu (inne dane od użytkownika). |

### Mała uwaga praktyczna na przyszłość

`.question()` **nie sprawdza**, czy użytkownik wpisał poprawną liczbę — po prostu zwraca to, co zostało wpisane, bez żadnej walidacji. Jeśli użytkownik wpisze np. literki, `Number(...)` zwróci `NaN`, a dalsze obliczenia (`**`, `+`, `Math.sqrt()`) również dadzą `NaN`. Na tym etapie nauki to nie jest jeszcze problem do rozwiązywania — ale warto wiedzieć, że w bardziej dopracowanym programie dodaje się dodatkową walidację danych wejściowych.

---

## Najczęstsze błędy znalezione w pierwotnych wersjach notatek (do zapamiętania na przyszłość)

Przy przepisywaniu i testowaniu tych sekcji wystąpiło kilka powtarzających się typów literówek i błędów — warto je znać, bo łatwo je przeoczyć przy czytaniu, a JavaScript jest na nie bardzo czuły:

| Typ błędu | Przykład błędny | Poprawka | Skutek błędu |
|---|---|---|---|
| Literówka w nazwie zmiennej | `n32` (zamiast `nr2`) | `nr2` | `ReferenceError: nr2 is not defined` |
| Spacja w nazwie zmiennej | `let result 1 = ...`, `let nr 2 = 2;` | `let result1 = ...`, `let nr2 = 2;` | `SyntaxError` — JS nie uzna tego za jedną nazwę |
| Brak spacji po `let` | `letnr3 = 3;` | `let nr3 = 3;` | JS odczyta to jako jedną (nieistniejącą) nazwę |
| Wielka litera w nazwie zmiennej | `nr1 % Nr2` | `nr1 % nr2` | `ReferenceError` — JS rozróżnia wielkość liter |
| Nawias okrągły zamiast klamrowego w template literal | `` `${nr} = $(result)` `` | `` `${nr} = ${result}` `` | tekst wyświetli się dosłownie jako `$(result)`, bez podstawienia wartości |
| Niedomknięty backtick (zamknięty innym znakiem) | `` `${a}'); `` | `` `${a}`); `` | string się "nie zamyka", reszta kodu jest źle interpretowana |
| Odwołanie do zmiennej o innej nazwie niż zadeklarowana | `let nr2 = 2; console.log(nr);` | `console.log(nr2);` | `ReferenceError: nr is not defined` |
| Przypisanie nieistniejącej wartości | `let nr2 = t;` | `let nr2 = 5;` (konkretna liczba) | `ReferenceError: t is not defined` |

**Wniosek:** najlepszą obroną przed takimi błędami jest zawsze samodzielne testowanie kodu (np. w `node`), a nie tylko czytanie przykładu w materiałach — nawet sprawdzone książki i kursy zawierają literówki.

---

## Do przećwiczenia — Operatory

- [ ] Wykonać ćwiczenie praktyczne z dodawaniem (imię, wiek, `true`/`false` o umiejętności programowania) i wyświetlić zdanie w konsoli za pomocą template literal
- [ ] Sprawdzić w konsoli różnicę `nr1 - nr2` (dwie liczby) vs. `str1 - nr3` (tekst i liczba) — zobaczyć `NaN` na własne oczy
- [ ] Przetestować mnożenie liczby przez tekst i porównać z dodawaniem (`*` zawsze daje `NaN`, `+` robi konkatenację)
- [ ] Napisać własny przykład z potęgowaniem `**` dla różnych wykładników (np. `2 ** 0`, `2 ** 1`, `2 ** 10`)
- [ ] Policzyć resztę z dzielenia (`%`) dla kilku własnych par liczb i zweryfikować wynik ręcznie
- [ ] Napisać program liczący, ile pełnych godzin i minut jest w podanej liczbie minut (na bazie przykładu z 125 minutami)
- [ ] Przetestować różnicę między `x++` i `++x` w osobnych liniach (`console.log(x++)` vs `console.log(++x)`)
- [ ] Rozpisać samodzielnie na papierze (etapowo) działanie wyrażenia złożonego, np. `a++ + ++b * c`, a potem zweryfikować w `node`
- [ ] Zainstalować `readline-sync` (`npm install readline-sync`) i przetestować pobieranie danych od użytkownika w terminalu
- [ ] Rozwiązać zadanie z przeciwprostokątną dla różnych par przyprostokątnych (np. `3,4`, `6,8`, `5,12`) i zweryfikować wyniki
- [ ] Sprawdzić tabelę pierwszeństwa operatorów w praktyce — napisać wyrażenie z grupowaniem `(...)` i bez niego, porównać różnicę w wyniku

---

## j) Operatory przypisania

Zetknęliśmy się już z nimi podczas przypisywania wartości zmiennym. Podstawowy operator przypisania to znak `=`, ale dostępne są również inne.

Każdy binarny operator arytmetyczny ma odpowiadający mu **operator przypisania**, pozwalający na stworzenie krótszego kodu.

**Przykład:**
```javascript
x += 5;   // oznacza: x = x + 5
x **= 3;  // oznacza: x = x ** 3
```

### Operator przypisania dodawania (`+=`)

```javascript
let x = 2;
x += 2;
console.log(x);
```

Po wykonaniu tej operacji wartość `x` będzie wynosić `4`, bo `x += 2` to dokładnie to samo co `x = x + 2`.

### Operator przypisania odejmowania (`-=`)

```javascript
let x = 4;
x -= 2;
console.log(x);
```

W trakcie tej operacji przypisania odejmowana jest wartość `2`, czyli `x = x - 2`. Wynik: `2`.

### Operator przypisania mnożenia (`*=`)

```javascript
let x = 2;
x *= 6;
console.log(x);
```

Wartość `x` zostanie pomnożona przez `6` — gdy wartością `x` jest `2`, da to wynik `12`, z rozpisem `x = x * 6`.

### Operator przypisania dzielenia (`/=`)

```javascript
let x = 12;
x /= 3;
console.log(x);
```

Co normalnie wyglądałoby jako `x = x / 3`. Wynik: `4`.

### Operator przypisania potęgowania (`**=`)

```javascript
let x = 4;
x **= 2;
console.log(x);
```

Co odpowiada `x = x ** 2`. Wynik: `16`.

### Operator przypisania reszty z dzielenia (`%=`)

```javascript
let x = 16;
x %= 3;
console.log(x);
```

Co odpowiada `x = x % 3`. Wynik: `1`.

### Zbiorcza tabela operatorów przypisania

| Operator | Przykład | Rozpisane jako |
|---|---|---|
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |
| `**=` | `x **= 5` | `x = x ** 5` |
| `%=` | `x %= 5` | `x = x % 5` |

> **Ćwiczenie praktyczne:** Utwórz zmienne dla trzech liczb `a`, `b` i `c`. Uaktualnij te zmienne za pomocą następujących działań, używając do tego operatorów przypisania:
> - dodaj wartości `b` i `a`
> - podziel wartość `a` przez `c`
> - zastąp wartość `c` resztą z dzielenia liczb `c` i `b`
>
> Wyświetl wszystkie liczby w konsoli.

---

## k) Operatory porównania

Operatory porównania różnią się od reszty operatorów — wynikiem ich działania jest zawsze wartość boolowska (`true` albo `false`).

### Równość

Jest kilka operatorów równości, przeznaczonych do ustalenia, czy dwie wartości są równe. Operatory te występują w dwóch wersjach:
- sprawdzającej jedynie **równość wartości**,
- sprawdzającej **równość wartości i typu danych**.

Pierwsza wersja operatora zwraca wartość `true`, gdy oba operandy są równe, nawet jeśli ich typy są odmienne. Druga wersja zwraca wartość `true` tylko wtedy, gdy zarówno wartość, jak i typ danych są równe.

**Operator `==` (luźna równość) — sprawdza tylko wartość, nie typ danych:**

```javascript
let x = 5;
let y = "5";
console.log(x == y);
```

Oba operandy mają wartość `5`, więc w konsoli zostaje wyświetlona wartość:

```
true
```

**Operator `===` (ścisła równość) — sprawdza wartość ORAZ typ danych:**

```javascript
console.log(x === y);
```

Aby uzyskać wynik `true` przy tym operatorze, zarówno wartość, jak i typ danych operandów muszą być takie same. W omawianym przykładzie tak nie jest (`x` to `Number`, `y` to `String`), dlatego to polecenie wyświetli w konsoli wartość:

```
false
```

> Operator `===` najczęściej używa się, gdy zachodzi potrzeba sprawdzenia pod kątem **faktycznej** równości — tylko on jednoznacznie wskazuje, czy obie porównywane zmienne są dokładnie takie same (wartość i typ).

### Nierówność

Nierówność jest podobna do równości, ale działa w odwrotny sposób — operator zwraca wartość `true`, jeśli dwie zmienne **są różne**; w przeciwnym razie wartością zwrotną będzie `false`.

**Operator `!=` (luźna nierówność):**

```javascript
let x = 5;
let y = "5";
console.log(x != y);
```

W tym wypadku wyświetli się wartość:

```
false
```

(bo `x` i `y` mają tę samą wartość `5`, tylko różny typ — a `!=` sprawdza **tylko** wartość, ignorując typ).

**Operator `!==` (ścisła nierówność) — sprawdza wartość ORAZ typ danych:**

```javascript
console.log(x !== y);
```

Jeśli `x` i `y` mają różne typy danych (nawet przy tej samej wartości), nie są uznane za "ściśle takie same", więc operator nierówności ścisłej wyświetli w konsoli:

```
true
```

### Zbiorcza tabela operatorów równości/nierówności

| Operator | Nazwa | Sprawdza |
|---|---|---|
| `==` | luźna równość | tylko wartość |
| `===` | ścisła równość | wartość i typ |
| `!=` | luźna nierówność | tylko wartość |
| `!==` | ścisła nierówność | wartość i typ |

---

## l) Operatory większy niż / mniejszy niż

**Operator większy niż (`>`)** daje wartość `true`, jeśli operand po lewej stronie jest większy niż operand po prawej stronie.

**Operator mniejszy niż (`<`)** daje wartość `true`, jeśli operand po lewej stronie jest mniejszy od operandu po prawej stronie.

Oprócz tych dwóch, rozróżniamy jeszcze **większy bądź równy** (`>=`) oraz **mniejszy bądź równy** (`<=`).

**Przykłady zastosowania:**

```javascript
let x = 5;
let y = 6;

console.log(y > x);
```
Konsola wygeneruje wartość `true`, ponieważ wartość zmiennej `y` jest większa niż wartość zmiennej `x`.

```javascript
console.log(x > y);
```
Wartość zmiennej `x` nie jest większa od wartości zmiennej `y`, więc wynikiem będzie `false`.

```javascript
console.log(y > y);
```
Wartość wygenerowana to `false` — `y` nie jest większe niż `y` (samo od siebie).

```javascript
console.log(y >= y);
```
To polecenie sprawdzi, czy wartość zmiennej `y` jest większa **bądź równa** zmiennej `y` — a ponieważ zmienna `y` jest równa sobie, mamy wynik `true` w konsoli.

**Do samodzielnego sprawdzenia (analogicznie, z operatorem `<` i `<=`):**

```javascript
console.log(y < x);
console.log(x < y);
console.log(y < y);
console.log(y <= y);
```

| Wyrażenie | Wynik | Wyjaśnienie |
|---|---|---|
| `y > x` | `true` | `6 > 5` |
| `x > y` | `false` | `5 > 6` |
| `y > y` | `false` | `6 > 6` (nie jest większe od samego siebie) |
| `y >= y` | `true` | `6 >= 6` (równe, więc spełnia "bądź równy") |
| `y < x` | `false` | `6 < 5` |
| `x < y` | `true` | `5 < 6` |
| `y < y` | `false` | `6 < 6` |
| `y <= y` | `true` | `6 <= 6` |

---

## m) Operatory logiczne

W przypadku, gdy chcemy jednocześnie sprawdzić dwa warunki bądź zanegować warunek, pomocne są operatory logiczne. Do dyspozycji mamy operatory logiczne **i** (`&&`), **lub** (`||`) oraz **nie** (`!`).

### Logiczne i (`&&`)

Jeśli chcemy sprawdzić, czy zmienna `x` jest mniejsza niż `y` **oraz** czy zmienna `y` jest mniejsza niż `z`, musimy połączyć dwa wyrażenia. Możemy to wykonać za pomocą operatora `&&`. Jego wartość zwrotna to `true`, ale tylko wtedy, jeśli **oba** wyrażenia przyjmują wartość `true`.

```javascript
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
```

Wynikiem wykonania tego polecenia jest wartość:

```
true
```

Odczytujemy to w taki sposób: jeśli `x` jest mniejsze niż `y` **i** `y` jest mniejsze od `z`, wyrażenie jest prawdziwe i mamy wartość `true`.

```javascript
console.log(x > y && y < z);
```

Pierwsza część wyrażenia (`x > y`, czyli `1 > 2`) nie spełnia wartości `true`, więc całe wyrażenie będzie fałszywe:

```
false
```

### Operator logiczny lub (`||`)

Jeżeli chcemy otrzymać wartość `true`, gdy **jedno** ze sprawdzanych wyrażeń jest prawdziwe, skorzystamy z operatora logicznego "lub". Operator ten zapisujemy jako `||`. Sprawdza on, czy którykolwiek ze sprawdzanych operandów przyjmuje wartość `true` — i jeśli tak, całe wyrażenie jest prawdziwe.

```javascript
console.log(x > y || y < z);
```

To polecenie wyświetli wartość `true` (mimo że `x > y` to `false`, drugi warunek `y < z` to `true`, a dla `||` wystarczy jeden prawdziwy warunek):

```
true
```

> Dla porównania: poprzedni operator (`&&`) w tym samym przykładzie (`x > y && y < z`) wyświetliłby `false`, bo `&&` wymaga, żeby **oba** warunki były prawdziwe — a tu tylko jeden jest.

Jeśli **oba** operandy przyjmują wartość `false`, wynikiem będzie `false`:

```javascript
console.log(x > y || y > z);
```

```
false
```

(bo `1 > 2` to `false`, i `2 > 3` to też `false` — żaden warunek nie jest prawdziwy).

### Logiczne nie (`!`)

Są sytuacje, w których zachodzi potrzeba **negacji** wartości boolowskiej, aby otrzymać wartość przeciwną. Do tego celu można użyć wykrzyknika, który oznacza "nie".

```javascript
let x = false;
console.log(!x);
```

Zostanie wyświetlona wartość `true`, bo wartość boolowska uległa zmianie na przeciwną.

Możemy również dokonać negacji **wyrażenia**, którego wynikiem jest wartość boolowska. Wtedy musimy się upewnić co do wartości całego wyrażenia i stosujemy tu **grupowanie** (nawias okrągły):

```javascript
let x = 1;
let y = 2;
console.log(!(x < y));
```

`x` jest mniejsze niż `y`, więc `(x < y)` zawiera wartość `true` — ale `!` przed nawiasem zmienia tę wartość na przeciwną, więc wygeneruje się wynik:

```
false
```

> **Uwaga na nawiasy:** `!(x < y)` (negacja całego wyrażenia) i `!x < y` (negacja tylko `x`, a potem porównanie) to **dwie różne rzeczy** — bez nawiasu `!` zadziałałby tylko na `x`, nie na cały wynik porównania. Grupowanie `(...)` jest tu kluczowe.

### Zbiorcza tabela operatorów logicznych

| Operator | Nazwa | Zwraca `true`, gdy... |
|---|---|---|
| `&&` | i (AND) | **oba** warunki są prawdziwe |
| `\|\|` | lub (OR) | **co najmniej jeden** warunek jest prawdziwy |
| `!` | nie (NOT) | odwraca wartość boolowską (`true` → `false`, `false` → `true`) |

---

# III. Projekty i sprawdzian umiejętności

## Projekt 1 — Konwerter mil na kilometry

**Treść zadania:** Utwórz zmienną przechowującą wartość wyrażoną w milach, skonwertuj ją na kilometry, a następnie w konsoli wyświetl tę wartość w formacie: *"Odległość 130 mil odpowiada 209.2142 kilometra"* (wskazówka: 1 mila to 1.60934 kilometra).

### Rozwiązanie

```javascript
let mile = 130;
let kilometry = mile * 1.60934;

console.log(`Odległość ${mile} mil odpowiada ${kilometry} kilometra`);
```

**Wynik:**
```
Odległość 130 mil odpowiada 209.2142 kilometra
```

---

## Projekt 2 — Kalkulator BMI

**Treść zadania:** Zdefiniuj wzrost w calach i wagę w funtach, skonwertuj te wartości na centymetry i kilogramy, a następnie wyświetl wynik w konsoli.

> Stałe przeliczeniowe: 1 cal = 2.54 cm, 1 funt = 0.453592 kg.

### Rozwiązanie

```javascript
let wzrostCale = 70;
let wagaFunty = 180;

let wzrostCm = wzrostCale * 2.54;
let wagaKg = wagaFunty * 0.453592;

console.log(`Wzrost: ${wzrostCm} cm`);
console.log(`Waga: ${wagaKg} kg`);
```

**Przykładowy wynik** (dla 70 cali i 180 funtów):
```
Wzrost: 177.8 cm
Waga: 81.64656 kg
```

> **Uwaga:** to zadanie nazywa się "Kalkulator BMI", ale w obecnej treści kończy się na samej **konwersji jednostek** (cale → cm, funty → kg). Pełny kalkulator BMI wymagałby dodatkowo wzoru `BMI = waga(kg) / (wzrost(m))²` — to dobry kandydat na rozszerzenie tego zadania, gdy w materiałach pojawi się więcej kontekstu, czy o to chodziło.

---

## Sprawdzian umiejętności

> Pytania do samodzielnego rozwiązania — najpierw spróbować odpowiedzieć "na papierze", a potem zweryfikować w `node`. Pod każdym pytaniem odpowiedź jest zwinięta w cytat, żeby nie "zdradzić" jej przy pierwszym czytaniu.

**1. Jakiego typu danych jest ta zmienna?**
```javascript
const c = "5";
```
> Odpowiedź: `string` — wartość jest w cudzysłowie, więc niezależnie od tego, że "wygląda" jak liczba, jest to tekst.

**2. Jakiego typu danych jest ta zmienna?**
```javascript
const c = 91;
```
> Odpowiedź: `number` — wartość zapisana bez cudzysłowu/apostrofów/backticków.

**3. Który z tych wierszy jest lepszy — pierwszy czy drugi?**
```javascript
let empty1 = undefined; // wiersz pierwszy
let empty2 = null;      // wiersz drugi
```
> Odpowiedź: **drugi** (`null`). Jawne przypisanie `undefined` jest złą praktyką (patrz sekcja 10 i 11 w Części I) — `null` lepiej komunikuje intencję "ta zmienna jest celowo pusta", a unika problemu z nieumyślnym `===` między "przypadkowo niezainicjowaną" a "jawnie undefined" zmienną.

**4. Jakie dane wyjściowe zostaną wyświetlone w konsoli?**
```javascript
let a = "Witaj,";
a = "świecie";
console.log(a);
```
> Odpowiedź: `świecie` — zmienną `a` nadpisano nową wartością, więc wyświetli się tylko ta druga, ostateczna wartość.

**5. Jakie dane wyjściowe wyświetlą się w konsoli?**
```javascript
let a = "świecie";
let b = "Witaj, ${a}!";
console.log(b);
```
> Odpowiedź: `Witaj, ${a}!` — **dosłownie**, ze znakami `${a}` widocznymi w tekście! To pułapka: string `b` jest zapisany w **cudzysłowie** (`" "`), nie w backtickach (`` ` ``), więc składnia `${...}` **nie działa** — jest traktowana jako zwykły tekst, a nie jako wstawienie wartości zmiennej. Żeby to zadziałało zgodnie z intencją, trzeba by użyć: ``let b = `Witaj, ${a}!`;``

**6. Jaka jest wartość zmiennej `a`?**
```javascript
let a = "Witaj,";
a = prompt("świecie");
console.log(a);
```
> Odpowiedź: zależy od tego, co użytkownik wpisze w okienku `prompt()` — `a` zostaje nadpisane tym, co użytkownik wpisał (jako tekst). Przypomnienie: `prompt()` działa tylko w przeglądarce, nie w `node` (patrz sekcja o zadaniu z Pitagorasem w Części II).

**7. Jaka wartość zmiennej `b` zostanie wyświetlona w konsoli?**
```javascript
let a = 5;
let b = 70;
let c = "5";
b++;
console.log(b);
```
> Odpowiedź: `71` — `b++` zwiększa `b` o 1 (`70 + 1`). Zmienne `a` i `c` nie mają tu żadnego wpływu, są tylko "rozpraszaczem" w pytaniu.

**8. Jaka jest wartość zmiennej `result`?**
```javascript
let result = 3 + 4 * 2 / 8;
```
> Odpowiedź: `4`. Priorytet operatorów: najpierw `*` i `/` (od lewej do prawej, bo są równorzędne): `4 * 2 = 8`, potem `8 / 8 = 1`. Na końcu dodawanie: `3 + 1 = 4`.

**9. Jaka jest wartość zmiennych `total` i `total2`?**
```javascript
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
```
> Odpowiedź: `total = 16`, `total2 = 536`.
> Rozbiórka: `firstNum++` → `firstNum = 6`. `secondNum--` → `secondNum = 9`. `++firstNum` → `firstNum = 7`, zwraca `7`. `total = 7 + 9 = 16`.
> Dla `total2`: najpierw `100 / 5 = 20` (priorytet dzielenia). `total--` (postfix) zwraca **starą** wartość `total`, czyli `16` (a `total` zostaje zmienione na `15`, ale to nie ma już wpływu na `total2`). Czyli `total2 = 500 + 20 + 16 = 536`.

**10. Jakie wartości zostaną wyświetlone w konsoli przez ten fragment kodu?**

> W oryginalnej wersji notatek ten fragment zawierał kilka błędów składniowych, które uniemożliwiały uruchomienie kodu — zostały poprawione poniżej (oryginał: brak nawiasu i kropki w jednej linii `console log(...)`, wielka litera w `False`, oraz pojedynczy `=` zamiast `==` w ostatniej linii, co byłoby próbą przypisania wewnątrz `console.log` i samo w sobie zwróciłoby błąd).

```javascript
const a = 5;
const b = 10;
console.log(a > 0 && b > 0);
console.log(a == 5 && b == 4);
console.log(true || false);
console.log(a == 3 || b == 10);
console.log(a == 3 || b == 11);
```

> Odpowiedzi:
> - `a > 0 && b > 0` → `true` (oba warunki prawdziwe)
> - `a == 5 && b == 4` → `false` (drugi warunek nieprawdziwy: `b` to `10`, nie `4`)
> - `true || false` → `true` (wystarczy jeden prawdziwy warunek dla `||`)
> - `a == 3 || b == 10` → `true` (pierwszy warunek nieprawdziwy, ale drugi — `b == 10` — prawdziwy)
> - `a == 3 || b == 11` → `false` (oba warunki nieprawdziwe)

---

## Najczęstsze błędy znalezione w tej części notatek (operatory przypisania, porównania, logiczne)

| Typ błędu | Przykład błędny | Poprawka | Skutek błędu |
|---|---|---|---|
| Zbędny znak `>` przed zamykającym nawiasem | `console.log(x > y \|\| y < z>);` | `console.log(x > y \|\| y < z);` | `SyntaxError: Unexpected token` |
| Brak nawiasu i kropki w `console.log` | `console log(true \|\| False);` | `console.log(true \|\| false);` | `SyntaxError` (brak nawiasu) + `ReferenceError: False is not defined` (JS rozróżnia wielkość liter — `false` to słowo kluczowe, `False` to nieistniejąca zmienna) |
| Pojedynczy `=` zamiast `==` w porównaniu | `console.log(a == 3 \|\| b = 10);` | `console.log(a == 3 \|\| b == 10);` | To nie błąd składni, ale **błąd logiczny** — `b = 10` to **przypisanie** (nadpisuje `b` na `10` i zwraca `10`, co jest "prawdziwe" dla `\|\|`), a nie porównanie. Bardzo łatwa do przeoczenia pułapka: jeden znak `=` zamiast dwóch zmienia całe znaczenie linii. |
| Duplikat liter sekcji w numeracji notatek | dwa razy `h)` i `i)` w oryginalnych notatkach | ciągła numeracja: `j) przypisania`, `k) porównania`, `l) większy/mniejszy`, `m) logiczne` | nie wpływa na działanie kodu, ale utrudnia odnajdywanie się w dokumentacji |

**Wniosek:** błąd `b = 10` zamiast `b == 10` to jeden z najbardziej "podstępnych" błędów w JavaScript — kod **się uruchamia**, nie ma żadnego komunikatu błędu, ale wynik jest zupełnie inny niż zamierzony. To dobry argument za tym, żeby **zawsze** dokładnie sprawdzać, czy w porównaniu jest `==`/`===`, a nie pojedynczy `=`.

---

## Do przećwiczenia — Operatory przypisania, porównania, logiczne

- [ ] Wykonać ćwiczenie praktyczne z operatorami przypisania (zmienne `a`, `b`, `c` — dodawanie, dzielenie, reszta z dzielenia)
- [ ] Sprawdzić różnicę `==` vs `===` dla par: `5` i `"5"`, `0` i `false`, `null` i `undefined`
- [ ] Sprawdzić różnicę `!=` vs `!==` na tych samych parach co powyżej
- [ ] Przetestować wszystkie warianty z `>`, `<`, `>=`, `<=` na własnych przykładowych liczbach
- [ ] Napisać własny przykład z `&&`, gdzie jeden warunek jest prawdziwy a drugi fałszywy — zweryfikować, że całość daje `false`
- [ ] Napisać własny przykład z `||`, gdzie oba warunki są fałszywe — zweryfikować, że całość daje `false`
- [ ] Przetestować `!` na zmiennej boolowskiej i na całym wyrażeniu w nawiasie (`!(x < y)`) — porównać z `!x < y` (bez nawiasu) i zobaczyć różnicę
- [ ] Rozwiązać Projekt 1 (konwerter mil na km) dla kilku różnych wartości mil
- [ ] Rozwiązać Projekt 2 (konwersja cale/funty → cm/kg) i ewentualnie rozszerzyć o właściwy wzór BMI
- [ ] Rozwiązać cały sprawdzian umiejętności samodzielnie w `node`, **zanim** zerknie się do odpowiedzi w notatkach
- [ ] Znaleźć i zrozumieć pułapkę z pytania 10 (`b = 10` vs `b == 10`) — napisać własny przykład tego błędu i zobaczyć, jak "po cichu" zmienia wynik

---

## Pytania / niejasności

- *(miejsce na rzeczy, które chcę jeszcze dopytać)*
- Projekt 2 nazywa się "Kalkulator BMI", ale treść zadania nie wspomina o samym wzorze BMI — czy to ma być tylko etap konwersji jednostek, czy w pełnej wersji zadania chodzi też o obliczenie wskaźnika BMI?