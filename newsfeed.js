const User_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/users';
const Post_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/posts';
const EXT = '.json';

let postBtn = document.getElementById('post-btn');
let postText = newPost.querySelector('textarea');
const appendDiv = document.getElementById('c1d');

postBtn.addEventListener('click', (e) => {
  let newPost = document.createElement('div');

  newPost.id = 'profile1';
  newPost.classList = 'profile';
  e.preventDefault();
  newPost.innerHTML = `
          <textarea
            class="post"
            id="textarea"
            placeholder="Type to post"
          ></textarea>
          <button id="post-btn" class="allbtns">Post</button>
          <button id="edit-btn" class="allbtns">Edit</button>
          <button id="delete-btn" class="allbtns">Delete</button>
          <img src="/assets/profile1.jpeg" alt="profile1" id="feed-profile" />
        `;
  appendDiv.prepend(newPost);
});
//Delete post
let deleteBtn = newPost.querySelector('#delete-btn');
deleteBtn.addEventListener('click', (e) => {
  newPost.remove();
});

//Edit post
let editBtn = newPost.querySelector('#edit-btn');
let saveBtn = newPost.querySelector('#save-btn');

editBtn.addEventListener('click', (e) => {
  postText.outerHTML = `<input type="text" class="post" id="textarea" value="${postText.value}">`;
  editBtn.style.display = 'none';
  saveBtn.style.display = 'inline-block';
});

saveBtn.addEventListener('click', (e) => {
  let inputField = newPost.querySelector('input');
  postText.outerHTML = `<textarea class="post" id="textarea">${inputField.value}</textarea>`;
  saveBtn.style.display = 'none';
  editBtn.style.display = 'inline-block';
});

//*Code doesnt work below line
////////////
// editBtn.addEventListener('click', () => {
//   if (editBtn.textContent === 'Edit') {
//     newPost.removeAttribute('readonly');
//     editBtn.textContent = 'Save';
//   } else {
//     newPost.setAttribute('readonly', true);
//     editBtn.textContent = 'Edit';
//   }
// });

// deleteBtn.addEventListener('click', (e) => {
//   let postContainer = deleteBtn.appendDiv;
//   postContainer.remove();
// });

// // function deletePost(
// deleteBtn.innerHTML = 'Delete';
// deleteBtn.onclick = function () {
//   deletePost(newPost);
// };
// newPost.appendChild(deleteBtn);
// function deletePost(newPost) {
//   newPost.remove();
// }
// //Create edit button
// editBtn = document.createElement('button');
// editBtn.innerHTML = 'Edit';
// editBtn.onclick = function () {
//   editPost(newPost);
// };
// newPost.appendChild(editBtn);
// function editPost(newPost) {
//   postText.value = newPost.innerText;
//   newPost.innerHTML = '';
//   newPost.appendChild(postText);
//   const saveBtn = document.createElement('button');
//   saveBtn.innerHTML = 'Save';
//   saveBtn.onclick = function () {
//     savePost(newPost, postText.value);
//   };
//   newPost.appendChild(saveBtn);
// }

// //Save button
// function savePost(newPost, updatedPost) {
//   newPost.textContent = updatedPost;
//   deleteBtn.innerHTML = 'Delete';
//   deleteBtn.onclick = function () {
//     deletePost(newPost);
//   };
//   newPost.appendChild(deleteBtn);
// }
