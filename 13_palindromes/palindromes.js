const palindromes = function (testString) {
    
    let cleanedString = testString.replace(/[\s,.!]/g, '');
    cleanedString = cleanedString.toLowerCase();
    let reversedString = cleanedString.split('').reverse().join('');
    
    if (reversedString == cleanedString) {
        return true;
    } else {
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;
