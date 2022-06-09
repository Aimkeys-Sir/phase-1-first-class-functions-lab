// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//select
//first two
function returnFirstTwoDrivers(array)
{
    return array.slice(0,2)
}
//last two
function returnLastTwoDrivers(array)
{
    return array.slice(2,4)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

console.log(selectingDrivers[1])

function createFareMultiplier(value)
{
    return  function fareMultiplier()
    {
        return value*value;
    }
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare)
{
    return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers,aFunction)
{
    return aFunction(arrayOfDrivers);
}



