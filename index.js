let posts = [];

const postTitleInputNode = document.querySelector("[data-text = inputTitle]");
const postTextInputNode = document.querySelector("[data-text = inputText]");
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector("[data-text = fullPost]");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();
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
  posts.push({
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
        <h2 class = "post__title">${post.title}<h2>
        <p class = "post__text">${post.text}<p>
    <div>
  `;
  });

  postsNode.innerHTML = postsHTML;
}
