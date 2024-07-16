const display= document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    display.style.color="white"
}

function calculate(){
try{
    display.value = eval(display.value);
}
catch(err){
    display.value="Error"
}
}


function clearDisplay(){
display.value=""
}