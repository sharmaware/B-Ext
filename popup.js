console.log("running popup.js");
console.log(document.getElementById('b_button'));
document.getElementById('b_button').onclick = function(element){
  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });
};
