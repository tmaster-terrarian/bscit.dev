// function loadFile(filePath)
// {
//   var result = null;
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("GET", filePath, false);
//   xmlhttp.send();
//   if (xmlhttp.status==200)
//   {
//     result = xmlhttp.responseText;
//   }
//   return result;
// }

const ul = document.getElementById('blog-list');

function listItem(id, name, date)
{
  const obj = {};
  obj.id = id;
  obj.name = name;
  obj.data = date;
  return obj;
}

// const blogList = ['blog-1'];
// const nameList = ['beebo Devlog 01: Writing a commands system for my game'];
// const dateList = ['04/18/2023'];

const blogList = [
  listItem('blog-1', 'beebo Devlog 01: Writing a commands system for my game', '04/18/2023')
];

blogList.forEach(renderBlogList);

function renderBlogList(element, index, arr)
{
  var li = document.createElement('li');

  var a = document.createElement('a');
  var aText = document.createTextNode(" - posted " + element.date);
  a.href = "/legacy/attic-pages/" + element.id + ".htm";
  a.target = "attic-frame";
  a.innerText = element.name;
  li.appendChild(a);
  li.appendChild(aText);

  ul.appendChild(li);
}

