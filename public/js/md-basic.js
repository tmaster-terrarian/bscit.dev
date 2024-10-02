var paragraphs = document.getElementsByTagName("p");
for(var i = 0; i < paragraphs.length; i++)
{
  // do stuff
  paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/\/\`/g, '<span class="prettyprint">').replace(/\`\//g, '</span>');
}
