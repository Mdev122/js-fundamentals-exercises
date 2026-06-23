I.Podstawy Java script
1.Zmienne
Zmienne jest podstawowym elementem konstrukcyjnym,który poznajemy podczas nauki większości języków oprogramowania.Jest to element mogący przedstawiac różne wartości w kodzie w trakcie jego każdego wykonania.
Poniżej przykłąd dwóch zmiennych w krypcie:
firstName = "Maaike";
x = 2;
W trakcie wyjonywania kodu można im przypisać nowe wartości:
firstName = 'Edward';
x = 7;
gdyby nie zmienna to dany frakment kodu działaby za każdym razem dokładnie w taki sam sposób za każdym razem gdy następuje jego wykonanie.Czasami jest to bardzo użyteczna cecha w niektórych sytuacjach ale pomimo tego zastosowanie zmiennych zapewnia dużo większe możliwości bo pozwala aby kod działal inaczej w trakcie każdego jego wykonywania.

2.Deklarowanie zmiennej
Przy pierwszym wywołaniu zmiennej następuje jej zadeklarowanie.Aby to osiągąć potrzebujemy specjalnego słowa kluczowego:
- let
-var lub const
Aby przypisać istniejącej zmiennej w trakcie kolejnych wywołań nową wartośc używa się jedynie jej nazwy :
let firstname = 'Maria';
firstName = 'Jacky';
W prezentowanych przykladach w kodzie będą przypisawane wartości zmiennych.Jest to nazywane "zdefiniowaniem wartości na stałe", ponieważ wartość zmiennej jest definiowana w skrypcie i nie ustala się jej dynamicznie na podstawie zewnętrznych danych wejsciowych.Takie rozwiązanie jest rzadko stosowane w rzeczywistym kodzie a wartości coraz częśćiej pochodzą ze źródeł zewnętrznych np.
-wypełnione przez użytkownika pole tekstowe na stronie internetowej
-baza danych
-inny kod wywołany przez Twój kod
itd.
użycie wartości zmiennych pochodzących zeżródeł zewnętrznych zamiast na stałę zdefiniowanych w skrypcie jest podem dla którego takie skrypty potrafią przystosować się do nowych informacji bez konieczności tworzenia nowego kodu!!.
Tak oto zostało wyjaśnione jak potężnym elementem konstrukcyjnym jest zmienna w kodzie.
Obecnie wykorzystujemy wartości zmiennych na stałe zdefiniowanych w skryptach czyli niemodyfikowalnych aż dio zmiany ich w kodzie przez programistę.Wkróce poznam jak zmienna może pobierać wartość która pochodzi  ze źródła zewnętrznego.
Słowa kluczowe(let,var,const)
Definicja zmiennej opeira się na trzech częściach:
a) Słowo kluczowe(let,var,const)
b) Nazwa
c) Wartość
Poniże przykłądy zmiennych zdefiniowanych za pomoća poszczególnych słów kluczowych:
letnr1 = 12;
vat nr2 = 8;
const PI = 3.14159;

a)
Słowa kluczowe let i var są używane do definiowania zmiennej dla ktorej w trakcie działania programu może być przypisana nowa wartość.
Rożnica pomiędzy tymi dwoma słowami kluczowymi jest złożona i ma ścisły związek z zasięgiem.
var jest słowem kluczowym o zasięgu globalnym tzn.zmienna która jest zadeklarowana za pomocą słowa kluczowego var jest dostępna w całym skrypcie.
Let natomaist dysponuje tylko zasięgiem blokowym czyli,że zmienna zadekalrowana za pomoca tego słowa ma tylko zastosowanie w bloku kodu.Musimy przy tym pamietać że blok kodu rozpoczyna zawsze nawias klamrowy ikonczy też nawias klamrowy co pozwala doskonale rozróżnaic częsci kodu.
const jest słowem kluczowym stosowanym w zmiennych które mają tylko jednokrotnie przypisaną wartość.u nas akurat wartością const jest wartość PI ktora nie ulega zmianie.
Próba złamania tej reguły i ponownego przypisania wartości const zaoowcuje wygenerowaniem komunikatu błędu co pokazuje poniższy przykład:
const someConstant = 3;
someConstant =4;
Następstem tych dwohc poleceń jest komunikat błędu:
Uncaught typeError : Assigment to constant variable.
W większości przypadków jest używane słowo let.

