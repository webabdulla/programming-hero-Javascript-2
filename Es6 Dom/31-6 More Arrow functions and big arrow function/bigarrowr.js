// no parameter arrow function 
 const number = () => 3.1416;


//  one parameter 

const double = (num) => num * 2;

// tow parameter 
const fullName = (first, second) => (first + '' +second);
const multiply = (a,b) => a * b;
const result = multiply(7 , 8);
console.log(result);


// multiple arrow function 
const numbers = (a,b,c,d,e,f) => (a+b+c+d+e+f);

// multi line arrow function 
// if you wont to return something , use the return 

const doMath = (x,y,z) => {
    const firstSum = x + y;
    const secontSum = y + z;
    const multipleResult = firstSum * secontSum;
    const finalResult = multipleResult / 2;
    return finalResult;
}