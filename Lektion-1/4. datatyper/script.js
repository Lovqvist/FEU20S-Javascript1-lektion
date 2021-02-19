/* 
    Javascript Datatyper
    ---------------------------------------------
    String      =   Text
    Number      =   Tal, decimaltal
    Boolean     =   Sant/falskt  true / false
    null        =   null är tomt, inget alls (manuellt)
    undefined   =   har ej blivit definierat än (automatiskt)
    Object      =   ett object/klass innehåller ett eller flera värden
    Array       =   en lista med värden, Arrayer är object

*/

/* 
    Deklarera variabler
    ---------------------------------------------

    name = 'Joakim' (ANVÄND INTE!)
    var name = 'Joakim'
    let name = 'Joakim'
    const name = 'Joakim'

    var   = global variabel - accessbar överallt i koden (gör inte såhär)
    let   = lokal variabel - accessbar bara inom det angivna området (gör såhär)
    const = lokal konstant variabel, kan inte skrivas över (undantag finns)

    C# exempel:
      string name = "Joakim";
      int age = 34;
    JS exempel:
      let name = 'Joakim;
      let age = 34;

    variabel = nått som vi lagrar information i
      camelCase   =   javascript, Java, C, c++
      Pascal      =   C#, Pascal
      _private    =   en varibel som "bara" lever inom en viss del.

      ex. firstName, lastName, email, city

      _firstName = 'Joakim'
      firstName = _firstName

*/


/* 
    STRINGS:
      let name = "Joakim"   - Använd inte
      let name = 'Joakim'   - Denna ska du använda
      let name = `Joakim`   - Template String - Använd denna när du ska använda placeholders ( shift + ´ , tryck mellanslag)

      avsluta varje rad med ett ; (det behövs inte, men det är bra att göra.)
*/

let doNotUse = "Joakim";
let useThis = 'Joakim';
let number = 34;

// console.log(useThis, number);

let withoutPlaceholders = 'Mitt namn är ' + useThis + ' och jag är ' + number + ' år gammal.'

// Template string
let withPlaceholders = `Mitt namn är ${useThis} och jag är ${number} år gammal.`;

// console.log(withPlaceholders);

var varName = 'var Joakim';
let letName = 'let Joakim';
const constName = 'const Joakim';

// console.log(varName);
// console.log(letName);
// console.log(constName);

varName = 'var Jeanette'
letName = 'let Jeanette'
// constName = 'const Jeanette'

// console.log(varName);
// console.log(letName);

let myName = 'Joakim Wahlström';

// console.log(myName.length);
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName.indexOf('a'));

// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.toLowerCase().trim());

// console.log(myName.split(' '));

let names = myName.split(' ');
let firstName = names[0];
let lastName = names[1];
// console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}`);

let fullName = firstName + ' ' + lastName.toUpperCase();
// console.log(fullName);

let isActive = false;
// console.log(isActive);

firstName = firstName.concat(' är bäst');
firstName = firstName.replace('bäst', 'kung')
// console.log(firstName);



/* 
    NUMBERS
    -------------------------------------

    math operators:

    +   lagg till
    -   ta bort
'   *   gångra
'   **  upphöjt i
    /   dela
    %   division remainer
    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  ha kvar det gamla och lägga till
    -=  ha kvar det gamla och ta bort från
'   *=  ha kvar det gamla och gångra och lägg till
    /=  ha kvar det gamla och dela och lägg till
    %=  ha kvar det gamla och division remainder

*/

let nr1 = 10;
let nr2 = 2.5;

// console.log(nr1, nr2);
// console.log(nr1 + nr2);
// console.log(nr1 - nr2);
nr1 = nr1 + 1
nr1 += 1
nr1 ++

nr1 = nr1 - 1
nr1 -= 1
nr1 --

// console.log(nr1);

// gånger
// console.log(nr1 *  nr2);
// upphöjt i
// console.log(nr1 ** nr2);
// vad blir kvar, division remainder
// console.log(nr1 % 2);

let num = 1000000;

// console.log(num.toFixed(2));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(Math.random()*100));

let region = 'sv-SE'

// console.log(num.toLocaleString(region));

let datatype;

// let datatype1, datatype2, datatype3;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = null; // DET HÄR ÄR EN BUGG I JAVASCRIPT
console.log(typeof datatype);
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);