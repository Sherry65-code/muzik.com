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
  document.getElementById('resumeplate').innerHTML = "Playing "+songnameisp+` <div id="playtime"></div>`;
  document.getElementById('resumeplate').style.transform = "scale(1)";

}
function setAccent(imglink){
  let myImg = new Image();
  myImg.crossOrigin = "Anonymous";
  myImg.onload = () => {
    let context = document.createElement('canvas').getContext('2d');
    context.drawImage(myImg, 0, 0);
    let {
      data
    } = context.getImageData(10, 10, 1, 1);
    document.body.style.background = "linear-gradient(rgb("+data[0]+","+data[1]+","+data[2]+"), #1c1b29)";
    document.body.style.backgroundAttachment = "fixed";
  }
  myImg.src = imglink;
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
function playSong(songname, img, authorin, orignalname, index, isClickedByUser=false) {
  indexout = index;
  if (times != 0) {
    playorpause();
  }
  document.body.style.backgroundAttachment = "fixed";
  times += 1;
  song_cur = "";
  times += 1;
  song_cur = new Audio("https://sherry65-code.github.io/muzix_lib/" + songname);
  song_cur.play();
  document.getElementById("icon").href =
    "https://sherry65-code.github.io/muzik_img/" + img;
    document.getElementById("player").innerHTML =
    `      
    <div id="cen"><img src="" id="songimg"></div>
    <span class="songname" id="sn">` +
    orignalname +
    ` <span class="author">` +
    authorin +
    `</span></span>
    <div class="timehandler" id="timehandler"><span id="lefttime"></span><button id="slider"></button><span id="righttime"></span><input type="range" min="1" max="100" value="0" class="slider" id="songNow"><br><button id="play" onclick="playorpause()"></button></div>
    `;
    updateMonitor(orignalname);
    document.getElementById("songimg").src = "https://sherry65-code.github.io/muzik_img/" + img;
    // document.getElementById("player").style.backgroundSize = "auto 70%";
    // document.getElementById("player").style.backgroundPosition = "50% 10%";
    // document.getElementById("player").style.backgroundRepeat = "no-repeat";
if (isClickedByUser){
    document.getElementById("player").style.transform = "scale(1)";
}playorpause();
  document.getElementById("titleforweb").innerHTML =
    orignalname + " - " + authorin;
  document.getElementById("titleforweb").innerHTML = orignalname;
  backimglink = "https://sherry65-code.github.io/muzik_img/" + img;
  setAccent(backimglink);
}
function GenerateSongsInLimit(startI, endI) {
  x = startI;
  while (x < endI) {
    document.getElementById("mxa").innerHTML +=
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
      `,true)" class="songbutton"><span class="songname2">` +
      songName[x] +
      ` </span><br><span class="author">` +
      author[x] +
      `</span></div><br>`;
    x += 1;
  }
  if (x>=totalLength){
document.getElementById('hbr2').innerHTML = "";
  } 

  else{
    if (totalLength-x <= 10){
    document.getElementById('hbr2').innerHTML = "<button id ='xtra' onclick='GenerateSongsInLimit("+x+","+totalLength+")'>Show More</button>"
    }
    else{
      document.getElementById('hbr2').innerHTML = "<button id ='xtra' onclick='GenerateSongsInLimit("+x+","+(x+10)+")'>Show More</button>"

    }
  } 
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
     document.getElementById('playtime').style.width =  parseInt((song_cur.currentTime/song_cur.duration)*200)+"px";
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
  GenerateSongsInLimit(0, 10);
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
    bottom: 0px;
    right: 0px;
    top: 0px;
    left: 0px;
    height: auto;
    width: auto;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-weight: 600;
    color: aliceblue;
    transition: all ease-in-out 0.4s;
    overflow: hidden;
    transform: scale(1);
    background-size: auto 70%;
    background-position: 50% 10%;
    background-repeat: no-repeat;
  
    z-index:2000;
   ` ;
  }
  function changePlayerLook2(){
    document.getElementById('player').style = `
    position: absolute;
    bottom: 0px;
    right: 0px;
    top: 0px;
    left: 0px;
    height: auto;
    width: auto;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-weight: 600;
    color: aliceblue;
    transition: all ease-in-out 0.4s;
    overflow: hidden;
    transform: scale(0);
    background-size: auto 70%;
    background-position: 50% 10%;
    background-repeat: no-repeat;

    z-index:2000;

    `;

  }

  document.getElementById('player').addEventListener('dblclick',changePlayerLook2);
