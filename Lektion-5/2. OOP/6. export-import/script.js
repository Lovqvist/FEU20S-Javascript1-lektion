import Person from './models/User.js';
import UserService from './services/UserService.js'
import { validate as va, sendMessage } from './functions/Functions.js'




const user = new Person('joAkIm', 'wahlStröM', 'joakim@mail.com', 'BytMig123')

// console.log(user)

// UserService.signUp(user);
// UserService.signIn(user.email, user.password);

// if(va(user))
//   UserService.signUp(user)

va(user, u => {
  UserService.signUp(u)
})


// va();
sendMessage('123456789', data => {
  console.log(data);
})