var p = document.getElementById("tools-navigator");

var frame = document.getElementById("tool-frame");
var frameContent = frame.contentDocument;

p.onclick = function(event)
{
  if(event.target.nodeName == "A")
    frame.height = Math.max(frameContent.body.clientHeight, 170);
};

p.children[0].click();
