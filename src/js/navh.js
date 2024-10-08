window.onload = function()
{
  var nav = document.getElementById("navigator");
  nav.querySelector(`[href='${window.location.pathname}']`).className = "activepage";

  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href === window.location.pathname) {
          document.links[i].className = 'activepage';
      }
  }
};
