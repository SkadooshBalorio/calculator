function appendValue(value) {
    const display = document.getElementById("result");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function calculate() {
    const display = document.getElementById("result");
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = "Error";
    }
}
