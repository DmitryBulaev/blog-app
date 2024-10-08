let posts = [];

const TITLE_MAX_LENGTH = 50;
const TEXT_MAX_LENGTH = 200;

const postTitleInputNode = document.querySelector("[data-text = inputTitle]");
const postTextInputNode = document.querySelector("[data-text = inputText]");
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector("[data-text = fullPost]");
const validationMessageNode = document.getElementById("validationMessage");
const titleSymbolRemainderNode = document.getElementById(
  "titleSymbolRemainder"
);
const textSymbolRemainderNode = document.getElementById("textSymbolRemainder");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();
});

postTitleInputNode.addEventListener("input", validation);

postTextInputNode.addEventListener("input", validation);

function validation() {
  const currentTitleValue = postTitleInputNode.value;
  const currentTextValue = postTextInputNode.value;

  if (currentTitleValue.length > TITLE_MAX_LENGTH) {
    validationMessageNode.innerText = `Заголовок больше ${TITLE_MAX_LENGTH} символов`;
    validationMessageNode.classList.remove("validation-message_hidden");
    newPostButtonNode.disabled = true;
    newPostButtonNode.classList.add("posts-input__new-post-btn_disabled");
    return;
  }

  if (currentTextValue.length > TEXT_MAX_LENGTH) {
    validationMessageNode.innerText = `Длина поста больше ${TEXT_MAX_LENGTH} символов`;
    validationMessageNode.classList.remove("validation-message_hidden");
    newPostButtonNode.disabled = true;
    newPostButtonNode.classList.add("posts-input__new-post-btn_disabled");
    return;
  }

  validationMessageNode.classList.add("validation-message_hidden");
  newPostButtonNode.disabled = false;
  newPostButtonNode.classList.remove("posts-input__new-post-btn_disabled");
}

titleSymbolRemainderNode.innerHTML = `Осталось ${TITLE_MAX_LENGTH} символов`;
textSymbolRemainderNode.innerHTML = `Осталось ${TEXT_MAX_LENGTH} символов`;

postTitleInputNode.addEventListener("input", function () {
  const currentTitleValue = postTitleInputNode.value;

  titleSymbolRemainderNode.innerHTML = `Осталось ${
    TITLE_MAX_LENGTH - currentTitleValue.length
  } символов`;

  if (currentTitleValue.length > TITLE_MAX_LENGTH) {
    titleSymbolRemainderNode.classList.add("symbol-remainder_hidden");
    return;
  }

  titleSymbolRemainderNode.classList.remove("symbol-remainder_hidden");
});

postTextInputNode.addEventListener("input", function () {
  const currentTextValue = postTextInputNode.value;

  textSymbolRemainderNode.innerHTML = `Осталось ${
    TEXT_MAX_LENGTH - currentTextValue.length
  } символов`;

  if (currentTextValue.length > TEXT_MAX_LENGTH) {
    textSymbolRemainderNode.classList.add("symbol-remainder_hidden");
    return;
  }

  textSymbolRemainderNode.classList.remove("symbol-remainder_hidden");
});

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  const currentDate = new Date();
  const date = `${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  posts.push({
    date,
    title,
    text,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();

  postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
    <div class = "post">
      <div class = 'post__date'>${post.date}</div>
      <h2 class = "post__title">${post.title}</h2>
      <p class = "post__text">${post.text}</p>
    <div>
  `;
  });

  postsNode.innerHTML = postsHTML;
}
