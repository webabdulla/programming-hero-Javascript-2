const bag = {color: 'black', price : 1000, isClened : true, quantity :'one'}

console.log(bag);
// keys 
const keys = Object.keys(bag);
console.log(keys);

// property & value 
const value = Object.values(bag);
console.log(value);


// entries 
const peares = Object.entries(bag);
console.log(peares);


// seal korle kono man cenj kora jay na modify kora jay  add kora jay na kono property ;
// Object.seal(bag);

// freeze ..........korle kono man cenj kora jay na modify kora jay na add kora jay na kono property  ;
Object.freeze(bag);

// delete 
delete bag.isClened;