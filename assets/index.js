import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';


const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins:[
    //new AutoPlay()
] });



const button = document.querySelector("#play")
const btnMuted = document.querySelector("#muted")

button.onclick = () => player.togglePlay();
btnMuted.onclick = () => player.toggleMute();