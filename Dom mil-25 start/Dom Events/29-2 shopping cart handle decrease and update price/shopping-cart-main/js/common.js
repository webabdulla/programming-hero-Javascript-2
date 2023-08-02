function getTextvalueId(elementId){
    
    const phoneTotalElements = document.getElementById(elementId);
    const currentTotalString = phoneTotalElements.innerText;
    const currentTotsl = parseInt(currentTotalString);
    return currentTotsl;
    };
    
    function getsubTotalElements(){
    // calculate total
    const currentTotsl =  getTextvalueId("phoneAmount");
    const currentcaseTotal =  getTextvalueId("caseTotal");
    
    const totalcurrentAmount = currentTotsl + currentcaseTotal;
    const subTotalElements = document.getElementById('sub-total');
    subTotalElements.innerText = totalcurrentAmount ;
    
    };

    function setTextElementValueById(element, value){
       const subtotalElements = document.getElementById(element);
       subtotalElements.innerText = value;
    }