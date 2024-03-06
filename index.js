let postTitle = '';
const titleInputNode = document.querySelector('[data-find="titleInput"]');
const newPostButtonNode = document.getElementById('newPostButton');

newPostButtonNode.addEventListener('click', function () {
    postTitle = titleInputNode.value;

    console.log(postTitle);
});
