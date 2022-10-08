mainURLforSongs = "";
var isSongPlaying = false;
times = 0;
var indexout = 0;
var isFullScreen = false;
var backimglink = "";
var song_cur = new Audio();
document.getElementById('splash').style.transform = "scale(1)";
window.addEventListener('load',()=>{
  document.getElementById('splash').style.animation = "loadstart 2s 1 ";
  document.getElementById('splash').style.transform = "scale(0)";
})
function updateMonitor(songnameisp){
  document.getElementById('resumeplate').innerHTML = "Playing "+songnameisp;
  document.getElementById('resumeplate').style.right = "20px";
}
function playorpause() {
  if (isSongPlaying == false) {
    isSongPlaying = true;
    song_cur.play();
    document.getElementById("play").style = ` 
        border: none;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('pause.png');
        background-size: contain;
        transition: all ease-in-out 0.4s;`;
  } else if (isSongPlaying == true) {
    isSongPlaying = false;
    song_cur.pause();
    document.getElementById("play").style = ` 
        border: none;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('play.png');
        background-size: contain;
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
    <span class="songname" id="sn">` +
    orignalname +
    ` <span class="author">` +
    authorin +
    `</span></span>
    <div class="timehandler" id="timehandler"><span id="lefttime"></span><button id="slider"></button><span id="righttime"></span><input type="range" min="1" max="100" value="0" class="slider" id="songNow"><br><button id="play" onclick="playorpause()"></button></div>
    `;
    updateMonitor(orignalname);
  document.getElementById("player").style.background =
    "url('https://sherry65-code.github.io/muzik_img/" + img + "')";
    document.getElementById("player").style.backgroundSize = "auto 70%";
    document.getElementById("player").style.backgroundPosition = "50% 10%";
    document.getElementById("player").style.backgroundRepeat = "no-repeat";
  document.getElementById("player").style.transform = "scale(1)";
  playorpause();
  document.getElementById("titleforweb").innerHTML =
    orignalname + " - " + authorin;
  document.getElementById("titleforweb").innerHTML = orignalname;
  backimglink = "https://sherry65-code.github.io/muzik_img/" + img;
}
function GenerateSongs() {
  x = 0;
  while (x < totalLength) {
    document.getElementById("main").innerHTML +=
      `<div style="background-image: url('https://sherry65-code.github.io/muzik_img/`+songImg[x]+`')" onclick="playSong('` +
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
  if (song_cur.paused == true && isSongPlaying == true && song_cur.currentTime != song_cur.duration)
  {
    isSongPlaying = false;
    document.getElementById("play").style = `    

    background-color: rgba(240, 248, 255, 0);
    background-image: url('play.png');
    background-size: contain;
    transition: all ease-in-out 0.4s;`;
  }
  else if (song_cur.paused == false && isSongPlaying == false && song_cur.currentTime != song_cur.duration)
  {
    isSongPlaying = true;
    document.getElementById("play").style = `

    background-color: rgba(240, 248, 255, 0);
    background-image: url('pause.png');
    background-size: contain;
    transition: all ease-in-out 0.4s;`;
  }
  if (song_cur.paused == true && isSongPlaying == true && song_cur.currentTime == song_cur.duration) {
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
  document.getElementById('songNow').value = (song_cur.currentTime/song_cur.duration) * 100;

  document.getElementById('songNow').addEventListener('click',()=>{
    song_cur.currentTime = (parseInt(document.getElementById('songNow').value)/100)*parseInt(song_cur.duration);
  });
  document.getElementById('songNow').addEventListener('touchend',()=>{
    song_cur.currentTime = (parseInt(document.getElementById('songNow').value)/100)*parseInt(song_cur.duration);
  });
}
window.addEventListener("load", () => {
  GenerateSongs();
});

setInterval(SongHandler, 1000);
document.getElementById('searchbar').addEventListener('keyup',()=>{
  document.getElementById("main").style.overflowY = "hidden";
  sc = 0;
  document.getElementById('results').innerHTML = "";
  document.getElementById('searchpot').style.visibility = "visible";
  while (sc < totalLength)
  {
    if ((songName[sc].toLowerCase()).includes((document.getElementById('searchbar').value).toLowerCase()))
    {
      document.getElementById('results').innerHTML += `<button onclick="playSong('` +
      songUrl[sc] +
      `','` +
      songImg[sc] +
      `','` +
      author[sc] +
      `','` +
      songName[sc] +
      `',` +
      sc +
      `)" class="resultbutton">`+songName[sc]+`</button><br>`;
      
    }
    sc+=1;
  }
});
function hidesearchpot()
{
  document.getElementById("main").style.overflowY = "scroll";
  document.getElementById('searchpot').style.visibility = "hidden";
}
function changePlayerLook(){
    document.getElementById('player').style = `
    position: absolute;
    bottom: 20px;
    right: 20px;
    top: 80px;
    left: 20px;
    height: auto;
    width: auto;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-weight: 600;
    color: aliceblue;
    transition: all ease-in-out 0.4s;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 0px black;
    transform: scale(1);
    background: url('`+backimglink+`');
    background-size: auto 70%;
    background-position: 50% 10%;
    background-repeat: no-repeat;
  
   ` ;
  }
  function changePlayerLook2(){
    document.getElementById('player').style = `
    position: absolute;
    bottom: 20px;
    right: 20px;
    top: 80px;
    left: 20px;
    height: auto;
    width: auto;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-weight: 600;
    color: aliceblue;
    transition: all ease-in-out 0.4s;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 0px black;
    transform:scale(0);
    background: url('`+backimglink+`');
    background-size: auto 70%;
    background-position: 50% 10%;
    background-repeat: no-repeat;

    `;
  }

document.getElementById('player').addEventListener('dblclick',changePlayerLook2);