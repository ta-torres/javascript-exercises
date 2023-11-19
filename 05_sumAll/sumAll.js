const sumAll = function(startNum, endNum) {
    if (!Number.isInteger(startNum) || 
        !Number.isInteger(endNum) || 
        startNum < 0 || 
        endNum < 0) return "ERROR";

    if (startNum > endNum){
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }
    let sum = 0;
    for (; startNum <= endNum; startNum++) {
        sum += startNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
