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
else if (response === "") {
  alert("BEGONE MORTAL INSECT");
  location.href="index.html";
}
else {
  location.href="index.html";
}