import { getCalculatorResult } from './getCalculatorResult';
import HandleDigit from './classes/HandleDigit';

const PERCENT_NUMBER = 100;

let global = {
    newValue: '',
    screenValue: '',
    isOperator: false,
    result: ''
}

function restartScreenValueToZero () { //Helper
    global.result = "0";
}

function isZero (value) { //Helper
    return value === "0" ? true : false;
}

function assignScreenValueToResult () { //Helper
    global.result = global.screenValue;
}

/* DELETE LAST DIGIT ACTION */
function existOneDigitOnScreen () {
    return (global.screenValue.length === 1) ? true : false;
}

function deleteLastDigit() {
    const value = String(global.screenValue);
    global.result = value.slice(0, value.length - 1);
}

function deleteLastDigitAction () {
    if (isZero(global.screenValue) || existOneDigitOnScreen()) {
        restartScreenValueToZero();
    } else {
        deleteLastDigit();        
    }
}
/* END DELETE LAST DIGIT ACTION */

function isScreenValueNumber () {
    return Number(global.screenValue) ? true : false;
}

/* CALCULATE PERCENT ACTION */
function calculatePercent () {
    global.result = String(Number(global.screenValue) / PERCENT_NUMBER);
}

function calculatePercentAction () {
    if (isScreenValueNumber()) {
        calculatePercent();        
    } else {
        assignScreenValueToResult();
    }
}
/* END CALCULATE PERCENT ACTION */

/* CALCULATE EQUAL RESULT ACTION */
function assignCalculatedResult () {
    global.result = getCalculatorResult(global.screenValue);
}

function calculateEqualResult () {
    if (isZero(global.screenValue) ) {
        restartScreenValueToZero();
    } else if (!isScreenValueNumber()) {
        assignCalculatedResult();        
    } else {
        assignScreenValueToResult();
    }
}
/* END CALCULATE EQUAL RESULT ACTION */


function handleDigitAction () {
    const hd = new HandleDigit(global.newValue, global.screenValue);
    global.result = hd.result;
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

const assignGlobalParameters = (newValue, curValue) => {
    global.newValue = newValue;
    global.screenValue = curValue;
}

export const calculatorOperation = (newValue, curValue) => {
    assignGlobalParameters(newValue, curValue);
    calculateInsertedCommand(); 
    return global.result;
}
