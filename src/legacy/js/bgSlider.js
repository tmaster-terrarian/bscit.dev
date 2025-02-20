var slider = document.getElementById("bgRange");
var bg = document.body;
var bg2 = document.getElementById("tabholder");

function getCookie(cname)
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++)
  {
    let c = ca[i];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var bga = bg.getAnimations()[0];
bga.playbackRate = (getCookie("bgspeed") != "") ? Number(getCookie("bgspeed")) : 1;
slider.value = (getCookie("bgspeed") != "") ? Number(getCookie("bgspeed")) * 100 : 100;

if(bg2)
{
  var bga2 = bg2.getAnimations()[0];
  bga2.playbackRate = (getCookie("bgspeed") != "") ? Number(getCookie("bgspeed")) : 1;
}

slider.oninput = function()
{
  bga = bg.getAnimations()[0];
  const val = slider.value / 100;
  bga.playbackRate = val;
  document.cookie = "bgspeed=" + val + ";path=/";

  if(bg2)
  {
    var bga2 = bg2.getAnimations()[0];
    bga2.playbackRate = val;

    if(slider.value == 0)
    {
      bga2.currentTime = 0;
    }
  }

  if(slider.value == 0)
  {
    bga.currentTime = 0;
  }
}
