let post = null;

const titleInputNode = document.querySelector("[data-find = inputTitle]");
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector("[data-text = fullPosts]");

newPostButtonNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  setPost(postFromUser);

  renderPost();
});

function getPostFromUser() {
  const post = titleInputNode.value;

  return post;
}

function setPost(newPost) {
  post = newPost;
}

function renderPost() {
  postsNode.innerText = post;
}
