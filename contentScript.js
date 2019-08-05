// console.log("content script being run");


chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

console.log('hi');
// var types = ['span', 'p']
var spanElements = document.getElementsByTagName("span");
console.log(spanElements.length);
console.log(spanElements[1].innerHTML);
console.log(spanElements[1].class);

for(var i = 0; i < spanElements.length; i++){

  var content = spanElements[i].innerHTML;
  console.log(content);


  if(content != undefined){
    console.log("content");
    if(!(content.indexOf('>') > 0 || content.indexOf('<') >0 )){
      console.log("content + safe");
      while(content.indexOf('b') > 0){
        var replaceIndex = content.indexOf('b');
        content = content.substring(0,replaceIndex) + "&#x1f171" + content.substring(replaceIndex+1, content.length);
      }
      spanElements[i].innerHTML= content;
    }
  }
  else{
    // console.log(undefined);
  }
}



chrome.runtime.sendMessage({greeting: "content", span: spanElements}, function(response) {
  console.log(response.farewell);
});
