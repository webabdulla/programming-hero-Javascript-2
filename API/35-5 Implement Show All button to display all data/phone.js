const loadPhone = async(searchText,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data,dataLimit);
}

const displayPhones = (phones,dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // display 10 phone only 
    const showAll =document.getElementById('sow-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0,10);
        showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none');
    }


    // display no phone found
    const noPhon =document.getElementById('no-found-message');
    if(phones.length===0){
        noPhon.classList.remove('d-none');
    }
    else{
        noPhon.classList.add('d-none');
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>`;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop spinner 
    toggleSpinner(false);
}
 
// process search
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText,dataLimit);
}



// heandelar click 
document.getElementById('btn-search').addEventListener('click', function() {
// start load
processSearch(10);
});

const toggleSpinner = isLoading =>{
    const loaderSection =document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }else{
        loaderSection.classList.add('d-none');
    }
}

//not the better way to load all data 

document.getElementById('sow-all').addEventListener('click',function(){
    processSearch();
})


loadPhone();