import { BTN_ACTION } from '../actions/types'
import { calculatorOperation } from './calculateOperation'

const generalReducer = (state, action) => {
    switch (action.type) {
        case BTN_ACTION: 
            return {
                ...state,
                screenValue: calculatorOperation(action.value, state.screenValue)
            }
        default:
            return state;
    }
};

export default generalReducer;
