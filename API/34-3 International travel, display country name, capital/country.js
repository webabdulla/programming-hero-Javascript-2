const loadCountries = () => {
fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => displayLoad(data))


}

const displayLoad = (country) =>{

    const countryName = document.getElementById('allcountries');
    

    // for(const countri of country){
    //     console.log(countri);
    // }
    country.forEach(countri =>{
        console.log(countri.name); 

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3> Name : ${countri.name}</h3>
        <h5> Capita : ${countri.capital ? countri.capital: 'no capital'} </h5>
        <p>Population: ${countri.population }
        <br>
        <button onclick = displayContainerDetails('${countri.alpha2Code}')>Details</button>
        `
        countryName.appendChild(countryDiv);


    });

    console.log(country);
}

displayContainerDetails = code =>{
    console.log('Details coming soon', code);
}

loadCountries();