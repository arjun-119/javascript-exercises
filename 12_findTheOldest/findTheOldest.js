const findTheOldest = function(arr) {
    let ages = arr.map(item=> {
        if(item.yearOfDeath!== undefined)
            return item.yearOfDeath - item.yearOfBirth;
        else
           return 2024 - item.yearOfBirth;
        });
    let personIndex = highest(ages);
    return arr[personIndex];
};

function highest(array){
    let high = array[0];
    for(let i=1;i<array.length;i++)
        if(array[i]>high)
            high = array[i];
    return array.indexOf(high);
}

// Do not edit below this line
module.exports = findTheOldest;
