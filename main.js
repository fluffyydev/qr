var res = document.getElementById("res");
var urlInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");
var canvas = document.getElementById('theCanvas');
var ctx = canvas.getContext("2d");

var quietZoneColor = "rgb(158, 158, 158)";
var quietZoneSize = 10; // How many pixels the border goes out from QR code

var qrArray = [];

generateButton.onclick = function() {
  var binaryString = convertToBinary(urlInput.value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  // Way to change fill color --  ctx.fillStyle = rbgColor;
  
  ctx.fillStyle = quietZoneColor;
  ctx.fillRect(0, 0, 210 + quietZoneSize * 2, 210 + quietZoneSize * 2);
  
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(quietZoneSize, quietZoneSize, 210, 210);
  
  ctx.fillStyle = "rgb(0, 0, 0)";
  
  qrArray = [];
  
  for (let b = 20; b >= 0; b--) {
    qrArray.push([]);
    for (let y = 20; y >= 0; y--) {
      qrArray[20 - b].push("");
    }
  }
  
  
  makePosSq(0, 0);
  makePosSq(14, 0);
  makePosSq(0, 14);
  
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
  

function makePosSq(startX, startY) {
  for (let time = 0; time <= 6; time += 6) {
    for (let square = startX; square <= startX + 6; square++) {
      qrArray[square][startY + time] = 1;
    }
  }

  for (let row = startY + 2; row <= startY + 4; row++) {
    for (let square = startX; square <= startX + 6; square++) {
      if (square <= startX + 6 || square >= startX - 1) {
        if (square != startX + 1 && square != startX + 5) {
          qrArray[square][row] = 1;
        }
      }
    }
  }
  qrArray[startX][startY + 1] = 1;
  qrArray[startX + 6][startY + 1] = 1;
  qrArray[startX + 6][startY + 5] = 1;
  qrArray[startX][startY + 5] = 1;
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
