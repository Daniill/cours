
(function(/* it's not necessarily to define window obj hear */){

	var speakWord = "Good Bye";
	var byeSpeaker = {
		speak: function (name) {
			console.log(speakWord + " " + name);
			}
	}

	window.byeSpeaker = byeSpeaker;

})(/* and hear */);