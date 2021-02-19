// ARRAYS

// array = []  // GÖR INTE SÅHÄR
// var array = [] //Global variabel - UNDVIK
// let array = []  // Lokal variabel - Gör såhär
// const array = []  // Lokal variabel som är konstant - GÖR SÅHÄR

// const array = [];

// const array = ['joakim', 34, null, {}]  // MULTI ARRAY - UNDVIK

// const array = ['Joakim', 'Jeanette', 'Hans']
// const array = [1, 2, 3, 4, 5]

const array = [
  { id: 1, firstName: 'Joakim', lastName: 'Wahlström', age: 34 },
  { id: 2, firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36 }
]

// console.log(array);

// LÄGGA TILL I EN ARRAY

// Lägga till i början
array.unshift({ id: 3, firstName: 'Haitem', lastName: 'Simrani', age: 35 })
// console.log(array);

// lägga till i slutet

array.push({ id: 4, firstName: 'ToMmy', lastName: 'Mattin-Lassei', age: 38 })
// console.log(array);

// Lägg till vart som helst
array.splice(2, 0, { id: 5, firstName: 'Jeanette', lastName: 'Wankowicz', age: 33 })
console.log(array);


// TA BORT FRÅN EN ARRAY

// ta bort från slutet i en array
// array.pop();
// console.log(array);

// ta bort i början av en array
// array.shift()
// console.log(array);

// ta bort värdet från en indexplats
// delete array[1];
// console.log(array);

// ta bort vart som helst
// array.splice(2, 1);
// console.log(array);


const names = array.map(user => {
  return user.firstName;
});

// console.log(names);


// sortera i bokstavs/siffer-ordning
// names.sort()
// console.log(names);

// Ändra ordningen så att först hamnar sist osv.
// names.reverse();
// console.log(names);

// chainar ihop metoder
names.sort().reverse();
console.log(names);

// Hämta en indexplats av ett värde
let index = names.indexOf('Hans');
// console.log(index);

// När vi vill ha en indexplats om arrayen innehåller object
let userIndex = array.findIndex(user => user.firstName.toLowerCase() === 'tommy');

// returnerar hela objektet
let user = array.find(user => user.id === 2);

// console.log(userIndex);

// delete names[index];
// names.splice(index, 1);
// names.splice(names.indexOf('Hans'), 1);
// console.log(names);



// array.map() - returnerar en array med utvalda värden från en befinitlig array

// filtrerar en array baserat på ett värde
const idArray = array.filter(user => {
  // return user.id > 2
  return user.id !== 5
})
// console.log(idArray);

array.forEach(user => {
  const { firstName, lastName } = user
  // console.log(`Name: ${firstName} ${lastName}`)
  document.body.innerHTML += `
  <p>Name: ${firstName} ${lastName}</p>
  `
})


// LOOPAR

// For
for(let i = 0; i < names.length; i++) {
  let p = document.createElement('p')
  p.innerText = names[i];

  document.body.appendChild(p);
  // console.log(names[i]);
}

// For of
for(user of array) {
  // console.log(user.lastName)
}

// While

let i = 0;

while(i < 0) {
  console.log(names[i]);
  i++ //viktigt! annars blir det en oändlig loop
}
console.log(i);


// Do while - kommer alltid att köras minst en gång
do {
  console.log(i);
  i++; //viktigt! annars blir det en oändlig loop
} while(i < 0);

console.log(i);