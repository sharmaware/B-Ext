// console.log("content script being run");

var utfChar = "";
chrome.storage.sync.get('emoji', function(data){
  utfChar = data.emoji;

  var types = ['span', 'p' ,'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  for(var j =0; j<types.length; j++){
    var spanElements = document.getElementsByTagName(types[j]);
    for(var i = 0; i < spanElements.length; i++){
      var content = spanElements[i].innerHTML;
      console.log(content);

      if(content != undefined){
        console.log("content");
        if(!(content.indexOf('>') >= 0 || content.indexOf('<') >=0 )){
          console.log("content + safe");
          while(content.indexOf('b') >= 0){
            var replaceIndex = content.indexOf('b');
            content = content.substring(0,replaceIndex) + utfChar + content.substring(replaceIndex+1, content.length);
          }
          while(content.indexOf('B') >= 0){
            var replaceIndex = content.indexOf('B');
            content = content.substring(0,replaceIndex) + utfChar + content.substring(replaceIndex+1, content.length);
          }
          spanElements[i].innerHTML= content;
        }
      }
      else{
        // console.log(undefined);
      }
    }
  }
});
