mainURLforSongs = "";
var isSongPlaying = false;
times = 0;
var indexout = 0;
var song_cur = new Audio();
function playorpause() {
  if (isSongPlaying == false) {
    isSongPlaying = true;
    song_cur.play();
    document.getElementById("play").style = `    position: absolute;
        right: 20px;
        border: none;
        padding: 10px ;
        bottom: 40px;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('pause.png');
        background-size: cover;
        transition: all ease-in-out 0.4s;`;
  } else if (isSongPlaying == true) {
    isSongPlaying = false;
    song_cur.pause();
    document.getElementById("play").style = `    position: absolute;
        right: 20px;
        border: none;
        padding: 10px ;
        bottom: 40px;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('play.png');
        background-size: cover;
        transition: all ease-in-out 0.4s;`;
  }
}
function playSong(songname, img, authorin, orignalname, index) {
  indexout = index;
  if (times != 0) {
    playorpause();
  }
  times += 1;
  song_cur = "";
  times += 1;
  song_cur = new Audio("https://sherry65-code.github.io/muzix_lib/" + songname);
  song_cur.play();
  document.getElementById("icon").href =
    "https://sherry65-code.github.io/muzik_img/" + img;
  document.getElementById("player").innerHTML =
    `      
    <span class="songname">` +
    orignalname +
    ` <span class="author">` +
    authorin +
    `</span></span>
    <div class="timehandler"><span id="lefttime"></span><button id="slider"></button><span id="righttime"></span><input type="range" min="1" max="100" value="0" class="slider" id="songNow"></div>
    <button id="play" onclick="playorpause()"></button>`;
  document.getElementById("player").style.background =
    "url('https://sherry65-code.github.io/muzik_img/" + img + "')";
  document.getElementById("player").style.backgroundSize = "contain";
  document.getElementById("player").style.backgroundRepeat = "no-repeat";
  document.getElementById("player").style.transform = "scale(1)";
  playorpause();
  document.getElementById("titleforweb").innerHTML =
    orignalname + " - " + authorin;
  document.getElementById("titleforweb").innerHTML = orignalname;
}
function GenerateSongs() {
  x = 0;
  while (x < totalLength) {
    document.getElementById("main").innerHTML +=
      `<div onclick="playSong('` +
      songUrl[x] +
      `','` +
      songImg[x] +
      `','` +
      author[x] +
      `','` +
      songName[x] +
      `',` +
      x +
      `)" class="songbutton"><span class="songname2">` +
      songName[x] +
      ` </span><span class="author">` +
      author[x] +
      `</span></div><br>`;
    x += 1;
  }
  document.getElementById("main").innerHTML += "<br><br><br><br><br><br>";
}
function SongHandler() {
  if (song_cur.paused == true && isSongPlaying == true) {
    if (indexout == totalLength) {
      indexout = 0;
      playSong(
        songUrl[indexout],
        songImg[indexout],
        author[indexout],
        songName[indexout],
        indexout
      );
    } else if (indexout != totalLength) {
      indexout += 1;
      playSong(
        songUrl[indexout],
        songImg[indexout],
        author[indexout],
        songName[indexout],
        indexout
      );
    }
  }
  if (song_cur.paused == false) {
    document.getElementById("lefttime").innerHTML =
      parseInt(song_cur.currentTime / 60) +
      ":" +
      parseInt(song_cur.currentTime % 60);
    document.getElementById("righttime").innerHTML =
      parseInt(song_cur.duration / 60) + ":" + parseInt(song_cur.duration % 60);
  }
  document.getElementById('songNow').value = song_cur.currentTime / 60 * 10;
}
window.addEventListener("load", () => {
  GenerateSongs();
});
setInterval(SongHandler, 1000);
