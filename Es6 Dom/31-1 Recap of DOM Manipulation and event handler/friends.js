document.getElementById('fiend-btn').addEventListener('click', function(){
    const colorsBg = document.getElementsByClassName('friend');

    for(const colorBg of colorsBg){
        colorBg.style.backgroundColor = 'blue';
    }
});


document.getElementById('center-btn').addEventListener('mouseout', function(){
    const centerFriend = document.getElementById('friend-center');
    centerFriend.style.textAlign = 'center';
});

document.getElementById('friendAdd').addEventListener('click', function(){
    const addFriend = document.getElementById('friend');
    const friendContainer = document.createElement('div');
    friendContainer.classList.add('friend');
    friendContainer.innerHTML = `
    <h3>new friend </h3>
    `;
    
    addFriend.appendChild( friendContainer);
});