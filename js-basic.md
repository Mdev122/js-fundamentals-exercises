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

## Pytania / niejasności

- *(miejsce na rzeczy, które chcę jeszcze dopytać)*

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

3.
Operatory
Zapoznawszy się z całkiem spora liczbą typów danych i wybranych sposobów ich konwersji warto zgłębić kolejny ważny element JavaScript "Operatory".
Są bardzo przydatne gdy trzeba pracować ze zmiennymi,modyfikować je przeprowaddzać obliczenia z ich użyciem a także porównywać je.Nazwa operator wzięła się staąd,że elemety są używane do przeprowadzania operacji z wykorzystaniem zmiennych.
a.)Operatory arytmetyczne
mogą byc używane do przeprowadznia operacji na liczbach.Większośc tych operacji jest naturalna poniewąż przedstawia podstawowe operacyje matemtyczne z któymi masz styczność na co dzień.
- Dodawanie:
bardzo prosta operacja w JavaScripcie do której używamy opratora + .
przykłąd:
let nr1 = 12;
let n32 = 14;
let result1 = nr1 + nr2;

Operator plus jest także stosowany do kokonkatenacji ciągów tekstowych.Należy zwrócić uwagę na spację po słowie Operacja dzięki której mamy pewność ze w wyniku również tą spację zobaczymy.
przykład:
let str1 = "Operacja ";
let str2 = "dodawania";
let result2 = str1 + str2;
Zostaną wygenerowane następujące dane wyjściowe dlatych fragmentów kodu:
dla pierwszego 
26
dla drugiego
Operacja dodawania
Dodawanie wartości liczbowych i tekstowych daje różne wyniki.Próba dodania dwoch ciągów tekstowych prowadzi do ich konkatenacji na postac pojedyńczego ciągu tekstowego.

Cwiczenie praktyczne
Utwórz zmienną  przeznaczoną do przechowywania Twojego imienia,następną do przechowywania wieku i kolejną wskazującą czy potyrafisz programować w JavaScripcie.
W konsoli wyświetl następujące zdanie:
Witaj, mam na imię Maaike, mam 29 lat i potrafie programować w JavaScript: true.

b.)Odejmowanie
działą z godnie zoczekiwaniami.Do hego przeprowadzenia  używamy operatora - .
Ciekawe jaki wynik da poniższy przykład:
let nr1 = 20;
let nr2 = 4;
let str1 = "Cześć";
letnr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);

Pierwsza wygenerowana wartość to 16 ale druga to Nan,Dlaczeggo?Dlatego ponieważ różnica liczby i cięgu tekstowego nie jest liczbą i co ciekawe nei wygenerował się bład w w Java script.

c.)Mnożenie
Iloczyn dwóch wartości liczbowych otrzymujemy po użyciu opratora *.W przeciwieństwie dop innych języków programowabnia w JavaScript nie możemy mnożyć liczby i ciągu tekstowego wynikiemj takiej operacji byłby Nan.
Przykład:
let nr1 = 15;
let nr2 = 10;
let srt 1 = "Cześć";
let nr 3 = 3;
let result 1 = nr1 * nr2;
let result2 = str1 * nr 3;
console.log(ressult1, result 2);

powyższy fragmet kodu wygeneruje następujące dane wyjściowe:
150 NaN
