(function(){

for(var i in names){
  var current = names[i];
  /* This is solution by one string */
  // console.log(((current[0] === "j" || current[0] === "J") ? "Good Bye " : "Hello ")+current);

  var firstLetter = current[0];
  if(firstLetter === "j" || firstLetter === "J"){
    byeSpeaker.speak(current);
  }
  else {
    helloSpeaker.speak(current);
  }
}

})();