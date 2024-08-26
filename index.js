let postTitle = null;

const titleInputNode = document.querySelector("[data-find = inputTitle]");
const newPostButtonNode = document.getElementById("newPostButton");

newPostButtonNode.addEventListener("click", function () {
  postTitle = titleInputNode.value;

  console.log(postTitle);
});
