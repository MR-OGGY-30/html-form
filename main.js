function initializeOutput() {
  var initialvalue=document.getElementById('age').value;
  document.getElementById('x').value=initialvalue;
}
//calling the function
window.onload = initializeOutput;
