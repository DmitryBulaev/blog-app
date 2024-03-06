let postTitle = '';
const titleInputNode = document.querySelector('[data-find="titleInput"]');
const newPostButtonNode = document.getElementById('newPostButton');
const postsNode = document.querySelector('[data-find="posts"]')

newPostButtonNode.addEventListener('click', function () {
    postTitle = titleInputNode.value;

    postsNode.innerText = postTitle;
});

