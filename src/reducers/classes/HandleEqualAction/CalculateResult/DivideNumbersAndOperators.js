import EvaluateNegativeSign from './EvaluateNegativeSign';

const OPERATORS = ['+' , '÷', '*', '-'];

export default class DivideNumbersAndOperators {    
    numbers = [];
    operators = [];
    lastIndexToCut = 0;
    curIndex = 0;
    error = false;

    constructor (str) {
        this.str = str;
        this.init();
    }

    init () {
        this.splitValuesUntilLastOperator();       
        this.getValueAfterLastOperator(); 
        this.handleErrors();  
    }

    splitValuesUntilLastOperator () {
        for (let ind = 0; ind < this.str.length; ind++) {
            this.curIndex = ind;
            if (this.isValidOperator()) {
                this.generateNumberAndOperator();
            }
        }
        this.curIndex = this.str.length;
    }

    isValidOperator () {
        return (this.isIndexAnOperator() && this.isNotTheCurrentSignNegative() && !this.error) ? true : false;
    }

    isIndexAnOperator () {
        return (OPERATORS.includes(this.str[this.curIndex])) ? true : false;
    }

    isNotTheCurrentSignNegative () {
        return new EvaluateNegativeSign(this.str, this.curIndex).isTheCurrentSignNotNegative();
    }

    getValueAfterLastOperator () {
        if(!this.error && this.lastIndexToCut != 0) {
            this.curIndex = this.str.length;
            this.generateNumberAndOperator();
        }
    }

    generateNumberAndOperator () { 
        let possibleNumber = this.cutStringFromBeginToEnd(this.lastIndexToCut, this.curIndex);
        if (this.isNotNumber(possibleNumber)) {
            this.error = true;
        } else {            
            this.numbers.push(Number(possibleNumber));
            if (this.curIndexIsNotEndOfString()) {
                this.operators.push(this.str[this.curIndex]);
                this.lastIndexToCut = this.curIndex + 1;
            }
        }
    }

    cutStringFromBeginToEnd (begin, end) {
        return this.str.slice(begin, end);
    }

    isNotNumber (value) {
        return !Number(value) ? true : false;
    }

    curIndexIsNotEndOfString () {
        return (this.curIndex !== this.str.length) ? true : false; 
    }

    handleErrors() {
        if (this.error) {
            this.numbers.push('error');
            this.operators.push('error'); 
        }
    }

    get result () {
        return {
            "numbers": this.numbers, 
            "operators": this.operators
        }
    }

}