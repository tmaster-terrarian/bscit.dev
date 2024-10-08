let url = 'http://bscit.tumblr.com';

let pageNum = 0;
let maxPageNum = 100;

let foundEnd = false;

let feed = document.getElementById("tumblrfeed");
let pageNumElement = document.getElementById("pageNum");

function incrementPage()
{
  if(pageNum >= maxPageNum) return;
  
  pageNum++;
  display(pageNum);
}

function decrementPage()
{
  if(pageNum <= 0) return;
  
  pageNum--;
  display(pageNum);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(() => {
  feed = document.getElementById("tumblrfeed");
  pageNumElement = document.getElementById("pageNum");
  loadall();
}, 250));

let Data = null;

function loadall()
{
  $.getJSON(url+`/api/read/json?type=photo&num=50&callback=?`, function(data) {
    Data = data;
    validate();
    display(0);
  });
}

function validate() {
  const posts = Data.posts;
  if(posts == null) return;
  
  for(var i = 0; i < posts.length; i++)
  {
    var post = posts[i];
    if(post == null || typeof(post['reblogged-from-url']) != 'undefined' || !(post['regular-body'].includes("img") || post['regular-body'].includes("video")))
    {
      Data.posts.splice(i, 1);
      i--;
      continue;
    }
  }
}

function display(num)
{
  pageNumElement.innerText = num + 1;
  feed.innerHTML = "";
  if(!Data.posts[num * 5] && !foundEnd)
  {
    foundEnd = true;
    maxPageNum = num - 1;
    pageNum--;
    display(pageNum);
  }
  for(var i = num * 5; i < num * 5 + 5; i++)
  {
    displayTextPost(Data.posts[i]);
  }
}

function toggleBlur(event) {
  event.classList.toggle('blur');
}

function displayTextPost(posts) {
  if(!posts) return;
  
  var postIsOriginal = typeof(posts['reblogged-from-url']) == 'undefined';
  if(!postIsOriginal) return;

  var isMediaPost = (posts['regular-body'].includes("img") || posts['regular-body'].includes("video"));
  var postIsSuggestive = (posts['tags'] != undefined ? posts['tags'].includes('suggestive', 0) : false);
  var userIsAtSchool = /\bCrOS\b/.test(navigator.userAgent);

  if(isMediaPost && postIsOriginal && !(userIsAtSchool && postIsSuggestive))
  {
    var _html = `<hr><div style="width:100%"><h4>Posted on ${posts['date'].replace(/\s\d\d:\d\d:\d\d/, '')}</h4>${posts['regular-body'].replace('<img', (postIsSuggestive ? '<p class="cw">[ Suggestive / NSFW ]</p>' : '') + '<div><img class="art-img' + (postIsSuggestive ? ' blur" onclick="toggleBlur(this);"' : '"')).replace('</figure>', '</div></figure><a href="' + posts['url'] + '" title="Tumblr.com" target="_blank">View original</a>')}<p>&nbsp;&nbsp;${posts['note-count']} note${(posts['note-count'] == "1") ? '' : 's'}</p></div>`;

    // var firstHalf = /.*?="\d+">(<p.*?\/p>)?/.exec(_html)[0];
    // var middle = /<div class="(blur)?".*?<\/div>/.exec(_html)[0];
    // var secondHalf = /<\/figure>.*/.exec(_html)[0];

    // var finalHTML = firstHalf + middle + secondHalf;

    feed.innerHTML += _html;
  }
}
