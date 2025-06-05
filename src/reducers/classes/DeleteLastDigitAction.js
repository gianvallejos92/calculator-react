export default class DeleteLastDigitAction {

    result = '';

    constructor(screenValue) {
        this.screenValue = screenValue;
        this.init();
    }

    init () {
        if (this.isScreenValueZero()) {
            this.result = "0";
        } else {
            this.deleteLastDigit();        
        }
    }

    isScreenValueZero () {
        return (this.screenValue === "0") || (this.screenValue.length === 1) ? true : false;
    }

    deleteLastDigit() {
        const value = String(this.screenValue);
        const screenValueSize = value.length - 1;
        this.result = value.slice(0, screenValueSize);
    }

    
}
