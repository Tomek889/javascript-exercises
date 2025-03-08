const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 <= 0 || num2 <= 0) {
       return 'ERROR' 
    }

    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    } else if (num1 === num2) {
        return num1 * 2;
    }

    let sum = 0;
    
    for (;num1 <= num2; num1++) {
        sum += num1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
