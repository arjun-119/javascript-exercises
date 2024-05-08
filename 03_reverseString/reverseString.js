const reverseString = function(string) {
    let temp='';
    stringArray=string.split('');
    let n=string.length;
    for(let i=0;i<n/2;i++){
        temp=stringArray[i];
        stringArray[i]=stringArray[n-i-1];
        stringArray[n-i-1]=temp;
    }
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
