
// number 

// const numbers = [12,56,87,44];
// const avrage = numbers.map(x => x / 2);
// console.log(avrage);


// string 

const myFriends = ['jerry','kiti','katbirali','misti kumra','pori'];

const friendFirstLetter = myFriends.map(x => x[0]);
// console.log(friendFirstLetter);

const friendsLangth = myFriends.map(x => x.length);
// console.log(friendsLangth);



// object 

const product = [
    {id : 1,name : 'laptop', prise : 80000},
    {id : 1,name : 'laptop', prise : 80000},
    {id : 1,name : 'laptop', prise : 80000},
    {id : 1,name : 'laptop', prise : 80000}
];

const items = product.map(p => p.name);
console.log(items);



// const number = [5,10,15,20,25];

// const num =number.map(n => n*5);
// console.log(num);