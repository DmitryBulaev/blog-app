let postTitle = null;

const titleInputNode = document.querySelector("[data-find = inputTitle]");
const newPostButtonNode = document.getElementById("newPostButton");
const postsNode = document.querySelector("[data-text = fullPosts]");

newPostButtonNode.addEventListener("click", function () {
  postTitle = titleInputNode.value;

  postsNode.innerText = postTitle;
});
