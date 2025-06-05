import { calculateResult } from './calculateResult';

export default class HandleEqualAction {
    
    result = '';

    constructor(newValue, screenValue) {
        this.newValue = newValue;
        this.screenValue = screenValue;
        this.calculateEqualResult();
    }

    calculateEqualResult () {
        if (this.isScreenValueZero() ) {
            this.restartScreenValueToZero();
        } else if (this.isNotAScreenValueNumber()) {
            this.assignCalculatedResult();        
        } else {
            this.assignScreenValueToResult();
        }
    }

    isScreenValueZero () { //Helper
        return this.screenValue === "0" ? true : false;
    }

    restartScreenValueToZero () { //Helper
        this.result = "0";
    }

    isNotAScreenValueNumber () {
        return Number(this.screenValue) ? false : true;
    }

    assignCalculatedResult () {
        this.result = calculateResult(this.screenValue);
    }

    assignScreenValueToResult () { //Helper
        this.result = this.screenValue;
    }

    
}