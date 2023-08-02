// for of can not used an object 
const bag = {color: 'black', price : 1000, isClened : true, quantity :'one'}

console.log(bag);
// keys 
const keys = Object.keys(bag);
// console.log(keys);

for(const keyss of keys){
    // console.log(keyss, bag[keyss]);
}


// use korbo 

// => for in 
for(const keyss in bag){
    console.log(keyss, bag[keyss]);
}



// advance 

// const pear = Object.entries(bag);
// console.log(pear);
// for(const [keyss,value] of Object.entries(bag)){
//     console.log(keyss,value);
// }