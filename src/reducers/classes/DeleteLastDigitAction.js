export default class DeleteLastDigitAction {

    result = '';

    constructor(screenValue) {
        this.screenValue = screenValue;
        this.deleteLastDigitAction();
    }

    deleteLastDigitAction () {
        if (this.isScreenValueZero() || this.existOneDigitOnScreen()) {
            this.restartScreenValueToZero();
        } else {
            this.deleteLastDigit();        
        }
    }

    isScreenValueZero () { //Helper
        return this.screenValue === "0" ? true : false;
    }

    existOneDigitOnScreen () {
        return (this.screenValue.length === 1) ? true : false;
    }

    restartScreenValueToZero () { //Helper
        this.result = "0";
    }

    deleteLastDigit() {
        const value = String(this.screenValue);
        this.result = value.slice(0, value.length - 1);
    }

    
}
