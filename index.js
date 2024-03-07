const posts = [];
const postTitleInputNode = document.querySelector('[data-find="postTitleInput"]');
const postTextInputNode = document.querySelector('[data-find="postTextInput"]');
const newPostButtonNode = document.getElementById('newPostButton');
const postsNode = document.querySelector('[data-find="posts"]')

newPostButtonNode.addEventListener('click', function () {
    const postFromUser = getPostFromUser();
    
    addPost(postFromUser);

    renderPosts();
});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text
    };
}

function addPost({title, text}) {
    posts.push({
        title,
        text
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class='post'>
                <p class='post__title'>${post.title}</p>
                <p class='post__text'>${post.text}</p>
            </div>
        `        
    });

   postsNode.innerHTML = postsHTML;
}