import Player from "@vimeo/player";
import  throttle  from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time'
const currentTime = Number(localStorage.getItem(TIME_KEY));

 player.on('timeupdate', throttle(playOn, 1000));


function playOn(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
};

 player.setCurrentTime(currentTime)
 

console.log(currentTime)