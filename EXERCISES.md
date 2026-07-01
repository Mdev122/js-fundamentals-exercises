# Ćwiczenia — Podstawy JavaScript

> Lista zadań na podstawie notatek (`js-basic.md`). Rozwiązania w `names.js`.
> Po zrobieniu ćwiczenia: zmień `- [ ]` na `- [x]` i zrób commit.

---

## Część I — Zmienne i typy danych

### Zmienne, `let` / `var` / `const`

- [x] 01. Zadeklarować tę samą zmienną przez `let` i przez `const`, porównać błędy przy próbie redeklaracji/zmiany wartości.
- [x] 02. Sprawdzić w konsoli różnicę zasięgu `let` vs `var` w bloku `if {}`
- [x] 03. Napisać własny przykład z template literal (`` ` ``) i kilkoma zmiennymi naraz

### Stringi i znaki sterujące

- [x] 04. Napisać string zawierający jednocześnie cudzysłów i apostrof, używając `\"` do escapowania

### Number / BigInt

- [ ] 05. Sprawdzić w konsoli `console.log(Number.MAX_SAFE_INTEGER)` i `Number.MIN_SAFE_INTEGER`
- [ ] 06. Spróbować dodać do siebie wartość `Number` i `BigInt` bez konwersji — zobaczyć błąd na własne oczy
- [ ] 07. Zapisać tę samą liczbę w postaci dziesiętnej, binarnej (`0b`) i szesnastkowej (`0x`), porównać w konsoli

### Typy specjalne — `null`, `undefined`, `Symbol`

- [ ] 08. Sprawdzić `typeof null` na własne oczy i zapamiętać, że to znany "błąd historyczny" (`object`, nie `null`)
- [ ] 09. Porównać `===` dla dwóch identycznych stringów i dla dwóch `Symbol()` z tym samym opisem — zobaczyć różnicę (`true` vs `false`)
- [ ] 10. Sprawdzić, czy zmienna niezainicjowana (`let x;`) i zmienna z jawnie przypisanym `undefined` są sobie równe przez `===`

### `typeof` i konwersje typów

- [ ] 11. Napisać `typeof` dla wszystkich 7 prostych typów danych w jednym pliku i porównać z tabelką z notatek
- [ ] 12. Sprawdzić `console.log(2 * "2")` i `console.log(2 + "2")` w jednym pliku, porównać wyniki i typy (`typeof`)
- [ ] 13. Skonwertować `null`, `""` (pusty string) i `"witaj"` przez `Number()`, porównać wyniki — kiedy daje `0`, a kiedy `NaN`
- [ ] 14. Skonwertować string `"false"` przez `Boolean()` i zweryfikować, że wynikiem jest `true` (pułapka!)
- [ ] 15. Rozwiązać ćwiczenie z książki: sprawdzić `typeof` dla `str1`, `str2`, `val1`, `val2`, `myNum`

---

## Część II — Operatory

### Operatory arytmetyczne

- [ ] 16. Wykonać ćwiczenie praktyczne z dodawaniem (imię, wiek, `true`/`false` o umiejętności programowania) i wyświetlić zdanie w konsoli za pomocą template literal
- [ ] 17. Sprawdzić w konsoli różnicę `nr1 - nr2` (dwie liczby) vs. `str1 - nr3` (tekst i liczba) — zobaczyć `NaN` na własne oczy
- [ ] 18. Przetestować mnożenie liczby przez tekst i porównać z dodawaniem (`*` zawsze daje `NaN`, `+` robi konkatenację)
- [ ] 19. Napisać własny przykład z potęgowaniem `**` dla różnych wykładników (np. `2 ** 0`, `2 ** 1`, `2 ** 10`)
- [ ] 20. Policzyć resztę z dzielenia (`%`) dla kilku własnych par liczb i zweryfikować wynik ręcznie
- [ ] 21. Napisać program liczący, ile pełnych godzin i minut jest w podanej liczbie minut (na bazie przykładu z 125 minutami)

### Prefix / postfix

- [ ] 22. Przetestować różnicę między `x++` i `++x` w osobnych liniach (`console.log(x++)` vs `console.log(++x)`)
- [ ] 23. Rozpisać samodzielnie na papierze (etapowo) działanie wyrażenia złożonego, np. `a++ + ++b * c`, a potem zweryfikować w `node`

### Projekt — Pitagoras

- [ ] 24. Zainstalować `readline-sync` (`npm install readline-sync`) i przetestować pobieranie danych od użytkownika w terminalu
- [ ] 25. Rozwiązać zadanie z przeciwprostokątną dla różnych par przyprostokątnych (np. `3,4`, `6,8`, `5,12`) i zweryfikować wyniki
- [ ] 26. Sprawdzić tabelę pierwszeństwa operatorów w praktyce — napisać wyrażenie z grupowaniem `(...)` i bez niego, porównać różnicę w wyniku

### Operatory przypisania, porównania, logiczne

- [ ] 27. Wykonać ćwiczenie praktyczne z operatorami przypisania (zmienne `a`, `b`, `c` — dodawanie, dzielenie, reszta z dzielenia)
- [ ] 28. Sprawdzić różnicę `==` vs `===` dla par: `5` i `"5"`, `0` i `false`, `null` i `undefined`
- [ ] 29. Sprawdzić różnicę `!=` vs `!==` na tych samych parach co powyżej
- [ ] 30. Przetestować wszystkie warianty z `>`, `<`, `>=`, `<=` na własnych przykładowych liczbach
- [ ] 31. Napisać własny przykład z `&&`, gdzie jeden warunek jest prawdziwy a drugi fałszywy — zweryfikować, że całość daje `false`
- [ ] 32. Napisać własny przykład z `||`, gdzie oba warunki są fałszywe — zweryfikować, że całość daje `false`
- [ ] 33. Przetestować `!` na zmiennej boolowskiej i na całym wyrażeniu w nawiasie (`!(x < y)`) — porównać z `!x < y` (bez nawiasu) i zobaczyć różnicę

### Projekty

- [ ] 34. Rozwiązać Projekt 1 (konwerter mil na km) dla kilku różnych wartości mil
- [ ] 35. Rozwiązać Projekt 2 (konwersja cale/funty → cm/kg) i ewentualnie rozszerzyć o właściwy wzór BMI

### Sprawdzian umiejętności

- [ ] 36. Rozwiązać cały sprawdzian umiejętności samodzielnie w `node`, **zanim** zerknie się do odpowiedzi w notatkach
- [ ] 37. Znaleźć i zrozumieć pułapkę z pytania 10 (`b = 10` vs `b == 10`) — napisać własny przykład tego błędu i zobaczyć, jak "po cichu" zmienia wynik

---

## Notatki własne / niejasności

*(miejsce na rzeczy do dopytania w trakcie ćwiczeń)*

-