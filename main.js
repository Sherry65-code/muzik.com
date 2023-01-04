mainURLforSongs = "";
var isSongPlaying = false;
times = 0;
var indexout = 0;
var isFullScreen = false;
var backimglink = "";
var song_cur = new Audio();
document.getElementById("splash").style.transform = "scale(1)";
window.addEventListener("load", () => {
  GenerateSongsInLimit(0, 10);
  document.getElementById("splash").style.animation = "loadstart 2s 1 ";
  document.getElementById("splash").style.transform = "scale(0)";
  if (innerWidth < 600) {
    document.getElementById("player").style.left = "0";
    document.getElementById("player").style.right = "0";
    document.getElementById("player").style.borderRadius = "0px";
    document.getElementById("player").style.bottom = "0px";
  } else {
    playersize = (innerWidth - 500) / 2;
    document.getElementById("player").style.left = playersize + "px";
    document.getElementById("player").style.right = playersize + "px";
    document.getElementById("player").style.borderRadius = "0px";
    document.getElementById("player").style.borderRadius = "18px";
    document.getElementById("player").style.bottom = "10px";
  }
  document.getElementById('splash').innerHTML = "";
});
window.addEventListener("resize", () => {
  if (innerWidth < 600) {
    document.getElementById("player").style.left = "0";
    document.getElementById("player").style.right = "0";
    document.getElementById("player").style.borderRadius = "0px";
    document.getElementById("player").style.bottom = "0px";
  } else {
    playersize = (innerWidth - 500) / 2;
    document.getElementById("player").style.left = playersize + "px";
    document.getElementById("player").style.right = playersize + "px";
    document.getElementById("player").style.borderRadius = "18px";
    document.getElementById("player").style.bottom = "10px";
  }
});

