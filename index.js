// Code your solution here
function findMatching(array,query) {
    return array.filter(function(drivers) {
        return drivers.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

function fuzzyMatch(array,query) {
    return array.filter(function(driverLetters) {
        return driverLetters.indexOf(query) !==-1 
        && 
        driverLetters.slice(2, driverLetters.length).indexOf(query) === -1
    })
}

function matchName(drivers,enteredName) {
    return drivers.filter(function(driver){
        return driver.name === enteredName
    })
}