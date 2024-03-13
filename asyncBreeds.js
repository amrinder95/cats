// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data); //FIRST instead of returning data, pass the data into the callback function
    if (error) functionToRunWhenThingsAreDone(undefined);
  });
}

//SECOND, instead of console logging at the bottom of the main thread, move it into a new function.
const breedInfo = breed => {
  console.log('Return Value: ', breed)
}

//THIRD, instead of assigning result to a value like before, call the function directly with the parameters breed and breedInfo to get the console log.

//When we call the function now, it will first console log calling readfile..., followed by fs.readfile executing, which will read the ${breed} file, and feed it into the callback function.

module.exports = breedInfo;
module.exports = breedDetailsFromFile;