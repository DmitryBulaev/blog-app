let post = '';
const titleInputNode = document.querySelector('[data-find="postTitleInput"]');
const newPostButtonNode = document.getElementById('newPostButton');
const postsNode = document.querySelector('[data-find="posts"]')

newPostButtonNode.addEventListener('click', function () {
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