let post = {
    title: '',
    text: ''
};
const postTitleInputNode = document.querySelector('[data-find="postTitleInput"]');
const postTextInputNode = document.querySelector('[data-find="postTextInput"]');
const newPostButtonNode = document.getElementById('newPostButton');
const postsNode = document.querySelector('[data-find="posts"]')

newPostButtonNode.addEventListener('click', function () {
    const postFromUser = getPostFromUser();
    
    setPost(postFromUser);

    renderPost();
});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text
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
        <div class='post'>
            <p class='post__title'>${post.title}</p>
            <p class='post__text'>${post.text}</p>
        </div>
   `;

   postsNode.innerHTML = postHTML;
}