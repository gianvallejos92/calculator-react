import { NUMBER_ACTION, OPERATOR_ACTION } from '../actions/types'

const MAX_LENGTH = 12;

const findLastZeroIndex = (init, str) => {    
    if (str[init] != '0') return init;
    let index = init + 1;
    while (index < str.length || !isNumber(str[index])) {
        if (str[index] != '0') return index;
        index++;
    }
    return -1;
}

const removeZeros = () => {
    
}

const convertToText = (value) => {
    return String(Number(value));    
}

const isNumber = (value) => {
    return Number(value) ? true : false;
}

const calculatorOperations = (value, curScreenValue, isOperator)  => {
    //LIMIT SCREEN LENGTH
    if (curScreenValue && curScreenValue.length === MAX_LENGTH) return curScreenValue;

    //HANDLE OPERATOR
    if (isOperator) {
        if (value === 'AC') return "0";
        if (value === '+/-' ) return "-" + curScreenValue;
        return curScreenValue + value;  
    }

    //HANDLE NUMBER
    if (isNumber(curScreenValue) && isNumber(value)) {
        return convertToText(curScreenValue + value);
    } else {
        return curScreenValue + value;
    }
}

const generalReducer = (state, action) => {
    switch (action.type) {
        case NUMBER_ACTION: 
            return {
                ...state,
                screenValue: calculatorOperations(action.value, state.screenValue, false)
            }
        case OPERATOR_ACTION:
            return {
                ...state,
                screenValue: calculatorOperations(action.value, state.screenValue, true)
            }
        default:
            return state;
    }
};

export default generalReducer;
