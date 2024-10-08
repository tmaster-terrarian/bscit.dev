const playIcon =
`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
</svg>
`;
const pauseIcon =
`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
</svg>
`;

const muteicon =
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
  <path d="M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" />
</svg>`;

const unmuteicon = 
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
  <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" />
<path d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" />`;

document.addEventListener("DOMContentLoaded", () => setTimeout(() => {
  var volumeRange = document.querySelector('.volumerange');
  var volumebutton = document.querySelector('.volume-icon');
  var volumeoutput = document.querySelector('.voloutput');
  
  document.querySelectorAll(".songholder").forEach(function(currente)
  {
    var playerButton = currente.querySelector('.player-button');
    var audio = currente.querySelector('audio');
    var tlen = currente.querySelector('.player-total-time');
    var timeline = currente.querySelector('.timeline');
    var len = currente.querySelector('.player-time');
  
    var waspaused = true;
  
    timeline.onmouseover = function() {determineLength();};
    playerButton.onmouseover = function() {determineLength();};
  
    function determineLength()
    {
      var dur = Math.ceil(audio.duration * 100) / 100;
  
      var mins = Math.floor((dur / 60) % 60);
      if(mins < 10) mins = "0" + mins;
      var secs = Math.floor(dur % 60);
      if(secs < 10) secs = "0" + secs;
  
      tlen.innerHTML = mins + ":" + secs;
    }
  
    function determineTrackPos()
    {
      var dur = Math.floor(audio.currentTime * 100) / 100;
  
      var mins = Math.floor((dur / 60) % 60);
      if(mins < 10) mins = "0" + mins;
      var secs = Math.floor(dur % 60);
      if(secs < 10) secs = "0" + secs;
  
      len.innerHTML = mins + ":" + secs;
    }
  
    function toggleAudio()
    {
      if(audio.paused)
      {
        audio.play();
        playerButton.innerHTML = pauseIcon;
      }
      else
      {
        audio.pause();
        playerButton.innerHTML = playIcon;
      }
  
      determineLength();
    }
  
    playerButton.addEventListener('click', toggleAudio);
  
    function audioEnded () {
      playerButton.innerHTML = playIcon;
    }
  
    audio.onended = audioEnded;
  
    function changeTimelinePosition ()
    {
      const percentagePosition = (100*audio.currentTime) / audio.duration;
      timeline.style.backgroundSize = `${percentagePosition}% 100%`;
      timeline.value = percentagePosition * 10;
  
      determineTrackPos();
    }
  
    audio.ontimeupdate = changeTimelinePosition;
  
    timeline.onmousedown = function()
    {
      waspaused = audio.paused;
    };
  
    timeline.oninput = function()
    {
      audio.pause();
      playerButton.innerHTML = playIcon;
      const time = (timeline.value * audio.duration) / 1000;
      var t = timeline.value / 10;
      timeline.style.backgroundSize = `${t}% 100%`;
      audio.currentTime = time;
  
      determineTrackPos();
    };
  
    timeline.onmouseup = function()
    {
      if(!waspaused)
      {
        audio.play();
        playerButton.innerHTML = pauseIcon;
      }
    };
  
  });
  
  volumeRange.oninput = function()
  {
    document.querySelectorAll('audio').forEach(function(audio)
    {
      volumeRange.style.backgroundSize = `${volumeRange.value}% 100%`;
      var add = "";
      if(volumeRange.value < 10) add = "&nbsp;&nbsp;";
      else if(volumeRange.value < 100) add = "&nbsp;";
      volumeoutput.innerHTML = volumeRange.value + "%" + add;
      var vol = volumeRange.value / 100;
      audio.volume = vol;
    });
  };
  
  volumebutton.onclick = function()
  {
    document.querySelectorAll('audio').forEach(function(audio)
    {
      audio.muted = !audio.muted;
  
      if(audio.muted)
      {
        volumebutton.innerHTML = muteicon;
      }
      else
      {
        volumebutton.innerHTML = unmuteicon;
      }
    });
  };

}, 300));
