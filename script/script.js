//pull html buttons
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
var index = 0;
//make as JukeBox constructor 
function Jukebox(){
	this.jamz = [];
}

//be able to add songs to the jukebox
Jukebox.prototype.addSong = function(songs){
	this.jamz.push(songs);
}

//test audio in console log
/*Jukebox.prototype.play = function(){
	var playSong = this.jamz;
	console.log(this.jamz)
}*/

//Be able to push songs into the jukebox. 
//first create a "new" jukebox
var jukebox = new Jukebox();

//use the previous prototype to add songs 

jukebox.addSong(new Audio("audio/Young M.A - OOOUUU.mp3"));
jukebox.addSong(new Audio("audio/J Balvin - Safari.mp3"));
jukebox.addSong(new Audio("audio/Marshmello x Ookay - Chasing Colors.mp3"));
jukebox.addSong(new Audio("audio/Bryson Tiller - Run Me Dry.mp3"));
jukebox.addSong(new Audio("audio/Midnight To Monaco - One In A Million.mp3"));


//give each button a method 

Jukebox.prototype.play = function() {
  this.jamz[index].play();
}

Jukebox.prototype.pause = function() {
  this.jamz[index].pause();
}

Jukebox.prototype.stop = function() {
  this.jamz[index].pause();
  this.jamz[index].currentTime = 0;
}
Jukebox.prototype.next = function() {
    this.jamz[index].pause();
    if (index == this.jamz.length-1) {
        index=0;
    } else {
        index++;
    }
    this.jamz[index].currentTime = 0;
    this.jamz[index].play();  
}

Jukebox.prototype.back = function() {
    this.jamz[index].pause();
    if (index == 0) {
        // rotate back from first track to last track
        index = this.jamz.length-1;  
    } else {
        index--;
    }
    this.jamz[index].currentTime = 0;
    this.jamz[index].play();  
}



//add event listeners to the the buttons I pulled earlier.
playBtn.addEventListener("click", function(event) {
 event.preventDefault();
 jukebox.play();
})

pauseBtn.addEventListener("click", function(event) {
 event.preventDefault();
 jukebox.pause();
})

stopBtn.addEventListener("click", function(event) {
 event.preventDefault();
 jukebox.stop();
})

nextBtn.addEventListener("click", function(event) {
 event.preventDefault();
 jukebox.next();
})

backBtn.addEventListener("click", function(event) {
 event.preventDefault();
 jukebox.back();
})