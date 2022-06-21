//function vlidation consist: 8- 10 characters,  upperLetters, lowLetters, symbols:@#$%&  not include spaces

let testPassword = 'Qwerty12rtrt';
const validatePassword = (password) => {
  if (password.length < 8 || password.length > 10) return false;
  let numCount = 0;
  let lettUpCount = 0;
  let lettLowCount = 0;
  let symbCount = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === ' ') return false;
    if (typeof (+password[i] === 'number')) {
      numCount++;
    }
    //https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
    if (password[i].toLowerCase() === password[i]) {
      lettLowCount++;
    }
    if (password[i].toUpperCase() === password[i]) {
      lettUpCount++;
    }
    if (
      password[i] === '@' ||
      password[i] === '#' ||
      password[i] === '$' ||
      password[i] === '%' ||
      password[i] === '&'
    ) {
      symbCount++;
    }
  }
  if (
    numCount === 0 ||
    lettLowCount === 0 ||
    lettUpCount === 0 ||
    symbCount === 0
  ) {
    return false;
  } else {
    return true;
  }
};
const res = validatePassword(testPassword);
console.log(res);
