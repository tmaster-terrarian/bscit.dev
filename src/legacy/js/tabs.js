var colors = ['#004731', '#53003b', '#250069'];

function openTab(evt, tabName) {
  // Declare all variables
  var i, j, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    if (tabcontent[i] == document.getElementById(tabName))
    {
      j = i;
    }
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  var bg = document.getElementById("tabholder");
  bg.style.backgroundColor = colors[j];
  evt.currentTarget.className += " active";
  if(window.history.replaceState)
  {
    window.history.replaceState({}, null, `${window.location.href.replace(window.location.search, "")}?tab=${tabName.replace("tab", "")}`);
  }
  else if(document.location.search != `?tab=${tabName.replace("tab", "")}`)
  {
    document.location.search = "tab=" + tabName.replace("tab", "");
  }
}

function closeTabs(evt)
{
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++)
  {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++)
  {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
}
