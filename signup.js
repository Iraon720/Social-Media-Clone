const User_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/users';
const EXT = '.json';
//Sign Up
const emailNew = document.getElementById('Email-signup');
const passwordNew = document.getElementById('password-signup');
const usernameNew = document.getElementById('username-signup');
const repasswordNew = document.getElementById('re-enter');

//UUID
// function createUUID() {
//   return (
//     Math.random().toString(16).substring(3, 12) +
//     Math.random().toString(16).substring(3, 12)
//   );
// }
function signupData() {
  let newUserObj = {
    email: emailNew.value,
    password: passwordNew.value,
    username: usernameNew.value,
  };
  return newUserObj;
}
//Adding new users
function createNewUser(nuUser) {
  fetch(`${User_URL}${EXT}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...nuUser }),
  })
    .then((resp) => {
      resp.json();
      console.log(' first then ');
    })
    .then((data) => console.log('data', data));
}
//resetting form inputs
function resetSignup() {
  emailNew.value = '';
  passwordNew.value = '';
  repasswordNew.value = '';
  usernameNew.value = '';
}

//functionality to button
const signupBtn = document.getElementsByClassName('signup');

// signupBtn.addEventListener('click', (handleSignup) => {
//   let newUser = signupData();
//   createNewUser(newUser);
//   resetSignup();
//   console.log('new user created');
//   window.location.href = 'dashboard.html';
// });
// signupBtn.addEventListener('click', handleSignup());
function handleSignup() {
  let newUser = signupData();
  createNewUser(newUser);
  resetSignup();
  console.log('new user created');
  // location.replace('/dashboard.html');
}
