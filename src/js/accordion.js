var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++)
{
  var panel = acc[i].nextElementSibling;
  var bottom = panel.children[panel.children.length - 1];
  
  bottom.style.transitionDuration = "0";
  bottom.style.bottom = panel.scrollHeight + "px";
  
  acc[i].addEventListener("click", function()
  {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    var bottom = panel.children[panel.children.length - 1];
    var ico = this.children[0];
    if(!this.classList.contains('active'))
    {
      panel.style.maxHeight = 0;
      bottom.style.bottom = panel.scrollHeight + "px";
      ico.style.transform = "rotate(0deg)";
    }
    else
    {
      panel.style.maxHeight = panel.scrollHeight + "px";
      bottom.style.bottom = 0;
      ico.style.transform = "rotate(180deg)";
    }
  });
}

setTimeout(() => { fixPos(acc, "0.2s"); }, 200);

function fixPos(element, oldTime)
{
  for (var i = 0; i < element.length; i++)
  {
    var panel = element[i].nextElementSibling;
    var bottom = panel.children[panel.children.length - 1];
    
    bottom.style.transitionDuration = oldTime;
  }
}
