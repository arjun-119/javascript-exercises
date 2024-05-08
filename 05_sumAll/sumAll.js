const sumAll = function(numStart,numEnd) {
    let total=0;

    if(numStart<0||numEnd<0)
        return "ERROR"; 

    else if(!Number.isInteger(numStart)||!Number.isInteger(numEnd))
        return 'ERROR';

    else if( numStart<numEnd)
        for( let i=numStart;i<=numEnd;i++)
            total+=i;

    else if( numStart>numEnd)
        for(let i =numEnd;i<=numStart;i++)
            total+=i;
return total;

};

// Do not edit below this line
module.exports = sumAll;
