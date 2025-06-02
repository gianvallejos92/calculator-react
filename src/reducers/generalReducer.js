import { NUMBER_ACTION, OPERATOR_ACTION } from '../actions/types'
import { calculatorOperation } from './calculateOperation'

const generalReducer = (state, action) => {
    switch (action.type) {
        case NUMBER_ACTION: 
            return {
                ...state,
                screenValue: calculatorOperation(action.value, state.screenValue, false)
            }
        case OPERATOR_ACTION:
            return {
                ...state,
                screenValue: calculatorOperation(action.value, state.screenValue, true)
            }
        default:
            return state;
    }
};

export default generalReducer;
