import { CalculateResult } from "./CalculateResult/calculateResult";

export default class HandleEqualAction {
    
    result = '';

    constructor(newValue, screenValue) {
        this.newValue = newValue;
        this.screenValue = screenValue;
        this.init();
    }

    init () {
        if (this.isScreenValueZero() ) {
            this.restartScreenValueToZero();
        } else if (this.isNotAScreenValueNumber()) {
            this.assignCalculatedResult();        
        } else {
            this.assignScreenValueToResult();
        }
    }

    isScreenValueZero () {
        return this.screenValue === "0" ? true : false;
    }

    restartScreenValueToZero () {
        this.result = "0";
    }

    isNotAScreenValueNumber () {
        return Number(this.screenValue) ? false : true;
    }

    assignCalculatedResult () {
        this.result = CalculateResult(this.screenValue);
    }

    assignScreenValueToResult () {
        this.result = this.screenValue;
    }

    
}