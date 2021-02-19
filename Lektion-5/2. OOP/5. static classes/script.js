// Det "vanliga" sättet.. kräver en instansiering av objektet

// class UserService {
//   constructor(uri) {
//     this.baseUri = uri
//   }

//   signUp(user) {
//     console.log('Registrating the user.')
//     console.log(user);
//   }

//   signIn(email, password) {
//     console.log(`Signing in the user with ${email} and ${password}`)
//   }

// }

// const userService = new UserService()
// userService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
// userService.signIn('joakim@mail.com', 'BytMig123')

// const userSignUp = (user) => {
//   console.log('Registrating the user.')
//   console.log(user);
// }

// const userSignIn = (email, password) => {
//   console.log(`Signing in the user with ${email} and ${password}`)
// }

// const adminSignup = (user) => {
//   console.log('Registrating a new admin user.')
//   console.log(user);
// }

// const adminSignIn = (email, password) => {
//   console.log(`Signing in the admin with ${email} and ${password}`)
// }

// userSignUp({firstName: 'Joakim', lastName: 'Wahlström'})
// userSignIn('joakim@mail.com', 'BytMig123')


// Statisk klass - kräver inte att man gör en instans av objektet

class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('Registrating the user.')
    console.log(user);
  }

  static signIn(email, password) {
    console.log(`Signing in the user with ${email} and ${password}`)
  }
}

UserService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
UserService.signIn('joakim@mail.com', 'BytMig123')

class AdminService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('Registrating a new admin user.')
    console.log(user);
  }

  static signIn(email, password) {
    console.log(`Signing in the admin with ${email} and ${password}`)
  }
}

AdminService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
AdminService.signIn('joakim@mail.com', 'BytMig123')