const User_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/users';
const EXT = '.json';
const user = {
  email: 'iraon720@gmail.com',
  username: 'iraon720',
  password: 'Creatine89!',
};
const retrieveUser = (param) => fetch(`${User_URL}/${param.username}${EXT}`);

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
//Try & Catch
loginBtnD.addEventListener('click', handleLogin);
const expressUser = {
  username: username.value,
  password: password.value,
};
async function handleLogin(e) {
  e.preventDefault();
  e.stopPropagation();

  try {
    const validateError = browserValidation();
    if (validateError) {
      throw Error(validateError);
    }

    const userExists = await retrieveUser(expressUser);
    if (!userExists.ok) {
      throw Error('Error retrieving user');
    }
    const databaseExistence = await userExists.json();
    if (!databaseExistence) {
      throw Error('User does not exist');
    }
    if (databaseExistence) {
      localStorage.setItem('userInfo', JSON.stringify(databaseExistence));
      location.replace('/dashboard.html');
    }
  } catch (error) {
    alert(error);
  }
}

/////////////////////does not work properly////////
// const config = {
//   email: 'iraon720@gmail.com',
//   username: 'iraon720',
//   password: 'Creatine89!',
// };
// firebase.initializeApp(config);

// // Get references to the form elements
// const emailInput = document.getElementById('Email');
// const passwordInput = document.getElementById('password');
// const submitButton = document.getElementById('login-btnD');

// // Add a click event listener to the submit button
// submitButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   // Get the email and password values from the form
//   var email = emailInput.value;
//   var password = passwordInput.value;

//   // Sign in the user with email and password
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(function (user) {
//       // User successfully signed in
//       console.log('Successful sign in with user:', user);

//       // Redirect the user to the home page or show a success message
//       window.location.href = 'dashboard.html';
//     })
//     .catch(function (error) {
//       // An error occurred while signing in the user
//       console.error('Error signing in user:', error);

//       // Show an error message
//       alert(
//         'The email and password you entered do not match our records. Please try again.'
//       );
//     });
// });

// const loginBtn = document.getElementById('login-btnD');
// loginBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('Email').value;
//   const password = document.getElementById('password').value;

//   fetch(User_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       const expressU = Object.value(data);
//       const expressUs = expressU.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (expressUs) {
//         console.log('Welcome Back!');
//         window.location.href = 'dashboard.html';
//       } else {
//         console.log('Invalid username or password');
//       }
//     })
//     .catch((error) => console.error(error));
// });
