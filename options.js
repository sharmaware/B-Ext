document.getElementById("enterButton").onclick = function(element){
  var charUTF = document.getElementById("replaceCharBox").value;
  chrome.storage.sync.set({emoji: charUTF}, function() {
    console.log("The new emoji has been stored.");
  });
}
