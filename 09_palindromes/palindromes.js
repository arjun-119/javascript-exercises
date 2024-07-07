const palindromes = function (string) {
noSpaceWord = string.toLowerCase().replace(/[^a-z0-9]/g,'');
reversed = noSpaceWord.split('').reverse().join('');
return noSpaceWord == reversed;


};

// Do not edit below this line
module.exports = palindromes;
