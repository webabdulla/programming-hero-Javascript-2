// find mins just first ans take nibe  or filter bolte sob ans ke dekhabe 


const number = [20,5,3666,7,822,5,2222,111];
const bigNum = number.filter( number => number >1000 );
const even = number.filter(number => number % 2===0);
console.log(bigNum);
console.log(even);



// object 

const product = [
    {id : 1,name : 'laptop', prise : 80000},
    {id : 1,name : 'iphone', prise : 70000},
    {id : 1,name : 'tab', prise : 5000},
    {id : 1,name : 'ipot', prise : 3000}
];

const items = product.filter(p => p.prise >10000);
console.log(items);




// object 

const products = [
    {id : 1,name : 'laptop', prise : 80000},
    {id : 1,name : 'iphone', prise : 70000},
    {id : 1,name : 'tab', prise : 5000},
    {id : 1,name : 'ipot', prise : 3000}
];



const findNumber = products.find(p => p.prise ===5000);
console.log(findNumber);