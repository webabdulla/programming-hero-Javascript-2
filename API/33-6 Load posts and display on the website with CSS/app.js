function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}

function displayPost(posts){
  const postContainer = document.getElementById('post-container');
   for(const post of posts){
  //     const div = document.createElement('div');
  //     div.classList.add('post')
  //     div.innerHTML = `
  //     <h4>user-${post.userId}</h4>
  //     <h5> title: ${post.title} </h5>
  //     <p>text: ${post.body} </p>
  //     `
  //     postContainer.appendChild(div);
  const newElement = document.createElement('div');
    newElement.classList.add('post');
    newElement.innerHTML = `
    <h4> user-${post.userId}</h4>
    <h5> title : ${post.title}</h5>
    <p> text : ${post.body}</p>    
    `

    postContainer.appendChild(newElement);
   }
}

loadPost();