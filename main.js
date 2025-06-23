const res = document.querySelector(".res");

function byteEncode(stringToEncode) {
  const textEncoder = new TextEncoder();
  
  textEncoder.encode(stringToEncode);
}

var newRes = byteEncode("Hello");

res.textContent = newRes;
