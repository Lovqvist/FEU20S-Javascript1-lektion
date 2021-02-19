/* 
  FUNCTIONS

  Funktioner är ett stycke kod som man kan återanvända för att slippa skriva samma kod flera gånger

  kalla på en function -  funktionensNamn()
  man skriver funktionens namn följt av parenteser

  Deklarera en funktion:
  --------------------------


  namnetPåFunc();

  function namnetPåFunc() {
    här skriver vi den kod vi vill ska köras när vi kallar på funktionen.
    console.log('hej på dig du');
  }

  const greet = function() {
    console.log('hej hej')
  }
  greet();

  Skillnaden på dessa har med hoisting att göra.
  en vanlig funktion hissas upp till toppen och vi kan därför köra funktionen innan den blir deklarerad
  det här går INTE med const varianten

  köra en function
  namnetPåFunc();
  greet();

*/
// hej();

// function hej() {
//   console.log('hej')
// }

// const greet = function() {
//   // console.log('hur är läget?')
//   return 'hur är läget'           // ALLA funktioner ger oss en return
// }                                // Om vi inte hanterar den så är den undefined

// hej();
// console.log(greet());
// greet();


// Funtionker med parametrar

let firstName = 'Joakim'

// const greet = function(name) {
  // Vi vill så mycket det går använda variabler från våra params i funktionen, inte utifrån

  // console.log(`Hej ${firstName} hur är läget?`);
//   console.log(`Hej ${name} hur är läget?`);
// }

// greet('Joakim');
// greet('Hans');

const fullName = function(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`
  return fullName
}

// let myName = fullName('Joakim', 'Wahlström');
// console.log(myName)
// console.log(fullName('Hans', 'Mattin-Lassei'))


const func2 = function(firstName = 'John', lastName = 'Doe') {
  let _fullName = firstName + ' ' + lastName
  console.log(_fullName.trim())
}

// func2();
// func2('Joakim');
// func2('Joakim', 'Wahlström');

const calc = function(num1 = 0, num2 = 0) {
  return num1 * num2
}

let sum = calc(5432, 21230);
// console.log(sum);

// ARROW FUNCTIONS

// Arrow functions kom till för att lösa problem med ordet this

// const greet = (name) => {
//   return `Hej ${name}`
// }

// om jag har precis 1 parameter behövs inte parenteserna
// const greet = name => {
//   return `Hej ${name}`
// }

// Om jag bara gör 1 sak i min funktion så kan jag skriva den på 1 rad, då sker return automatiskt
const greet = name => `Hej ${name}`


// console.log(greet('Joakim'));


// Callback functions

const func = (callback) => {
  // Jag räknar ut ett värde / skapar något / eller vad som helst
  let value = 'test';
  callback(value);
}

// func(vadSom => { //här har jag automatiskt tillgång till parametern som skickas från den första functionen
//   // Här kan jag välja vad jag vill göra med den parametern
//   console.log(vadSom);
//   console.log(vadSom);
//   console.log(vadSom);
// })

// Exempel på en callback funktion
let names = ['Joakim', 'Hans', 'Jeanette', 'Jack']

// names.forEach(name => {
//   console.log(name)
// })


/* 
  METODER
  -----------------------------
  metoder är funktioner som är inbyggda på ett objekt

*/

// Exempel på metoder

// array metod
// names.forEach(name => {
//   console.log(name)
// })

// string metod
// let myName = names[0];
// console.log(myName);

// let upper = myName.toUpperCase();
// console.log(upper);

let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    console.log(this);
    return this.firstName + ' ' + this.lastName
  }
  // fullName: () => {
  //   console.log(this)
  //   return this.firstName + ' ' + this.lastName
  // }
}
// console.log(this);
console.log(user.fullName());
// user.fullName();