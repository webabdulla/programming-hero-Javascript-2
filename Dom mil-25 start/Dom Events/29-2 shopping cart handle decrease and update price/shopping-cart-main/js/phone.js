function getElementByButtonId(inputId){
   const previousPhone = document.getElementById('phone-number-field');
   const previousPhoneString = previousPhone.value ;
   const previousphoneNumber = parseInt(previousPhoneString);
   
   let newPhonePrice ; 

   if(inputId === true){
    newPhonePrice = previousphoneNumber + 1;
   }else{
    newPhonePrice = previousphoneNumber - 1;
   }

   previousPhone.value = newPhonePrice ; 
   return newPhonePrice;
};


function newPhoneAmount(newAmountField){
    const newPhoneNumberAmonut = newAmountField * 1219;
    const newNumbers = document.getElementById('phoneAmount');
    newNumbers.innerText = newPhoneNumberAmonut;
};



document.getElementById('btn-phone').addEventListener('click',function(){
   const newAmountField =  getElementByButtonId(true);
   newPhoneAmount (newAmountField);
   getsubTotalElements();

});

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newAmountField =getElementByButtonId(false);
    newPhoneAmount (newAmountField);
    getsubTotalElements();
});