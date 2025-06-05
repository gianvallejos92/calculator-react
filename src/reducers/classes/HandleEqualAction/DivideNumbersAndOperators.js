const OPERATORS = ['+' , '÷', '*', '-'];

export default class DivideNumbersAndOperators {    
    result = {};

    numbers = [];
    operators = [];

    lastIndexToCut = 0;
    curIndex = 0;
    possibleNumber = 0;

    error = false;

    constructor (str) {
        this.str = str;
        this.exec();
    }

    exec () {
        this.splitValuesUntilLastOperator();        
        this.getNumberAfterLastOperator();
        this.setErrors();           
        this.updateResult();
    }

    splitValuesUntilLastOperator () {
        for (let ind = 0; ind < this.str.length; ind++) {
            this.curIndex = ind;
            if (this.isIndexAnOperator()) {
                if (this.isTheCurrentSignNotNegative()) {
                    this.getNewNumberAndOperator();
                    if (this.error) break;
                }
            }
        }
    }

    getNumberAfterLastOperator () {
        if(!this.error && this.lastIndexToCut != 0) {
            this.cutStringFromBeginToEndToPossibleNumber(this.lastIndexToCut, this.str.length);
            this.evaluateIfTheNewValueIsANumber();
            if (!this.error) {
                this.pushValueToNumbers(Number(this.possibleNumber));
            }
        }
    }

    setErrors() {
        if (this.error) {
            this.pushValueToNumbers('error');
            this.pushValueToOperators('error'); 
        }
    }

    updateResult () {
        this.result = {
            "numbers": this.numbers, 
            "operators": this.operators
        };
    }

    /* END */
    
    getNewNumberAndOperator () {        
        this.cutStringFromBeginToEndToPossibleNumber(this.lastIndexToCut, this.curIndex);
        this.evaluateIfTheNewValueIsANumber();
        if (!this.error) {            
            this.pushValueToNumbers(Number(this.possibleNumber));
            this.pushValueToOperators(this.str[this.curIndex]);
            this.updateLastIndexToCutWithCurrentIndexPlusOne();
        }
    }

    cutStringFromBeginToEndToPossibleNumber (begin, end) {
        this.possibleNumber = this.str.slice(begin, end);
    }

    evaluateIfTheNewValueIsANumber () {
        if (!Number(this.possibleNumber)) { //Evaluate if the possible number cut is not number
            this.error = true;
        }
    }

    pushValueToNumbers (value) {
        this.numbers.push(value); //Add new number
    }

    pushValueToOperators (value) {
        this.operators.push(value); //Add operator
    }

    updateLastIndexToCutWithCurrentIndexPlusOne () {
        this.lastIndexToCut = this.curIndex + 1;
    }

    isIndexAnOperator () {
        return (OPERATORS.includes(this.str[this.curIndex])) ? true : false;
    }

    //CLASS
    isTheCurrentSignNotNegative = () => {
        if (this.isCurrentIndexZero() && this.isNotLastIndex() && this.isNextIndexANumber()) return false;
        if (this.isCurrentIndexHigherThanZero() && this.isNotLastIndex() && this.isNextIndexANumber() && this.isPreviousIndexAnOperator()) return false;
        return true;
    }

    isCurrentIndexZero () {
        return (this.curIndex === 0) ? true : false;
    }

    isNotLastIndex () {
        return (this.curIndex + 1 != this.str.length) ? true : false;
    }

    isNextIndexANumber () {
        return (Number(this.str[this.curIndex+1])) ? true : false;
    }

    isCurrentIndexHigherThanZero () {
        return (this.curIndex > 0) ? true : false;
    }

    isPreviousIndexAnOperator () {
        return OPERATORS.includes(this.str[this.curIndex-1]) ? true : false;
    }
    //END CLASS


}