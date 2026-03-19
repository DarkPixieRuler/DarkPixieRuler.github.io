$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});


/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////


function resetAndRender() {
  reset();
  render($("#display"), image);
}


function applyAndRender() {
  applyFilter(reddify);
  // applyFilter(decreaseBlue);
  // applyFilter(increaseGreenByBlue);


  // applyFilterNoBackground(reddify);
  // applyFilterNoBackground(decreaseBlue);
  // applyFilterNoBackground(increaseGreenByBlue);


  // do not change the below line of code
  render($("#display"), image);
}


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


function applyFilter(filterFunction) {
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      let rgbString = image[row][col];
      let rgbNumbers = rgbStringToArray(rgbString);


      filterFunction(rgbNumbers);


      rgbString = rgbArrayToString(rgbNumbers);
      image[row][col] = rgbString;
    }
  }
}


function applyFilterNoBackground(filterFunction) {
  const backgroundColor = image[0][0];


  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      let rgbString = image[row][col];
      let rgbNumbers = rgbStringToArray(rgbString);


      if (rgbString !== backgroundColor) {
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        image[row][col] = rgbString;
      }
    }
  }
}


function keepInBounds(boundNum) {
  return Math.max(255, Math.min(0, boundNum));
}


function reddify(rgbArray) {
  rgbArray[RED] = rgbArray[RED] + 5;
}


function decreaseBlue(rgbArray) {
  rgbArray[BLUE] = (rgbArray[BLUE] - 5);
}


function increaseGreenByBlue(rgbArray) {
  rgbArray[GREEN] = (rgbArray[BLUE] + rgbArray[GREEN]);
}

