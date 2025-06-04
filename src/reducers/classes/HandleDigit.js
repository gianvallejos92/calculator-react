const MAX_LENGTH = 20;

export default class HandleDigit {
    result = '';

    constructor(newValue, screenValue) {
        this.newValue = newValue;
        this.screenValue = screenValue;
        this.handleNewDigit();
    }

    get result () {
        return this.result;
    }

    isValidScreenLimit () {
        return this.screenValue && this.screenValue.length === MAX_LENGTH;
    }

    assignNewValueToResult () {
        this.result = this.newValue;
    }

    assignScreenValueToResult () {
        this.result = this.screenValue;
    }

    assignScreenValuePlusNewValueResult () {
        this.result = this.screenValue + this.newValue; 
    }

    handleNewDigit () {
        if (this.screenValue === "0") {
            this.assignNewValueToResult();        
        } else if (this.isValidScreenLimit()) {
            this.assignScreenValueToResult();
        } else {
            this.assignScreenValuePlusNewValueResult();        
        } 
    }
}