chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({emoji: '&#xfe0f'}, function() {
    console.log("The emoji has been stored.");
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello"){
      console.log("message in background.js recieved");
      sendResponse({farewell: "goodbye"});
    }
    else if (request.greeting == "content") {
      console.log("content being read");
      sendResponse({farewell: "goodbye"});
    }
  });
