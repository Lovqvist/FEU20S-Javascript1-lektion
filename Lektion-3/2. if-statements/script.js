// BOOLEANS - TRUE / FALSE

let email = 'joakim@mail.com';
// console.log(email.includes('@'));
// console.log(email.includes('2'));

let names = ['Joakim', 'Jeanette'];
// console.log(names.includes('Joakim'));
// console.log(names.includes('Hans'));
// console.log(names.length > 2);

let number = 13;
let string = '13';

// Kollar om någontiong är lika med

// console.log(number == 13);
// console.log(number == 20);


// Kollar om det INTE är lika med

// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 13);
// större eller lika med
// console.log(number >= 13);

// mindre än
// console.log(number < 13);
// mindre än eller lika med
// console.log(number <= 13);

// två = tecken - jämför bara värdet
// console.log(string == number);
// tre = tecken - jämför värdet och datatyp
// console.log(string === number);

// jämför bara värdet
// console.log(string != number);
// jämför värdet och datatyp
// console.log(string !== number);


// IF-statements

/* 
  en if sats är till för att kolla om ett påstående är sant eller falskt.
  Om ett påstående är sant. Då vill man göra en sak. Annars vill man göra någonting annat


  good practice
  ---------------------

  if(true){}

  if(true){}
  else{}

  if(false){}
  else if(true){}
  else{}


  bad practice
  --------------------

  if
  else if
  else if         // Gränsfall.. Skulle kunna vara ok
  else

  if
  else if
  else if
  else if
  else if         // Gör inte såhär.. kolla på en switch istället
  else if
  else if
  else if
  else



  varianter
  ------------------

  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else if(compare statements) {   /hit kommer vi bara om den övre är false
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else {                          /hit kommer vi om alla över är false
    false-actions
    more-actions
  }



  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else {                          /hit kommer vi om alla över är false
    false-actions
    more-actions
  }



  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }                             //Går bara vidare om det är false



  if(compare statement)
    true-actions                // Om jag bara gör en sak
  else if (compare statement)
    true-actions
  else
    false-actions


  if(compare statement)
    true-actions                // Om jag bara gör en sak
  else
    false-actions


  if(compare statement)
    true-actions                // Om jag bara gör en sak



  (compare statement) ? true-actions : false-actions

  (compare statement)
  ? true-actions
  : false-action


  compare statements
  ---------------------------------------------------------
  ==    lika med
  <     mindre än
  >     större än
  !=    inte lika med
  <=    mindre än eller lika med
  >=    större än eller lika med

  ===   lika med och samma datatyp
  !==   inte lika med och samma datatyp

  &&    och
  ||    eller
  !     not

*/


// if(1 == 2) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// if(1 === '1')
//   console.log(true)
// else
//   console.log(false)

// if(1 === '1' && 1 < 2)   // här måste ALLA vara true
//   console.log('sant')
// else
//   console.log('falskt')

// if(1 === '1' || 1 < 2)      // här behöver en av dom vara true
//   console.log('sant');
// else
//   console.log('falskt')


// if(1 === '1' && 1 > 0 || 1 < 2)     //Det går att blanda hur vi vill
//   console.log('sant');
// else
//   console.log('falskt')

let st = '15';
let nr = 13;

// if(!(st > nr && typeof st === typeof nr)) {
//   console.log('det är falskt dom har inte samma datatyp')
 
// }
// else {
//   console.log('sant st är större än nr')
// }

let loggedIn = false

// ! vänder på vårat compare statement
// if(loggedIn) {
//   console.log('den här koden körs om loggedIn är true')
// } else {
//   console.log('vi är inte inloggade, göm alla skyddade länkar')
//   // länkar.hide();
// }

// if(!loggedIn) {
//   console.log('den här koden körs om loggedIn är false')
//   // länkar.hide();
// }

let products = [
  {id: 1, name: 'acer 43 ultrawide', price: 7000},
  {id: 2, name: 'samsung S21', price: 28000},
  {id: 3, name: 'risnudlar', price: 10},
]

// products = products.map(product => {

//   if(product.id === 2 || product.id === 1) {
//     product.price = 12000
//     console.log('changed ' + product.name + ' price');
//   }
//   else if(product.id === 3) {
//     product.price = 20
//     console.log('changed ' + product.name + ' price');
//   }

//   return product
// })

// console.log(products);

// let employees = [
//   { firstName: 'Joakim', lastName: 'Wahlström', age: 34},
//   { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36},
//   { firstName: 'Tommy', lastName: 'Mattin-Lassei', age: 38},
//   { firstName: 'Haitem', lastName: 'Simrani', age: 35}
// ]

// let letters = []

// employees.forEach(person => {

//   if(letters.length < 3) {
//     let name = person.firstName.slice(0, 1)
//     letters.push(name)
//   }

//   if(person.age < 36) {
//     console.log(person.firstName + ' är bäst.. Alla andra är rätt gamla!')
//   }

// })

// console.log(letters)

let color = 'pink';

if(color === 'red') {
  console.log('färgen är röd')
}
else if(color === 'blue') {
  console.log('färgen är blå')
}
else if(color === 'orange') {
  console.log('färgen är orange')
}
else if(color === 'white') {
  console.log('färgen är vit')
}
else if(color === 'black') {
  console.log('färgen är svart')
}
else {
  console.log('färgen du har angett finns inte i databasen')
}
