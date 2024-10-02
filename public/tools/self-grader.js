//thanks stack overflow
function interpolateColor(c0, c1, f){
    c0 = c0.match(/.{1,2}/g).map((oct)=>parseInt(oct, 16) * (1-f));
    c1 = c1.match(/.{1,2}/g).map((oct)=>parseInt(oct, 16) * f);
    let ci = [0,1,2].map(i => Math.min(Math.round(c0[i]+c1[i]), 255));
    return ci.reduce((a,v) => ((a << 8) + v), 0).toString(16).padStart(6, "0");
}

// create a variable that grabs the export button
var exportBtn = document.getElementById("exportImage");
var slider = document.getElementById("slider");
var outputSpan = document.getElementById("output");

var grade = "A";

slider.oninput = function()
{
  if(slider.value < 60) grade = "F";
  else if(slider.value < 63) grade = "D-";
  else if(slider.value < 67) grade = "D";
  else if(slider.value < 70) grade = "D+";
  else if(slider.value < 73) grade = "C-";
  else if(slider.value < 77) grade = "C";
  else if(slider.value < 80) grade = "C+";
  else if(slider.value < 83) grade = "B-";
  else if(slider.value < 87) grade = "B";
  else if(slider.value < 90) grade = "B+";
  else if(slider.value <= 93) grade = "A-";
  else if(slider.value <= 97) grade = "A";
  else if(slider.value <= 100) grade = "A+";
  outputSpan.innerHTML = slider.value + "% " + grade;
  
  var c = interpolateColor('a31f15', '32ab3a', slider.value / 100)
  slider.style.setProperty('--handle-color', '#' + c);
};

// add a click listener to the button
exportBtn.addEventListener("click", exportClick);

// this is the function which runs when the export button is clicked
// I could put the export functions in here, but to keep things tidy I made a new function for it and execute it from within this function.
function exportClick(e) {
  // prevent default event actions
  e.preventDefault();
  // execute the convert2image function
  convert2image();
}


/* The below function will throw an error of the DOM-to-Image script is not included. 
Read the instructions for more information. */
function convert2image() {
  domtoimage
    // make sure this ID matches the ID of the area you want to export
    .toPng(document.getElementById("exportArea"))
      .then(function (dataUrl) {
      // this actually makes the download "happen"
      var link = document.createElement("a");
      // you can name the file whatever you'd like
      // this is the file the user sees when downloading
      link.download = "self-grader-export.png";
      link.href = dataUrl;
      link.click();
    });
}