b)
Jeśli chodzi nazwy zmiennych i zakres nadawania im nazwa obowiązują pewne konwencje:
-Nazwa zmiennej rozpoczyna się od małę litery i powinna być opisowa.Jeśli zmienna dotyczy przechowywanie wieku to nie nadajemy nazwy x a wiek.sprawia to,że powracając do kodu skryptu możesz zrozumeic jego sposób działania po porstu odczytując kod źródłowy.
-Nazwa zmiennej nie ma prawa zawierać spacji ale jest wyjątek dla znaku podkreślenia.Przy użyciu spacji Java Script nie uzna takiej nazwy za pojedyńczą zmienną.
stosowany jest styl camelCase co inaczej oznacza ,że jeśli anzwa zmiennej będzie skłądała się z większej ilości słów piersze słowo będzie się zaczynać od małej litery ale każde następne od wielkiej np.:
wiek.Klienta.Sklepu
Niezależnie od tego jaki styl konwencji przyjmniemy dla nazw zmiennych najważniejsze jest  jej spójne zastosowanie.Jeśli anzwy wszystkich zmiennych bęą miały podobny format to kod staje się bardziej przejrzysty i czytelny co ułatwi później wprowadzanie wnim modyfikacji.

c)
zmienna może mieć dowolną wartość.Zaczniemy od tych najłatwieszych przedstawiających proste typy danych.
Rozumiejąc czym są zmienne  dlaczego potzrebne sa w kodzie możemy zapoznać się z różnymi typami wartości które mogą być przechowywane w zmiennych.Zmiennna ma przypisawaną wartość która może być różnych typów.
java script jest językiem stosującym luźne typowanie tzn.,że typ jest ustalany na podstawie wartości.typ nie musi byc wyraźnie podany co oznacza,że jeśli przypiszesz danej zmiennej wartość 5 Js automatycznie zdefiniuje ją jako zmienną typu liczbowego.
Rozróżniamy proste typy danych i inne bardziej zaawansowane.Tutaj skupimy się na typach prostych mających względnie prostą strukturę danych.Jest to struktura zawierająca wartość i typ.Java Script ma siedem prostych typów danych(String, Number, BigInt, BooLean, Symbol, Undefined, Null).
String:
Jest to typ danych używany do przechowywania wartoścui tekstowej.Taka wartośc jest po prostu sekwencją znaków.Zmienną tekstową mozemy zdefiniować na różne sposoby:
- za pomocą cudzysłowu;
- za pomocą apostrofów;
- za pomocą odwróconego apostrofu(czyli specjalnego szablonu ciągu tekstowego w którym zmienne mogą być używane bezpośrednio)
Przykłąd zadeklarowania zmiennych za pomocą znaków cudzysłowu i apostrofów:
let singleString = 'Witaj!';
let doubleString = "Jak się masz?";
!!!Wazne(preferowany styl przypisawania wartości zmienne może wybrać  ale tylko w wypadku jeśli pracujesz z kodem w którym ten styl nie został już wybrany.Musimy pamiętac o zachowaniu spójności).
Podstawowa rónica przy znakach cydzysłowu i apostrofu jest taka,że  w wypadku wartości ujętej w cydzysłów mogą tam byc zawrte znaki apostrofu  i na odwrót.
W przypadku deklarowania ciągu tekstowego przy pomocy apostrofów ciąg ten ulega zakończeniu w momencie napotakania drugiego apostrofu nawet jeśli ten apostrof znajduje się w środku słowa.Poniższy przykłąd doskonale taką sytuację przedstawia:
letfunActivity = 'Poznajemy język JavaScript, panie o'Hara';
Ciagiem tekstowym ejst tutaj Poznajemy język JavaScript, panie o (reszta znaków nie sotanie zinterpretowana przez JavaScript).Jeśli jednak zadeklarujemy ten ciąg z użyciem cudzysłowu wówczas zakończenie nie wystapi wmiejscy wystapienia apostrofu ale na drugim znaku cudzysłowu.Dlatego też alternatywna postać poprzedniego polecenia sprawdza się doskonale:
let funActivity = "Poznajemy język JavaScript, panie O'Hara";
Odnoszącsię do tej reguły zagnieżdżanie znakó cudzysłow nie zadziałą w poniższym przykłądzie:
let Question = "Czy chcesz poznać język JavaScript? "Tak!"";
bazując na tym przykłądzie kompilator również nie rozpozna użycia cudzysłowu wróżnych kontekstach i spowoduje wygenerowanie komuniaktu błędu.

jeśli do zadeklarowania ciągu tekstowego używane są znaki odwrotnego apostrofu można się odwołąć do zmienne i wtedy będzie użyta jej wartość.W poniższym fragmencie kodu zostało takie rozwiązanie zastosowane:
let language = "JavaScript";
let message = `Poznajemy język $(Language)`;
console.log (message);
