// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes(drivers) {
  return drivers.map( function (driver) {
         firstLast = driver.split(" ")
         return { firstName: firstLast[0], lastName: firstLast[1] };
    });
}

function attributesToPhrase(drivers) {
  return drivers.map( function (driver) {
     return `${driver.name} is from ${driver.hometown}`;
  });
}
