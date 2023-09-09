import Player from "@vimeo/player";
import  throttle  from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = Number(localStorage.getItem("videoplayer-current-time"));

 player.on('timeupdate', throttle(playOn, 1000));


function playOn(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
};

player.setCurrentTime(currentTime).then(function(seconds){

}).catch(function(error){
    switch(error.name) {
        case 'RangeError':
            break;
            default:
                break;
    }

});
console.log(currentTime)