 document.getElementById('Calculate').addEventListener('click', function(){

    let income = document.getElementById('income');
    const incomeString = income.value ;
    let newincome = parseInt(incomeString);
    income.value = newincome;


    const food = document.getElementById('food');
    const newFoodString = food.value ;
    const newFood = parseInt(newFoodString);
    
    const rent =document.getElementById('rent');
    const newRentString = rent.value;
    const newRent = parseInt(newRentString);

    const Clothes =document.getElementById('Clothes');
    const newClothesString = Clothes.value;
    const newClothes = parseInt(newClothesString);

    let allSum = newFood + newRent + newClothes;

     const total = document.getElementById('total');
     const previousTotalString =  total.innerText;
     const previousTotal = parseInt(previousTotalString);
     total.innerText = allSum;


     let balance = document.getElementById('balance');
     const newbalanceString = balance.innerText;

     let totalBalance = newincome - allSum;
     balance.innerText =  totalBalance;
});
