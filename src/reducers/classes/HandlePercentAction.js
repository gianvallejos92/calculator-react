const PERCENT_NUMBER = 100;

export default class HandlePercentAction {
    result = '';

    constructor(screenValue) {
        this.screenValue = screenValue;
        this.init();
    }

    init () {
        if (this.isScreenValueNumber()) {
            this.calculatePercent();        
        } else {            
            this.assignScreenValueToResult();
        }
    }

    isScreenValueNumber () {
        return Number(this.screenValue) ? true : false;
    }

    calculatePercent () {
        this.result = String(Number(this.screenValue) / PERCENT_NUMBER);
    }

    assignScreenValueToResult () {
        this.result = this.screenValue;
    }

    
}