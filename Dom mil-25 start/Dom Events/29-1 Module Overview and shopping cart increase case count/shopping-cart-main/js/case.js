document.getElementById('btn-Case').addEventListener('click',function(){
    const caseField = document.getElementById('case-number-field');
    const newcaseFieldString = caseField.value ;
    const newcaseField = parseInt(newcaseFieldString);

    const newcaseFieldUpdat = newcaseField + 1;
    
    caseField.value = newcaseFieldUpdat;  
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseField = document.getElementById('case-number-field');
    const newcaseFieldString = caseField.value ;
    const newcaseField = parseInt(newcaseFieldString);

    const newcaseFieldUpdatMinus = newcaseField - 1;
    
    caseField.value = newcaseFieldUpdatMinus; 
})