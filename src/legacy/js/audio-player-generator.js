function createTrackPlayer(trackname, date, audiotype = "wav", sc = false)
{
  var sclink = "";
  if(sc) sclink = `<a href="https://soundcloud.com/bscit/${trackname}" title="Listen on Soundcloud" target="_blank"><img class="song-cover cover-${trackname}" src="/legacy/music/${trackname}-cover.png" height="196"></a>`;
  else sclink = `<a href="/legacy/music/${trackname}-cover.png" target="_blank"><img class="song-cover cover-${trackname}" src="/legacy/music/${trackname}-cover.png" height="196"></a>`;

  var html =
`<div class="songholder">
  <table>
    <tr>
      <td class="covertd">
        ${sclink}
      </td>
      <td class="titletd">
        <h4 class="datespan">${date}</h4>
        <h1>${trackname}</h1>
        <hr style="border: none; height: 2px; background-color: #a4003b">

        <div class="audio-player">
          <audio src="../music/${trackname}.${audiotype}" type="audio/${audiotype}"></audio>
          <div class="controls">
            <button class="player-button" title="play/pause">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
            <span class="player-time">00:00</span>
            <input type="range" class="timeline" max="1000" value="0">
            <span class="player-total-time">––:––</span>
          </div>
        </div>
      </td>
    </tr>
  </table>
</div>`;

  document.getElementById("tracks").innerHTML += html;
}
