const mealDb =() =>{
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
.then(res => res.json())
.then(data => displayMealbd(data))
}

const displayMealbd = data =>{
 const getMealdb = document.getElementById('meal-db');
 const divContainer= document.createElement('div');
 divContainer.classList.add('mealdb');
 divContainer.innerHTML= `
 <div class="col">
 <div class="card">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title"> ${data.meals}</h5>
     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   </div>
 </div>
</div>
 `
 getMealdb.appendChild(divContainer)


  console.log(data);
}


mealDb()