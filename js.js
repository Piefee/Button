var clicks = 1;
var phrases = ["Wow...close", "I'm dissapointed", "Bro stop", "I warned you", "...", "I hate you"]
function move(){
  if(clicks >= 4){
    window.location.href = "https://www.pornhub.com/gayporn";
    return;
  }
  let btn = document.getElementById("btn");
  let pos = "";
  let index = 0;
  btn.style.padding = (3 * (1 - (clicks*.6))) + "vw";
  btn.style.fontSize = (3 * (1 - (clicks*.3))) + "vw";
  pos = (Math.random() * 70) - 10
  pos = pos + "vw ";
  pos = pos + ((Math.random() * 40) - 25)
  pos = pos + "vw";
  btn.style.translate = pos;
  index = get_random_index(phrases);
  btn.textContent = phrases[index];
  phrases.splice(index,1);
  clicks++;
}
function get_random_index (list) {
  return Math.floor((Math.random()*list.length));
}
