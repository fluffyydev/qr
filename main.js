var res = document.getElementById("res");
var urlInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");

var quietZoneColor = "rgb(158, 158, 158)";
var quietZoneSize = 10; // How many pixels the border goes out from QR code

generateButton.onclick = function() {
  var binaryString = convertToBinary(urlInput.value);
  res.textContent = binaryString;
  
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  // Way to change fill color --  ctx.fillStyle = rbgColor;
  
  ctx.fillStyle = quietZoneColor;
  ctx.fillRect(0, 0, 210 + quietZoneSize * 2, 210 + quietZoneSize * 2);
  
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(quietZoneSize, quietZoneSize, 210, 210);
  
  ctx.fillStyle = "rgb(0, 0, 0)";
  
  var qrArray = [];
  
  var emptyRow = [];
    
  for (let y = 20, y >= 0, y--) {
    emptyRow.push(0);
  }
  
  for (let b = 20, b >= 0, b--) {
    qrArray.push(emptyRow);
  }
  
  res.textContent = binaryString;
  
  // Positioning Squares
  
  
  
}
  
function fillSquare(x, y) {}

function convertToBinary(stringToConvert) {
  let encoder = new TextEncoder();
  var newLink = encoder.encode(stringToConvert);
  
  var resultString = "";
  
  for (let x = newLink.length - 1; x >= 0; x--) {
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
