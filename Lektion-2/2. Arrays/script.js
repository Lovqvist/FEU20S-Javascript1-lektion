// ARRAYS - en lista med ett eller flera värden

// names = [];         // GÖR INTE
// var names = [];     // UNDVIK
// let names = [];     // GÖR SÅHÄR
// const names = [];   // GÖR SÅHÄR


// Det här är INTE best practice
const multiArray = ['12', 12, true, {firstName: 'Joakim'}, [1,2,3,4], null];

// Det är är bättre
const array = [0, 1, 2, 3, 4];

// innehåller bara datatypen object, också ett bra sätt!
const users = [
  {firstName: 'Joakim', lastName: 'Wahlström', age: 34},
  {firstName: 'Jeanette', lastName: 'Wahlström', age: 33},
  {firstName: 'Jack', lastName: 'Wahlström', age: 5},
]


// const names = ['Joakim', 'Jeanette', 'Jack'];
let names = ['Joakim', 'Jeanette', 'Jack'];

// hämta information från en array
// console.log(names); // hela arrayen
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// .unshift() - Lägg till i början av en array
names.unshift('Colin');
// console.log('Med unshift: ' + names);

// .shift() - Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// .push() - Lägg till i slutet av en array
names.push('Colin');
// console.log('Med push: ' + names);

// .pop() - Ta bort i slutet av en array
names.pop();
// console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt Namn';
// console.log('Ändrat: ' + names);

// Hämta ut vilken indexplats någonting har i en array
// console.log(names.indexOf('Nytt Namn'));

// delete - tar bort värdet på en specifik plats i en array, men inte platsen
delete names[1];
delete names[names.indexOf('Nytt Namn')];
// console.log(names);

// .splice() - tar bort och/eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1
// console.log(names);
names.splice(1, 0, 'Colin', 'Jeanette'); //tar bort 0 och lägger till Colin och Jeanette
// console.log(names);
names.splice(1, 2, 'Hans'); //tar bort 2 från index plats 1 och lägger till Hans
// console.log(names);

// Hur lång är en array
// console.log(names.length);
// hur långt är någonting inne i en array
// console.log(names[0].length); // fungerar bara om det vi försöker kolla på har en längd att få ut

// Lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Jeanette']));
names = names.concat(['Colin', 'Jeanette']);
console.log(names);

// sortera en array i bokstavsordning
// names.sort();
// console.log(names);

// Vänd på arrayen så först blir sist osv.
// names.reverse();
// console.log(names);

// sortera i bokstavsordning baklänges
// names.sort().reverse();
// console.log(names);