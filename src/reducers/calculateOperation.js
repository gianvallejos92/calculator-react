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
            restartScreenValueToZero();
            break;
        case 'CE':
            deleteLastDigitAction();
            break;
        case '%':
            calculatePercentAction();
            break;
        case '=':
            calculateEqualResult();
            break;
        default:
            handleDigitAction();
            break;
    }
}

function restartScreenValueToZero () {
    global.result = "0";
}

function deleteLastDigitAction () {
    global.result = new DeleteLastDigitAction(global.screenValue).result;
}

function calculatePercentAction () {
    global.result = new HandlePercentAction(global.screenValue).result;
}

function calculateEqualResult () {
    global.result = new HandleEqualAction(global.newValue, global.screenValue).result;
}

function handleDigitAction () {
    global.result = new HandleDigitAction(global.newValue, global.screenValue).result;
}
