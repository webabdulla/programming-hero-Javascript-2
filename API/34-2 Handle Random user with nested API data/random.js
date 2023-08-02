const randomUser = () => {
    fetch ('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data))
};

const displayData = user =>{
    const getGender = document.getElementById('gender');
    getGender.innerHTML = user.results[0].gender;


    const getName = user.results[0].name.first;
    const findName = document.getElementById('name');
    findName.innerHTML =  user.results[0].name.first;
    console.log(user.results[0].name.first);

}

randomUser();