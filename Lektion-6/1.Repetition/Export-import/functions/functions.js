export const validate = (user, cb) => {
  if(user.firstName.trim() !== '' && user.lastName.trim() !== '' && user.email.trim() !== '' && user.password.trim().length > 3) {
    console.log('validation ok');
    cb();
  } else {
    console.log('validation error');
  }
}

export const hasNumber = string => {
  return /\d/.test(string)
}