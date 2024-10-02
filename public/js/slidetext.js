var html = 
`<div class="slidetext" style="padding: 10px 0;">
  <p aria-hidden="true">welcome to bscit.dev, the web site of all things bscit ! (thats me!)</p>
  <p aria-hidden="true">If you want to see art, game progress, and more, you can check out my various social platforms !!!</p>
</div>
<svg class="pauseicon" style="display: block; position: absolute; top: 0; left: -37px; background-color: rgb(8, 14, 20); border: 8px solid rgb(8, 14, 20); border-radius: 0 28px 28px 0; transition: left 0.1s ease-in-out 0.0s" width=20 height=20 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z" clip-rule="evenodd" />
</svg>`;

var textbox = document.getElementsByClassName("slidetextbox")[0];

textbox.innerHTML = html;

textbox.addEventListener("mouseover", () => {
  textbox.children[0].getAnimations()[0].playbackRate = 0;
  textbox.children[1].style.left = '-1px';
});

textbox.addEventListener("mouseout", () => {
  textbox.children[0].getAnimations()[0].playbackRate = 1;
  textbox.children[1].style.left = '-37px';
});
