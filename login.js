const User_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/users';
const EXT = '.json';
const user = {
  email: 'iraon720@gmail.com',
  username: 'iraon720',
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
////////////

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
