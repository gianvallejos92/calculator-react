const MAX_LENGTH = 20;
const OPERATORS = ['+' , '÷', '*', '-'];

let global = {
    newValue: '',
    curValue: '',
    isOperator: false,
    result: ''
}

const isValidScreenLimit = () => {
    return global.curValue && global.curValue.length === MAX_LENGTH;
}

const splitNumbersAndSigns = (str) => {
    let lastInit = 0;
    let numbers = [];
    let operators = [];
    let error = false;
    for (let ind = 0; ind < str.length; ind++) {
        if (OPERATORS.includes(str[ind])) {
            let aux = str.slice(lastInit, ind);
            if (!Number(aux)) {
                return {
                    "numbers": ['error'],
                    "operators": ['error']
                }
            }
            numbers.push(Number(aux));
            operators.push(str[ind]);
            lastInit = ind + 1;
        }
    }
    if(!error && lastInit != 0) {
        let aux = str.slice(lastInit);
        if (!Number(aux)) {
            return {
                "numbers": ['error'],
                "operators": ['error']
            }
        }
        numbers.push(Number(aux));
    }
    return {numbers, operators}
}

const executeOperation = (str) => {
    //validate not operators together
    let result = splitNumbersAndSigns(str);

    console.log('result: ' + result);

    if (result.numbers.length != result.operators.length + 1) return "error";

    const count = result.operators.reduce((acc, curValue, curIndex) => {
        let res = result.numbers[0];
        switch (curValue) {
            case '+':
                res = acc + result.numbers[curIndex+1];
                break;
            case '-':
                res = acc - result.numbers[curIndex+1];
                break;
            case '*':
                res = acc * result.numbers[curIndex+1];
                break;
            case '÷':
                res = acc / result.numbers[curIndex+1];
                break;
            default:
                break;
        }
        return res;
    }, result.numbers[0]);

    return count;
}

const assignGlobalParameters = (newValue, curValue) => {
    global.newValue = newValue;
    global.curValue = curValue;
}

function calculateResult () {
    //CONVER TO SWITCH + CLEAN
    if (global.newValue === 'AC') {
        global.result = "0"; return;
    } else if (global.newValue === '=') { //Resolve operations
        if (!Number(global.curValue)) {
            global.result = executeOperation(global.curValue);
        } else {
            global.result = global.curValue;
        }
    } else if (global.curValue == "0") {
        global.result = global.newValue;
    } else if (isValidScreenLimit()) {
        global.result = global.curValue;
    } else {
         global.result = global.curValue + global.newValue; 
    }  
}

export const calculatorOperation = (newValue, curValue) => {
    assignGlobalParameters(newValue, curValue);
    calculateResult(); 
    return global.result;
}
