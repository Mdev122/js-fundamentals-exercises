// Import modułu do pobierania danych od użytkownika w node
const readlineSync = require('readline-sync');

// Etap 1: pobranie wartości przyprostokątnych od użytkownika
let przyprostokątna1 = readlineSync.question("Podaj długość przyprostokątnej a: ");
let przyprostokątna2 = readlineSync.question("Podaj długość przyprostokątnej b: ");

// Etap 2: konwersja na liczby (readline-sync, podobnie jak prompt, zwraca tekst!)
przyprostokątna1 = Number(przyprostokątna1);
przyprostokątna2 = Number(przyprostokątna2);

// Etap 3: obliczenie przeciwprostokątnej ze wzoru Pitagorasa (a² + b² = c²  →  c = √(a² + b²))
let przeciwprostokątna = Math.sqrt(przyprostokątna1 ** 2 + przyprostokątna2 ** 2);

// Etap 4: wyświetlenie wyniku
console.log(`Przeciwprostokątna wynosi: ${przeciwprostokątna}`);