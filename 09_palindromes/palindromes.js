const palindromes = function (string) {
    const noPunctuation = string.split('').filter((char) => !(
        char === ' ' || 
        char === '.' || 
        char === ',' || 
        char === '?' || 
        char === '!' ||
        char === '\''
    )).map((char) => char.toLowerCase());

    let len;
    if (noPunctuation.length % 2 === 1) {
        len = noPunctuation.length - 1;
    } else {
        len = noPunctuation.length;
    }

    for (let i = 0; i < len / 2; i++) {
        if (noPunctuation[i] !== noPunctuation[noPunctuation.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
