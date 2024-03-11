const posts = [];

const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20;

const postTitleInputNode = document.querySelector(
  '[data-find="postTitleInput"]'
);
const postTextInputNode = document.querySelector('[data-find="postTextInput"]');
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector('[data-find="posts"]');
const validationMessage = document.getElementById("validationMessage");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();
});

postTitleInputNode.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  if (currentValue.length > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длина зоголовка не должна превышать ${TITLE_VALIDATION_LIMIT} сиволов`;
    validationMessage.classList.remove("validation-message_hiddden");
  } else {
    validationMessage.classList.add("validation-message_hiddden");
  }
});

postTextInputNode.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  if (currentValue.length > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длина зоголовка не должна превышать ${TEXT_VALIDATION_LIMIT} сиволов`;
    validationMessage.classList.remove("validation-message_hiddden");
  } else {
    validationMessage.classList.add("validation-message_hiddden");
  }
});

// function validation() {

// }

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  posts.push({
    title,
    text,
  });
}

function getPosts() {
  return posts;
}

let date = new Date();

options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const POSTS_DATE = new Intl.DateTimeFormat("ru", options).format(date);

function renderPosts() {
  const posts = getPosts();

  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
        <div class='post'>
            <div class='post__date'>${POSTS_DATE}</div>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>
        `;
  });

  postsNode.innerHTML = postsHTML;
}
