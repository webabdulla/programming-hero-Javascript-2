function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function genaratePin(){
 const random = Math.round(Math.random()*1000);
 return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
})