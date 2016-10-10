
(function(/* it's not necessarily to define window obj hear */){

	var speakWord = "Hello";
	var helloSpeaker = {
		speak: function (name) {
			console.log(speakWord + " " + name);
			}
	};

	window.helloSpeaker = helloSpeaker;

})(/* and hear */);