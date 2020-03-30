let switch1=true;
const kinds = {
    MONTHLY: 'monthly',
    ANNUALLY: 'annually',
}
document.getElementById("customSwitch1")
    .addEventListener("click",cambiar); 
   

function cambiar(){
    switch1= !switch1;
    if(switch1){
        hide(kinds.MONTHLY);
        show(kinds.ANNUALLY);

    }
    else {
        hide(kinds.ANNUALLY);
        show(kinds.MONTHLY);
    }
}

function hide(kind){
    for( i=0;i<document.getElementsByClassName(kind).length;i++)
    document.getElementsByClassName(kind)[i].style.display="none";
    
}
function show(kind){
    for( i=0;i<document.getElementsByClassName(kind).length;i++)
    document.getElementsByClassName(kind)[i].style.display="contents";
    
}