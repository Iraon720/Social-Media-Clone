const User_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/users';
const Post_URL =
  'https://twitter-clone-44098-default-rtdb.firebaseio.com/posts';
const EXT = '.json';

let postText = document.getElementById('textarea');
let postBtn = document.getElementById('post-btn');
let editBtn = document.getElementById('edit-btn');
let deleteBtn = document.getElementById('delete-btn');
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
function deletePost(
  
)
