var res = document.getElementById("res");
var urlInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");
var canvas = document.getElementById('theCanvas');
var ctx = canvas.getContext("2d");

var quietZoneColor = "rgb(158, 158, 158)";
var quietZoneSize = 10; // How many pixels the border goes out from QR code

generateButton.onclick = function() {
  var binaryString = convertToBinary(urlInput.value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  // Way to change fill color --  ctx.fillStyle = rbgColor;
  
  ctx.fillStyle = quietZoneColor;
  ctx.fillRect(0, 0, 210 + quietZoneSize * 2, 210 + quietZoneSize * 2);
  
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(quietZoneSize, quietZoneSize, 210, 210);
  
  ctx.fillStyle = "rgb(0, 0, 0)";
  
  var qrArray = [];
  
  for (let b = 20; b >= 0; b--) {
    qrArray.push([]);
    for (let y = 20; y >= 0; y--) {
      qrArray[20- b].push(0);
    }
  }
  
  // Positioning Squares
  
  qrArray[0][0] = 1;
  qrArray[1][0] = 1;
  qrArray[2][0] = 1;
  qrArray[3][0] = 1;
  qrArray[4][0] = 1;
  qrArray[5][0] = 1;
  qrArray[6][0] = 1;
  qrArray[0][1] = 1;
  qrArray[6][1] = 1;
  qrArray[0][2] = 1;
  qrArray[2][2] = 1;
  qrArray[3][2] = 1;
  qrArray[4][2] = 1;
  qrArray[6][2] = 1;
  qrArray[0][3] = 1;
  qrArray[2][3] = 1;
  qrArray[3][3] = 1;
  qrArray[4][3] = 1;
  qrArray[6][3] = 1;
  qrArray[0][4] = 1;
  qrArray[2][4] = 1;
  qrArray[3][4] = 1;
  qrArray[4][4] = 1;
  qrArray[6][4] = 1;
  qrArray[0][5] = 1;
  qrArray[6][5] = 1;
  qrArray[0][6] = 1;
  qrArray[1][6] = 1;
  qrArray[2][6] = 1;
  qrArray[3][6] = 1;
  qrArray[4][6] = 1;
  qrArray[5][6] = 1;
  qrArray[6][6] = 1;

  makeQR(qrArray);
}

function makeQR(qrList) {
  var size = qrList[0].length;
  
  for (let t = 0; t <= size - 1; t++) {
    for (let v = 0; v <= size - 1; v++) {
      if (qrList[t][v] == 1) {
        fillSquare(t, v);
      }
    }
  }
  
}
  
function fillSquare(x, y) {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(quietZoneSize + 10 * x, quietZoneSize + 10 * y, 10, 10);
}

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
