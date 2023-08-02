function updateNumber(isIncriz){
    const caseField = document.getElementById('case-number-field');
    const newcaseFieldString = caseField.value ;
    const newcaseField = parseInt(newcaseFieldString);
    let newcaseFieldUpdat ;   
    

    if(isIncriz === true){
        newcaseFieldUpdat = newcaseField + 1;    
    }
    else{
        newcaseFieldUpdat = newcaseField - 1; 
    }
    caseField.value = newcaseFieldUpdat;  
    return newcaseFieldUpdat;
};

function updateCaseTotalPrice(newcaseField){
    const caseTotlNumber = newcaseField * 59;
    const caseTotalElement = document.getElementById('caseTotal');
    caseTotalElement.innerText = caseTotlNumber;
}


document.getElementById('btn-Case').addEventListener('click',function(){
   const newcaseField =  updateNumber(true);
   updateCaseTotalPrice(newcaseField);

   getsubTotalElements();
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newcaseField = updateNumber(false);
    updateCaseTotalPrice(newcaseField);

    getsubTotalElements();
});