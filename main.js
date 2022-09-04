mainURLforSongs = "";
var isSongPlaying = false;
<<<<<<< HEAD
times = 0;
=======
>>>>>>> 058bdaf (Version 1.0.0)
function playorpause()
{
    if (isSongPlaying == false)
    {
        isSongPlaying = true;
        song_cur.play();
        document.getElementById('play').style = `    position: absolute;
        right: 20px;
        border: none;
        padding: 10px ;
        bottom: 40px;
        background-color: rgba(240, 248, 255, 0);
        background-image: url('pause.png');
        background-size: cover;
        transition: all ease-in-out 0.4s;`;
    }
    else if (isSongPlaying == true)
    {
        isSongPlaying = false;
        song_cur.pause();
        document.getElementById('play').style = `    position: absolute;
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
function playSong(songname, img, authorin, orignalname)
{
<<<<<<< HEAD
    if (times != 0){
        playorpause();
    }
    times +=1;
    song_cur = "";
    times+=1;
=======
>>>>>>> 058bdaf (Version 1.0.0)
    song_cur = new Audio("https://sherry65-code.github.io/muzix_lib/"+songname);
    song_cur.play();
    document.getElementById('icon').href = "https://sherry65-code.github.io/muzik_img/"+img;
    document.getElementById('player').innerHTML = `      
    <span class="songname">`+orignalname+`</span> <br><span class="author">`+authorin+`</span>
   <button id="play" onclick="playorpause()"></button>`;
    document.getElementById('player').style = `    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 60px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
<<<<<<< HEAD
    background-image: url('https://sherry65-code.github.io/muzik_img/`+img+`');
=======
    background-image: url('https://sherry65-code.github.io/muzik_img/master of puppets.jpg');
>>>>>>> 058bdaf (Version 1.0.0)
    background-size:contain;
    background-repeat: no-repeat;
    padding-inline-start: 130px;
    padding-block-start: 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 200;
    color: aliceblue;
    transition: all ease-in-out 0.4s;
    transform: scale(1);`;
    playorpause();
<<<<<<< HEAD
    document.getElementById('titleforweb').innerHTML = orignalname + " - "+authorin;
=======
    document.getElementById('titleforweb').innerHTML = orignalname;
>>>>>>> 058bdaf (Version 1.0.0)
}   
function GenerateSongs(){
    x = 0;
    while (x<totalLength){
        document.getElementById('main').innerHTML += `<div onclick="playSong('`+songUrl[x]+`','`+songImg[x]+`','`+author[x]+`','`+songName[x]+`')" class="songbutton"><span class="songname">`+songName[x]+`</span> <span class="author">`+author[x]+`</span></div><br>`;
        x+=1;

    }
<<<<<<< HEAD
    document.getElementById('main').innerHTML +="<br><br><br><br><br><br>";
=======
>>>>>>> 058bdaf (Version 1.0.0)
}
window.addEventListener('load',()=>{
    GenerateSongs();
})
