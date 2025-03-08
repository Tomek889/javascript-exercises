const reverseString = function(string) {
    const stringArray = string.split('');
    let finalString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        finalString += stringArray[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
