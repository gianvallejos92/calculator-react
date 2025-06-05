import DivideNumbersAndOperators from './DivideNumbersAndOperators';

/*
const splitNumbersAndSigns = (str) => {
    let lastInit = 0;
    let numbers = [];
    let operators = [];
    let error = false;
    for (let ind = 0; ind < str.length; ind++) {
        if (OPERATORS.includes(str[ind])) {
            if (!itsNegativeSign(str, ind)) {
                let possibleNumber = str.slice(lastInit, ind); //Cut from last index to current operator - 1
                if (!Number(possibleNumber)) { //Evaluate if the possible number cut is not number
                    error = true;
                    return {
                        "numbers": ['error'],
                        "operators": ['error']
                    }
                }
                numbers.push(Number(possibleNumber)); //Add new number
                operators.push(str[ind]); //Add operator
                lastInit = ind + 1; //update new index of next operator
            }
        }
    }

    //Find number after last operator
    if(!error && lastInit != 0) {
        let possibleNumber = str.slice(lastInit);
        if (!Number(possibleNumber)) { //Evaluate if the possible number cut is not number
            return {
                "numbers": ['error'],
                "operators": ['error']
            }
        }
        numbers.push(Number(possibleNumber));
    }
    return {numbers, operators}
}

const itsNegativeSign = (str, ind) => {
    if (ind === 0 && ind + 1 != str.length && Number(str[ind+1])) return true;
    if (ind > 0 && ind + 1 != str.length && Number(str[ind+1]) && OPERATORS.includes(str[ind-1])) return true;
    return false;
}
*/

export const calculateResult = (str) => {
    let result = new DivideNumbersAndOperators(str).result;

    console.log('Result: ' + result + ' ' + JSON.stringify(result));

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