function setAccent(imglink) {
  let myImg = new Image();
  myImg.crossOrigin = "Anonymous";
  myImg.onload = () => {
    let context = document.createElement("canvas").getContext("2d");
    context.drawImage(myImg, 0, 0);
    let { data } = context.getImageData(10, 10, 1, 1);
    document.body.style.background =
      "linear-gradient(rgb(" +
      data[0] +
      "," +
      data[1] +
      "," +
      data[2] +
      "), #1c1b29)";
    document.body.style.backgroundAttachment = "fixed";
  };
  myImg.src = imglink;
}
function playorpause() {
  if (isSongPlaying == false) {
    isSongPlaying = true;
    song_cur.play();
    document.getElementById("play").style = ` 
        border: none;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('images/pause.png');
        background-size: contain;
        transition: all ease-in-out 0.4s;`;
  } else if (isSongPlaying == true) {
    isSongPlaying = false;
    song_cur.pause();
    document.getElementById("play").style = ` 
        border: none;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('images/play.png');
        background-size: contain;
        transition: all ease-in-out 0.4s;`;
  }
}
function playSong(songname, img, authorin, orignalname, index) {
  indexout = index;
  isSongPlaying = false;
  song_cur.pause();
  document.getElementById("play").style = ` 
      border: none;
      background-color: rgba(240, 248, 255, 0);
      background-image: url('images/play.png');
      background-size: contain;
      transition: all ease-in-out 0.4s;`;
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
    <div class="timehandler" id="timehandler"><span id="lefttime"></span><button id="slider"></button><span id="righttime"></span><input type="range" min="1" max="100" value="0" class="slider" id="songNow"><br></button></div><button id="play" onclick="playorpause()">
    `;
  document.getElementById("songimg").src =
    "https://sherry65-code.github.io/muzik_img/" + img;
  document.getElementById("player").style.transform = "scale(1)";
  song_cur.play();
  .then(_ => {
if ('mediaSession' in navigator) {

  navigator.mediaSession.metadata = new MediaMetadata({
    title: orignalame,
    artist: artist ,
    album: 'unknown'
    artwork: [
      { src: "https://sherry65-code.github.io/muzik_img/" + img+"/96x96",   sizes: '96x96',   type: 'image/jpeg' },
      { src: "https://sherry65-code.github.io/muzik_img/" + img+'/128x128', sizes: "128x128", type: 'image/jpeg' },
      { src: "https://sherry65-code.github.io/muzik_img/" + img+ '/192x192', sizes: "192x192", type: 'image/jpeg' },
      { src: "https://sherry65-code.github.io/muzik_img/" + img+ '/256x256', sizes: "256x256", type: 'image/jpeg' },
      { src: "https://sherry65-code.github.io/muzik_img/" + img+ '/384x384', sizes: "384x384", type: 'image/jpeg' },
      { src: "https://sherry65-code.github.io/muzik_img/" + img+ '/512x512', sizes: "512x512", type: 'image/jpeg' },
    ]
  });

  navigator.mediaSession.setActionHandler('play', playorpause() {});
  navigator.mediaSession.setActionHandler('pause', playorpause() {});
  navigator.mediaSession.setActionHandler('seekbackward', playorpause() {});
  navigator.mediaSession.setActionHandler('seekforward', playorpause() {});
  navigator.mediaSession.setActionHandler('previoustrack', playorpause() {});
  navigator.mediaSession.setActionHandler('nexttrack', playorpause() {});

}

})
  document.getElementById("play").style = ` 
      border: none;
      background-color: rgba(240, 248, 255, 0);
      background-image: url('images/pause.png');
      background-size: contain;
      transition: all ease-in-out 0.4s;`;
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
      `)" class="songbutton">
      <img class="songminimg" src="https://sherry65-code.github.io/muzik_img/` +
      songImg[x] +
      `">
      <span class="songname2">` +
      songName[x] +
      ` </span><br><span class="author">` +
      author[x] +
      `</span></div><br>`;
    x += 1;
  }
  if (x >= totalLength) {
    document.getElementById("hbr2").innerHTML = "<br><br><br><br><br><br><br>";
  } else {
    if (totalLength - x <= 10) {
      document.getElementById("hbr2").innerHTML =
        "<button id ='xtra' onclick='GenerateSongsInLimit(" +
        x +
        "," +
        totalLength +
        ")'>Show More</button><br><br><br><br><br><br><br>";
    } else {
      document.getElementById("hbr2").innerHTML =
        "<button id ='xtra' onclick='GenerateSongsInLimit(" +
        x +
        "," +
        (x + 10) +
        ")'>Show More</button><br><br><br><br><br><br><br>";
    }
  }
}
function SongHandler() {
  if (
    song_cur.paused == true &&
    isSongPlaying == true &&
    song_cur.currentTime != song_cur.duration
  ) {
    isSongPlaying = false;
    document.getElementById("play").style = `    

    background-color: rgba(240, 248, 255, 0);
    background-image: url('images/play.png');
    background-size: contain;
    transition: all ease-in-out 0.4s;`;
  } else if (
    song_cur.paused == false &&
    isSongPlaying == false &&
    song_cur.currentTime != song_cur.duration
  ) {
    isSongPlaying = true;
    document.getElementById("play").style = `

    background-color: rgba(240, 248, 255, 0);
    background-image: url('images/pause.png');
    background-size: contain;
    transition: all ease-in-out 0.4s;`;
  }
  if (
    song_cur.paused == true &&
    isSongPlaying == true &&
    song_cur.currentTime == song_cur.duration
  ) {
    if (indexout == totalLength-1) {
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
    document.getElementById("lefttime").innerHTML =
      parseInt(song_cur.currentTime / 60) +
      ":" +
      parseInt(song_cur.currentTime % 60);
    document.getElementById("righttime").innerHTML =
      parseInt(song_cur.duration / 60) + ":" + parseInt(song_cur.duration % 60);

      document.getElementById("songNow").addEventListener("click", () => {
        song_cur.currentTime =
          (parseInt(document.getElementById("songNow").value) / 100) *
          parseInt(song_cur.duration);
      });
      document.getElementById("songNow").addEventListener("touchend", () => {
        song_cur.currentTime =
          (parseInt(document.getElementById("songNow").value) / 100) *
          parseInt(song_cur.duration);
      });
      
  document.getElementById("songNow").value =
    (song_cur.currentTime / song_cur.duration) * 100;
}

setInterval(SongHandler, 1000);
document.getElementById("searchbar").addEventListener("keyup", () => {
  document.getElementById("main").style.overflowY = "hidden";
  sc = 0;
  document.getElementById("results").innerHTML = "";
  document.getElementById("searchpot").style.visibility = "visible";
  while (sc < totalLength) {
    if (
      songName[sc]
        .toLowerCase()
        .includes(document.getElementById("searchbar").value.toLowerCase())
    ) {
      document.getElementById("results").innerHTML +=
        `<button onclick="playSong('` +
        songUrl[sc] +
        `','` +
        songImg[sc] +
        `','` +
        author[sc] +
        `','` +
        songName[sc] +
        `',` +
        sc +
        `)" class="resultbutton">` +
        songName[sc] +
        `</button><br>`;
    }
    sc += 1;
  }
});
function hidesearchpot() {
  document.getElementById("main").style.overflowY = "scroll";
  document.getElementById("searchpot").style.visibility = "hidden";
}
function changePlayerLook() {
  document.getElementById("player").style.transform = "scale(1)";
}
function changePlayerLook2() {
  document.getElementById("player").style.transform = "scale()";
}
