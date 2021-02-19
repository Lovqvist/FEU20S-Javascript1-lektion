// OBJECT

/* 
    object innehåller ett eller flera värden

    används för klasser, objekt och json (JavaScript Object Notation)
    skrivs med Key:Value pairs
    alla värden separeras av ett ,
*/

// person = {};
// var person = {};
// let person = {};
// const person = {};

// console.log(typeof person);

// JS Object
// const person = {
//   firstName: 'Joakim',
//   lastName: 'Wahlström'
// }

// JSON Object
// const person = {
//   "firstName": "Joakim",
//   "lastName": "Wahlström"
// }
// console.log(person);

// konvertera till JSON
// let json = JSON.stringify(person);
// console.log(json)
// console.log(typeof json)

// konvertera från JSON till JS
// const jsObjekt = JSON.parse(json);
// console.log(jsObjekt);
// console.log(typeof jsObjekt);

const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 34,
  address: {
    street: 'en gata',
    nr: 12,
    zipCode: '73452',
    city: 'Västerås'
  },
  phoneNumbers: [
    '076-0254425',
    '070-2456973'
  ],
  isActive: false,
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  login: function() {
    this.isActive = true
  }
};

let key = 'age';

// console.log(user);
// console.log(user.firstName);
// console.log(user.address.city);

// console.log(user['lastName']);
// console.log(user[key]);

// console.log(user.fullName());

// let firstName = user.firstName;
// console.log(firstName);

// console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`);


// user.firstName = 'Jeanette';

// console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`);

// user = 3; det här går inte när det är en const

// lägga till
user.email = 'joakim.wahlstrom@mail.com';

// console.log(user)


// Destructure

const { firstName, lastName, address: { city } } = user;
console.log(firstName, lastName);
console.log(city);

const { firstName: fName, lastName: lName } = user;
console.log(fName);
console.log(lName);


user.fullName();
console.log(user.isActive);
user.login();
console.log(user.isActive);

console.log(user.phoneNumbers[1]),
user.age ++
console.log(user.age)