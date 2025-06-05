import DivideNumbersAndOperators from './DivideNumbersAndOperators';

export const calculateResult = (str) => {
    const { numbers, operators } = new DivideNumbersAndOperators(str).result;

    if (numbers.length != operators.length + 1) return "error";

    const count = operators.reduce((acc, curValue, curIndex) => {
        let res = numbers[0];
        switch (curValue) {
            case '+':
                res = acc + numbers[curIndex+1];
                break;
            case '-':
                res = acc - numbers[curIndex+1];
                break;
            case '*':
                res = acc * numbers[curIndex+1];
                break;
            case '÷':
                res = acc / numbers[curIndex+1];
                break;
            default:
                break;
        }
        return res;
    }, numbers[0]);

    return count;
}
