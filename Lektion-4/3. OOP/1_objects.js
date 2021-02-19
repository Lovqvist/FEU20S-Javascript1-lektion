// THIS
// console.log(this);
// const thisObj = {
//   name: 'Name',
//   logThis() {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   }
// }

// thisObj.logThis(); // Den här tittar på det som ligger direkt till vänster om metoden
// thisObj.arrow();


const obj1 = {
  id: '1',
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'Joakim@mail.com',
  loggedIn: false,
  login() {
    this.loggedIn = true
    console.log(`${this.firstName} has logged in`)
  },
  logout() {
    this.loggedIn = false
    console.log(`${this.firstName} has logged out`)
  },
}

// obj1.login()
// console.log(obj1.loggedIn)
// obj1.logout()
// console.log(obj1.loggedIn)

const obj2 = {
  id: '2',
  firstName: 'Hans',
  lastName: 'Mattin-Lassei',
  email: 'Hans@mail.com',
  loggedIn: false,
  login() {
    this.loggedIn = true
    console.log(`${this.firstName} has logged in`)
  },
  logout() {
    this.loggedIn = false
    console.log(`${this.firstName} has logged out`)
  },
}
// obj2.login()
// console.log(obj2)
// obj2.logout()
// console.log(obj2.loggedIn)


/* 
  CLASS
  används när vi vill skapa fler objekt med samma mall
  klasser deklareras med Stor bokstav
*/

class JsClass {}

class Class1 {

  // Om vi gör såghär så skulle alla nya users heta samma sak
  // Det vi vill titta på är en constructor

  firstName = 'Joakim';
  lastName = 'Wahlström';
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let cls1 = new Class1();
let cls2 = new Class1();
console.log(cls1.fullName());
console.log(cls2.fullName());