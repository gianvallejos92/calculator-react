import { ONE_BTN, TWO_BTN, THREE_BTN } from '../actions/types'

const generalReducer = (state, action) => {
    switch (action.type) {
        case ONE_BTN: 
            return {
                ...state,
                screenValue: state.screenValue + "1"
            };
        case TWO_BTN: 
            return {
                ...state,
                screenValue: state.screenValue + "2"
            };
        case THREE_BTN: 
            return {
                ...state,
                screenValue: state.screenValue + "3"
            };
        default:
            return state;
    }
};

export default generalReducer;
