import DeleteLastDigitAction from './classes/DeleteLastDigitAction';
import HandlePercentAction from './classes/HandlePercentAction';
import HandleEqualAction from './classes/HandleEqualAction/HandleEqualAction';
import HandleDigitAction from './classes/HandleDigitAction';

const global = {
    newValue: '',
    screenValue: '',
    result: ''
}

export const calculatorOperation = (newValue, curValue) => {
    assignGlobalParameters(newValue, curValue);
    calculateInsertedCommand(); 
    return global.result;
}

const assignGlobalParameters = (newValue, curValue) => {
    global.newValue = newValue;
    global.screenValue = curValue;
}

function calculateInsertedCommand () {
    switch (global.newValue) {
        case 'AC': 
            global.result = "0";
            break;
        case 'CE':
            global.result = new DeleteLastDigitAction(global.screenValue).result;
            break;
        case '%':
            global.result = new HandlePercentAction(global.screenValue).result;
            break;
        case '=':
            global.result = new HandleEqualAction(global.newValue, global.screenValue).result;
            break;
        default:
            global.result = new HandleDigitAction(global.newValue, global.screenValue).result;
            break;
    }
}
