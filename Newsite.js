
var response = prompt("Who are you mortal?")
if (response === "HalleBot God") {
  alert("Ahh I see you are the god, you may enter my ruler.")
}
else if (response === "Architech Celeste") {
  alert("You do not deserve to be here, GET OUT OF HERE MORTAL!!");
  location.href="index.html";
}
else if (response === "Mr. Gaspard") {
  alert("Ah, I see, welcome teacher");
}
else if (response === "Doom Guy") {
  alert("A most respected mortal, I see, you may enter.");
}
else if (response === "MyBestie") {
  alert("I see, a god much like me, most respected!");
}
else if (response === "") {
  alert("BEGONE MORTAL INSECT YOU ARE TESTING MY PATIENCE");
  location.href="index.html";
}
else {
  alert("YOU ARE TESTING MY SYSTEM????? HOW DARE YOU! YOU WILL NOW BE BANISHED");
  location.href="extrasite.html";
}
   var bgm = new Audio("AUDIO PATH"); // replace with the actual path to your mp3
bgm.loop = true; // keeps playing in a loop
bgm.volume = 0.5; // optional: volume between 0.0 and 1.0

window.playAudio = function () {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
};