const removeFromArray = function(arr,...numbers) {
for(let n of numbers){
    let index= arr.indexOf(n);
    if(index==-1)
        continue;
    arr.splice(index,1);
    while(arr.indexOf(n)!==-1)
        arr.splice(arr.indexOf(n),1);
}
return arr;


};

// Do not edit below this line
module.exports = removeFromArray;
