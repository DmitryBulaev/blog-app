let post = {
  title: "",
  text: "",
};

const postTitleInputNode = document.querySelector("[data-text = inputTitle]");
const postTextInputNode = document.querySelector("[data-text = inputText]");
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector("[data-text = fullPost]");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  setPost(postFromUser);

  renderPost();
});

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function setPost(newPost) {
  post = newPost;
}

function getPost() {
  return post;
}

function renderPost() {
  const post = getPost();

  const postHTML = `
    <div class = "post">
        <h2 class = "post__title">${post.title}<h2>
        <p class = "post__text">${post.text}<p>
    <div>
  `;

  postsNode.innerHTML = postHTML;
}
