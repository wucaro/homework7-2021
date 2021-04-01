var video = document.getElementById("player1"); 

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play()
	 document.querySelector("#volume").innerHTML = video.volume*100+'%'
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause(); 
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.95;
	console.log(video.playbackRate);

});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=.95;
	console.log(video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = this.value + "%"
	 
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == true){
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.remove("oldSchool");
});


