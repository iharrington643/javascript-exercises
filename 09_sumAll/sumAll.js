const sumAll = function(firstNum, lastNum) {
    finalSum = 0;

    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }

    if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            finalSum += i;
        }
    } else {
        for (let i = firstNum; i >= lastNum; i--) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
