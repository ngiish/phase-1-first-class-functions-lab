// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array containing the above two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  function fare(){
    createFareMultiplier(integer)
  }
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  };
  
  // Example usage:
  const driversArray = ["John", "Jane", "Alice", "Bob"];
  console.log(returnFirstTwoDrivers(driversArray)); // Output: ["John", "Jane"]
  console.log(returnLastTwoDrivers(driversArray));  // Output: ["Alice", "Bob"]
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // Output: ["John", "Jane"]
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));  // Output: ["Alice", "Bob"]
  console.log(fareDoubler(10)); // Output: 20
  console.log(fareTripler(10)); // Output: 30
