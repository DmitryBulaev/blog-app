const posts = [];

const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;

const postTitleInputNode = document.querySelector(
  '[data-find="postTitleInput"]'
);
const postTextInputNode = document.querySelector('[data-find="postTextInput"]');
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector('[data-find="posts"]');
const validationMessage = document.getElementById("validationMessage");
const titleInputLimit = document.getElementById("titleInputLimit");
const textInputLimit = document.getElementById("textInputLimit");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();
});

postTitleInputNode.addEventListener("input", function () {
  validation();
  titleLimit();
});

postTextInputNode.addEventListener("input", function () {
  validation();
  textLimit();
});

function validation() {
  const titleLen = postTitleInputNode.value.length;
  const textLen = postTextInputNode.value.length;

  if (titleLen > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длина зоголовка не должна превышать ${TITLE_VALIDATION_LIMIT} сиволов`;
    validationMessage.classList.remove("validation-message_hiddden");
    newPostButtonNode.disabled = true;
    return;
  }

  if (textLen > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длина поста не должна превышать ${TEXT_VALIDATION_LIMIT} сиволов`;
    validationMessage.classList.remove("validation-message_hiddden");
    newPostButtonNode.disabled = true;
    return;
  }

  validationMessage.classList.add("validation-message_hiddden");
  newPostButtonNode.disabled = false;
}

function titleLimit() {
  const titleLen = postTitleInputNode.value.length;
  const titleLimit = titleLen - TITLE_VALIDATION_LIMIT;

  if (titleLen > TITLE_VALIDATION_LIMIT) {
    titleInputLimit.innerText = `Лимит символов превышен на: ${titleLimit}`;
    titleInputLimit.classList.remove("title-input-limit_hidden");
    return;
  }

  titleInputLimit.classList.add("title-input-limit_hidden");
}

function textLimit() {
  const textLen = postTextInputNode.value.length;
  const textLimit = textLen - TEXT_VALIDATION_LIMIT;

  if (textLen > TEXT_VALIDATION_LIMIT) {
    textInputLimit.innerText = `Лимит символов превышен на: ${textLimit}`;
    textInputLimit.classList.remove("text-input-limit_hidden");
    return;
  }

  textInputLimit.classList.add("text-input-limit_hidden");
}

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
  const date = currentDate.toLocaleString();

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

  let postsHTML = "";

  posts.forEach((post) => {
    postsHTML += `
        <div class='post'>
            <div class='post__date'>${post.date}</div>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>
        `;
  });

  postsNode.innerHTML = postsHTML;
}
