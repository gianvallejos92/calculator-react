const OPERATORS = ['+' , '÷', '*', '-'];

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

export const getCalculatorResult = (str) => {
    let result = splitNumbersAndSigns(str);

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