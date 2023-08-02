const numbers = [2,8,4,6,1,9];
//  const output =[];
//  for(number of numbers){
//     const double = number * 3 ;
//     output.push(double);
//  }

//  console.log(output);


 function getDubleData(numbers){
    const output =[];
    for(number of numbers){
        const duble = number * 2;
        output.push(duble);
    }
    return output;
 }
const result = getDubleData(numbers);
//  console.log(result);



//  const dubleIt = num => num * 2;
//  const makeDouble = numbers.map(dubleIt);

 const directDuble = numbers.map(num => num * 2);


 //  console.log(makeDouble);
 console.log(directDuble);