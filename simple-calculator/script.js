let display = document.getElementById("display");

function appendNumber(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
    try{
        display.value = eval(display.value);
    }catch(error){
        alert("Invalid Calculation");
        clearDisplay();
    }
}