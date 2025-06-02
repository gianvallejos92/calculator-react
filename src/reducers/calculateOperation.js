const MAX_LENGTH = 12;
const OPERATORS = ['+' , '÷', '*', '-'];

let scope = {
    newValue: '',
    curValue: '',
    isOperator: false
}

const findOperatorPosition = (str) => {
    let operatorIndex = -1;
    for (let ind = 0; ind < OPERATORS.length; ind++) {
        let operatorIndex = str.indexOf(OPERATORS[ind]);        
        if (operatorIndex != -1) { return operatorIndex; }
    }
    return operatorIndex;
}

const splitNumbersAndOperators = (str) => {
    let operatorIndex = findOperatorPosition(String(str));
    if (operatorIndex != -1 ) {
        const numberAfterOperator = str.slice(operatorIndex + 1);
        return [
            Number(str.slice(0, operatorIndex)),
            (numberAfterOperator) ? Number(numberAfterOperator) : -1,
            str[operatorIndex]
        ]
    }
    return [Number(str), operatorIndex, operatorIndex];
}

const isValidScreenLimit = () => {
    return scope.curValue && scope.curValue.length === MAX_LENGTH && !scope.isOperator;
}

const resolveEqualOperation = () => { 
    let result = splitNumbersAndOperators(scope.curValue);
    const firstNumber = result[0];
    const secondNumber = result[1];
    const operatorSymbol = result[2];
    if (secondNumber != -1) {
        switch (operatorSymbol) {
            case OPERATORS[0]:
                return Number(firstNumber + secondNumber);
            case OPERATORS[1]:
                const result = Number(firstNumber / secondNumber);
                return (result % 1 != 0) ? result.toFixed(4) : result;
            case OPERATORS[2]: 
                return Number(firstNumber * secondNumber);
            case OPERATORS[3]:
                return Number(firstNumber - secondNumber);
            default: 
                return firstNumber;
        }                    
    } else {
        return scope.curValue;
    }
}

export const calculatorOperation = (newValue, curValue, isOperator) => {
    scope.newValue = newValue;
    scope.curValue = curValue;
    scope.isOperator = isOperator;

    //LIMIT SCREEN LENGTH
    if (isValidScreenLimit()) return scope.curValue;

    //HANDLE OPERATOR
    if (isOperator) {
        if (newValue === 'AC'){ 
            return "0";
        }
        else if (newValue === '+/-' ) {
            return "-" + curValue;
        }
        else if (newValue === '=') { //Resolve operations
            return resolveEqualOperation();
        }
    } else {
        let result = splitNumbersAndOperators(curValue);
        const firstNumber = result[0];
        const secondNumber = (result[1] === -1) ? 0 : result[1];
        const operatorSymbol = result[2];

        if (operatorSymbol != -1) { //Not operator
            return firstNumber + operatorSymbol + String(Number(secondNumber + newValue));
        } else {
            return String(Number(firstNumber + newValue));            
        }
    }

    return curValue + newValue; 
}
