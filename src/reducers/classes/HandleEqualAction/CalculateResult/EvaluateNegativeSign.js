const OPERATORS = ['+' , '÷', '*', '-'];

export default class EvaluateNegativeSign {

    constructor (str, index) {
        this.str = str;
        this.curIndex = index;
    }

    isTheCurrentSignNotNegative () {
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

}