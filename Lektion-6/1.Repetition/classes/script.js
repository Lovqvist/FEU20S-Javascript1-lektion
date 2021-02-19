
class User {
  constructor(firstName, lastName = 'Doe', loggedIn = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loggedIn = loggedIn;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(name) {
    const names = name.trim().split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  static countUsers() {
    let counter = 0;
    users.forEach(user => counter ++)
    if(counter > 0) {
      return 'there are ' + counter + ' users' 
    } else {
      return 'there are no users'
    }

  }
  static clearUsers() {
    users = []
  }

}

const createUser = (firstName, lastName) => {
  if(firstName && lastName)
    return new User(firstName, lastName);
  else
    console.log('du måste ha ett namn')
}

const user1 = createUser('Joakim', 'Wahlström');
const user2 = createUser('Hans', 'ML');
const user3 = createUser('Jeanette', 'W');


let users = [user1, user2, user3];
// const user2 = createUser('Joakim');

// const user2 = new User();

// console.log(user1);
// // console.log(user2);
// console.log(user1.fullName)
// user1.fullName = 'Hans Mattin-Lassei';
// console.log(user1)

// console.log(User.countUsers());
// User.clearUsers();
// console.log(User.countUsers());


class Admin extends User {
  // constructor(name1, name2, loggedIn) {      // Om vi inte lägger till en constructor så kommer den att använda
  //   super(name1, name2, loggedIn)            // constructorn från superklassen automatiskt
  // } 

  removeUser(user) {
    users = users.filter(u => u.lastName !== user.lastName)
  }

}

const admin = new Admin('Joakim', 'Wahlström', );

// console.log(admin)

// admin.removeUser(user2);
// console.log(users)
// console.log(User.countUsers());





class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  gearbox = 0;

  gearUp() {
    this.gearbox ++
    console.log('shifted to ' + this.gearbox + ' gear.')
    return this;
  }
  gearDown() {
    this.gearbox --
    console.log('shifted to ' + this.gearbox + ' gear.')
    return this;
  }

}

const fiat = new Car('punto', 'pink');

fiat.gearUp().gearUp().gearDown().gearUp().gearUp().gearUp()