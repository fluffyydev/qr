var res = document.getElementById("res");
var urlInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");


generateButton.onclick = function() {
  var link = urlInput.value;
  
  let encoder = new TextEncoder();
  link = encoder.encode(link);
  res.textContent = newLink;
  
}

function convertToBytes() {
  
}
