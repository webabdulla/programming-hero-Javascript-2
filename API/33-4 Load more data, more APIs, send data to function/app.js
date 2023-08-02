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
    for(data of user){
        console.log(data.name);
    }
}