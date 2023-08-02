// const firstNumber = {a:5, b}
// const secondNumber = {a:5}

// const firstString = JSON.stringify(firstNumber);
// const secondString = JSON.stringify(secondNumber);

// if(firstString === secondString){
//     console.log('same')
// }else{
//     console.log('diffarent')
// }



const firstNumber = {a:5, b:2, d:6}
const secondNumber = {a:5, c:5,b:2}

const firstString = JSON.stringify(firstNumber);
const secondString = JSON.stringify(secondNumber);

function compareObject(first, second){
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if(firstKey.length === secondKey.length){
        for(const key of firstKey){
            if(first[key]===second[key]){
                return false;
            }
        }
        
    }
    return true;
}