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

const itsNegativeSign = (str, ind) => {
    if (ind === 0 && ind + 1 != str.length && Number(str[ind+1])) return true;
    if (ind > 0 && ind + 1 != str.length && Number(str[ind+1]) && OPERATORS.includes(str[ind-1])) return true;
    return false;ß
}

const splitNumbersAndSigns = (str) => {
    let lastInit = 0;
    let numbers = [];
    let operators = [];
    let error = false;
    for (let ind = 0; ind < str.length; ind++) {
        if (OPERATORS.includes(str[ind])) {
            if (!itsNegativeSign(str, ind)) {
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

    console.log('result: ' + JSON.stringify(result));

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
    } else if (global.newValue === 'CE') {
        if (global.curValue == "0" || global.curValue.length === 1) {
            global.result = "0";
        } else {
            let screenValue = String(global.curValue);
            global.result = screenValue.slice(0, screenValue.length - 1);
        }
    } else if (global.newValue === '%') {
        if (Number(global.curValue)) {
            global.result = String(Number(global.curValue) / 100);
        } else {
            global.result = global.curValue;
        }
    } else if (global.newValue === '=') {
        if (global.curValue === "0" ) {
            global.result = "0";
        } else if (!Number(global.curValue)) {
            global.result = executeOperation(global.curValue);
        } else {
            global.result = global.curValue;
        }
    } else {
        if (global.curValue == "0") {
            global.result = global.newValue;
        } else if (isValidScreenLimit()) {
            global.result = global.curValue;
        } else {
            global.result = global.curValue + global.newValue; 
        }  
    }
}

export const calculatorOperation = (newValue, curValue) => {
    assignGlobalParameters(newValue, curValue);
    calculateResult(); 
    return global.result;
}
