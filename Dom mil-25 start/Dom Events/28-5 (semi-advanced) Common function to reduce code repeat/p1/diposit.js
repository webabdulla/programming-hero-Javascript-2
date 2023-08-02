function getElementById(inputField){
    const depositField = document.getElementById(inputField);
    const depositFieldStringElement = depositField.value;
    const depositFieldElement = parseFloat(depositFieldStringElement);
    
    return depositFieldElement;
}

// 28-7 (advanced) get and set element value using a function 
function getElementById(element){
    const depositElements = document.getElementById(element);
    const depositString = depositElements.innerText;
    const depositElement= parseFloat(depositString);

    return depositElement;
}

function setTextElemlentValuebyId (elementId, newValue){
    const textElement =document.getElementById(elementId);
    textElement.innerText= newValue;
}

document.getElementById('btn-Deposit').addEventListener('click',function(){

       const newDeposit = getElementById('deposit-fild');
// 1 get previous deposit total 
       const previousTotaldeposit = getElementById('totalDepo');

       console.log(previousTotaldeposit);
// calculate new deposit
       const newDepositTotal = previousTotaldeposit + newDeposit;

    //    set deposit total
setTextElemlentValuebyId('totalDepo',newDepositTotal);

});