//  Users = [
//   {
//     username: 'iraon720',
//     password: 'creatine89!',
//   },
//   {
//     username: 'Pixel_Gril12',
//     password: 'Picarelife14!',
//   },
//   {
//     username: 'Expresslife2',
//     password: 'Keepcalm23!',
//   },
// ];
const User_URL = 'https://twitter-clone-44098-default-rtdb.firebaseio.com/';
const EXT = '.json';

//Login Mobile
const username = document.getElementById('Email');
const password = document.getElementById('password');
const loginBtnD = document.getElementById('login-btnD');

username.addEventListener('keyup', (e) => {
  console.log(username.value);
});

password.addEventListener('keyup', (e) => {
  console.log(password.value);
});

//Validation
function browserValidation() {
  if (!password.value || !password.value.length > 8) {
    return 'Invalid password';
  }
  return null;
}
loginBtnD.addEventListener('click', handleLogin);

function handleLogin(e) {
  e.preventDefault();
  e.stopPropagation();

  window.location.href = 'dashboard.html';
}

//Login Desktop
const usernameDsk = document.getElementById('Email-desktop');
const passwordDsk = document.getElementById('password-desktop');

usernameDsk.addEventListener('keyup', (e) => {
  console.log(usernameDsk.value);
});

passwordDsk.addEventListener('keyup', (e) => {
  console.log(passwordDsk.value);
});

//Validation
function browserValidation() {
  if (!passwordDsk.value || !passwordDsk.value.length > 8) {
    return 'Invalid password';
  }
  return null;
}
loginBtnD.addEventListener('click', handleLogin);

function handleLogin(e) {
  e.preventDefault();
  e.stopPropagation();

  window.location.href = 'dashboard.html';
}

//Sign Up
// const emailNew = document.getElementById('Email-signup');
// const passwordNew = document.getElementById('password-signup');
// const usernameNew = document.getElementById('username-signup');
//UUID
function createUUID() {
  return(
    Math.random().toString(16).substring(3,12) +
    Math.random().toString(16).substring(3,12)
  );
}
function signupData(){
  let newUserObj = {
    email: emailNew.value,
    password: passwordNew.value,
    repassword: repasswordNew.value
    username: usernameNew.value,
    user: createUUID(),
    
  }
  return newUserObj;
}
//Adding new users
function createNewUser(usernameNew, emailNew, passwordNew) {
  fetch('${User_URL}${EXT}', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...emailNew }),
    body: JSON.stringify({ ...passwordNew }),
    body: JSON.stringify({ ...usernameNew }),
  })
    .then((resp) => {
      resp.json();
      console.log(' first then ');
    })
    .then((data) => console.log('data', data));
  }

  function resetSignup(){
    emailNew.value = '';
    passwordNew.value = '';
    repasswordNew.value = '';
    usernameNew.value = '';
  }

  //functionality to button
  const signupBtn = document.getElementsByClassName('signup')

signupBtn.addEventListener('click', handleSignup);
function handleSignup() {
  