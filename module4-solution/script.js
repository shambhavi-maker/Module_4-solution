
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var name in names) {
  if (names[name].charAt(0)==='j' || names[name].charAt(0)==='J') {
    byeSpeaker.SpeakGoodBye(names[name]);
  }
  else {
    helloSpeaker.SpeakHello(names[name]); 
  }
}
