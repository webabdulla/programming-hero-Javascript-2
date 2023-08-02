function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
}


function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => lodedUser(user))
}

function lodedUser(user){
   const dataLoaded = document.getElementById('userlist');
   for (const data of user){
    console.log(data.name);
    
    const li =document.createElement('li');
    li.innerText = data.name;
    dataLoaded.appendChild(li);
   }
}