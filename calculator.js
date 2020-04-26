const output = document.getElementById('output');
const prevOperand = document.getElementById('prevOperand');

let outputDisplay = '';
let prevOperandDisplay = '';

let result = '';

const onClick = (id) => {
    outputDisplay += id;
    output.innerHTML = outputDisplay;
};

const equal = () => {
    if (outputDisplay !== ''){
        prevOperand.innerHTML = outputDisplay;
        result = eval(outputDisplay);
        outputDisplay = result;
        output.innerHTML = outputDisplay;
    }
}

const clearOutput = () => {
    output.innerHTML = '';
    outputDisplay = '';
    result = '';
}

const convert = () => {
    if (outputDisplay[0] === '-') {
        outputDisplay = outputDisplay.slice(1);
    } else {
        outputDisplay = '-' + outputDisplay;
    }
    output.innerHTML = outputDisplay;
 }









