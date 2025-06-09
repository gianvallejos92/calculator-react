const MAX_LENGTH = 20;

export default class HandleDigitAction {
    result = '';

    constructor(newValue, screenValue) {
        this.newValue = newValue;
        this.screenValue = screenValue;
        this.init();
    }

    init () {
        if (this.screenValue === "0") {
            this.assignNewValueToResult();        
        } else if (this.isValidScreenLimit()) {
            this.assignScreenValueToResult();
        } else {
            this.assignScreenValuePlusNewValueResult();        
        } 
    }

    assignNewValueToResult () {
        this.result = this.newValue;
    }

    isValidScreenLimit () {
        return this.screenValue && this.screenValue.length === MAX_LENGTH;
    }

    assignScreenValueToResult () {
        this.result = this.screenValue;
    }

    assignScreenValuePlusNewValueResult () {
        this.result = this.screenValue + this.newValue; 
    }

    
}