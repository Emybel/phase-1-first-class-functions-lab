// Code your solution in this file!

const returnFirstTwoDrivers = (function(scuberDrivers){
    return [scuberDrivers[0], scuberDrivers[1]]
})
returnFirstTwoDrivers (['Antonia', 'Nuru', 'Amari', 'Mo'])

const  returnLastTwoDrivers = (function(scuberDrivers){
    return [scuberDrivers[(scuberDrivers.length) -2], scuberDrivers[(scuberDrivers.length)-1]]
})
returnLastTwoDrivers (['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return int*fare}
}

const fareDoubler = createFareMultiplier(2) 
createFareMultiplier()

const fareTripler = createFareMultiplier(3) 
createFareMultiplier()

function selectDifferentDrivers(arrayOfDrivers,cb){
    if (cb === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(arrayOfDrivers);
    else if (cb === returnLastTwoDrivers)
    return returnLastTwoDrivers(arrayOfDrivers);
    else false;
}