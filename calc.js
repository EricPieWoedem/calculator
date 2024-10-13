// let firstNum = null;
// let operator = null;
// let secondNum = null;

// let currrentInput = '';

// document.querySelector("#nine").addEventListener('click',() => {
//     currrentInput += '9';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#eight").addEventListener('click',() => {
//     currrentInput += '8';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#seven").addEventListener('click',() => {
//     currrentInput += '7';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#six").addEventListener('click',() => {
//     currrentInput += '6';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#five").addEventListener('click',() => {
//     currrentInput += '5';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#four").addEventListener('click',() => {
//     currrentInput += '4';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#three").addEventListener('click',() => {
//     currrentInput += '3';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#two").addEventListener('click',() => {
//     currrentInput += '2';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#one").addEventListener('click',() => {
//     currrentInput += '1';
//     updateDisplay(currrentInput);
// })
// document.querySelector("#zero").addEventListener('click',() => {
//     currrentInput += '0';
//     updateDisplay(currrentInput);
// })
// document.querySelector('#decimal').addEventListener('click', () => {
//     if (!currrentInput.includes('.')) {
//         currrentInput += '.';
//       }
//     updateDisplay(currrentInput);
//    })


// const addBtn = document.querySelector("#plus").addEventListener('click',() => {
//     if (currrentInput !== '') {
//         firstNum = parseFloat(currrentInput);
//         operator = '+';
//         currrentInput = ''; 
//       }
//     updateDisplay(operator);
// })
// const minusBtn = document.querySelector("#minus").addEventListener('click',() => {
//     if (currrentInput !== '') {
//         firstNum = parseFloat(currrentInput);
//         operator = '-';
//         currrentInput = '';
//     }
//     updateDisplay(operator)
// })
// const timesBtn = document.querySelector("#times").addEventListener('click',() => {
//     if (currrentInput !== '') {
//         firstNum = parseFloat(currrentInput);
//         operator = '×';
//         currrentInput = '';
//     }
//     updateDisplay(operator);
// })

// const divideBtn = document.querySelector("#divides").addEventListener('click',() => {
//     if (currrentInput !== '') {
//         firstNum = parseFloat(currrentInput);
//         operator = '÷';
//         currrentInput = '';
//     }
//     updateDisplay(operator);
// })

// function operate (x, y) {
//     if (operator === '+') {
//         return x + y;
//     }
//     else if (operator === '-') {
//         return x - y;
//     }
//     else if (operator === '×') {
//         return x * y;
//     }
//     else if (operator === '÷') {
//         return x/y;
//     }
//     return null;
// }

// document.querySelector("#equals").addEventListener('click', () => {
//     if (currrentInput !== '' && firstNum !== null && operator !== null) {
//         secondNum = parseFloat(currrentInput);  
//         const result = operate(firstNum, secondNum);
//         updateDisplay(result); 
//         firstNum = result;
//         operator = null;
//         currrentInput = '';
//     }
// });




// function updateDisplay (value) {
//     const display = document.querySelector('#screen');
//     display.textContent = value;
// }

let firstNum = null;
let operator = null;
let secondNum = null;
let currrentInput = '';
let isResultDisplayed = false;

document.querySelector("#nine").addEventListener('click', () => {
    handleNumberInput('9');
});
document.querySelector("#eight").addEventListener('click', () => {
    handleNumberInput('8');
});
document.querySelector("#seven").addEventListener('click', () => {
    handleNumberInput('7');
});
document.querySelector("#six").addEventListener('click', () => {
    handleNumberInput('6');
});
document.querySelector("#five").addEventListener('click', () => {
    handleNumberInput('5');
});
document.querySelector("#four").addEventListener('click', () => {
    handleNumberInput('4');
});
document.querySelector("#three").addEventListener('click', () => {
    handleNumberInput('3');
});
document.querySelector("#two").addEventListener('click', () => {
    handleNumberInput('2');
});
document.querySelector("#one").addEventListener('click', () => {
    handleNumberInput('1');
});
document.querySelector("#zero").addEventListener('click', () => {
    handleNumberInput('0');
});

document.querySelector('#decimal').addEventListener('click', () => {
    if (!currrentInput.includes('.')) {
        handleNumberInput('.');
    }
});

const addBtn = document.querySelector("#plus").addEventListener('click', () => handleOperator('+'));
const minusBtn = document.querySelector("#minus").addEventListener('click', () => handleOperator('-'));
const timesBtn = document.querySelector("#times").addEventListener('click', () => handleOperator('×'));
const divideBtn = document.querySelector("#divides").addEventListener('click', () => handleOperator('÷'));

document.querySelector("#equals").addEventListener('click', () => {
    if (currrentInput !== '' && firstNum !== null && operator !== null) {
        secondNum = parseFloat(currrentInput);
        const result = operate(firstNum, secondNum);
        updateDisplay(result);
        firstNum = result;
        operator = null;
        currrentInput = '';
        isResultDisplayed = true;
    }
});

function handleNumberInput(number) {
    if (isResultDisplayed) {
        currrentInput = '';
        isResultDisplayed = false;
    }
    currrentInput += number;
    updateDisplay(currrentInput);
}

function handleOperator(op) {
    if (currrentInput !== '') {
        if (firstNum === null || operator === null) {
            firstNum = parseFloat(currrentInput);
        } else if (operator !== null && !isResultDisplayed) {
            secondNum = parseFloat(currrentInput);
            const result = operate(firstNum, secondNum);
            updateDisplay(result);
            firstNum = result;
        }
    }
    operator = op;
    currrentInput = '';
    isResultDisplayed = false;
    updateDisplay(operator);
}

document.querySelector("#toggle-sign").addEventListener('click', () => {
    if (currrentInput !== '') {
        currrentInput = (parseFloat(currrentInput) * -1).toString(); 
        updateDisplay(currrentInput); 
    }
});


function operate(x, y) {
    if (operator === '+') {
        return x + y;
    } else if (operator === '-') {
        return x - y;
    } else if (operator === '×') {
        return x * y;
    } else if (operator === '÷') {
        return x / y;
    }
    return null;
}

document.querySelector("#clear").addEventListener('click', () => {
    currrentInput = '';
    firstNum = null;
    operator = null;
    secondNum = null;
    updateDisplay(''); 
});

document.querySelector("#delete").addEventListener('click', () => {
    currrentInput = currrentInput.slice(0, -1); 
    updateDisplay(currrentInput); 
});


function updateDisplay(value) {
    const display = document.querySelector('#screen');
    display.textContent = value;
}
