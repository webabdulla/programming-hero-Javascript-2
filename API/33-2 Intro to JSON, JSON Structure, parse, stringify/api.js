const number = {
    id : 1,
    name : 'goriba dhoni',
    job : 'programming hero'
}

// console.log(number);
// const json = JSON.stringify(number);
// console.log(json);


const shop = {
   owner : 'Alia',
   address: {
    street :'balarhat',
    country: 'bangladesh',
    city :'Rangpur'
   },
   product : ['laptop','mobile','keybord','mouse','monitor'],
   revenue : 5000,
   isOpen : true,
   isNew : false,
    
};

console.log(shop);
const nwJson = JSON.stringify(shop);
console.log(nwJson);
const nwParse = JSON.parse(nwJson);
console.log(nwParse);