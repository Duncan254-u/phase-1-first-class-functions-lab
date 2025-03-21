const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);

}
function fetchSpecifiedDrivers(drivers, fn) {
    return fn(drivers);
}