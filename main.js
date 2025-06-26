var res = document.getElementById("res");
var urlInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");


generateButton.onclick = function() {
  var binaryString = convertToBinary(urlInput.value);
  res.textContent = binaryString;
  
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Way to change fill color --  ctx.fillStyle = rbgColor;
  
  ctx.fillStyle = "rgb(158, 158, 158)";
  ctx.fillRect(0, 0, 500, 500);
}
  

function convertToBinary(stringToConvert) {
  let encoder = new TextEncoder();
  var newLink = encoder.encode(stringToConvert);
  
  var resultString = "";
  
  for (let x = newLink.length; x >= 0; x--) {
    var currentVal = newLink[x];
    var binaryValue = "";
    
    // Section gotten from geeksforgeeks.org
    for (let j = 7; j >= 0; j--) {
      binaryValue += (currentVal >> j) & 1;
    }
    
    resultString += binaryValue + " ";
    // End of section 
  }
  return resultString;
}
