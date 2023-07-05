function loaded() {
  alert("the page has loaded " + new Date());
}
function myFunction() {
  alert("hello motherfucka");
}

function clicky(message) {
  console.log("you touched the " + message);
  alert("you touched the " + message);
}
function busted(message) {
  alert(
    "Ah, you thought there were no more interactive squares? Thanks for not giving up and trying the " +
      message +
      " :)"
  );
}

function momoTalk() {
  alert("hi! my name is momo!");
}

myFunction("section");
document.getElementById("firstSquare").onclick = function () {
  clicky("first square");
};
document.getElementById("body").onload = function () {
  loaded();
};
document.getElementById("secondSquare").onclick = function () {
  clicky("second square");
};
document.getElementById("thirdSquare").onclick = function () {
  clicky("third square");
};
document.getElementById("squareButt").onclick = function () {
  clicky("square butt");
};
document.getElementById("lastSquare").onclick = function () {
  busted("last square");
};

for (var i = 1; i <= 18; i++) {
  document.getElementById("grid-item-" + i).onclick = function () {
    momoTalk();
  };
}

var helloMessage1 = "welcome to the character's counter, this frase has ";
var helloMessage2 =
  " letters (including the spaces and excluding the numbers!) , thank you.";
var fullMessage = helloMessage1 + helloMessage2;
var count = fullMessage.indexOf(".") + 1;
var fullMessageCounted = helloMessage1 + count + helloMessage2;

alert(fullMessageCounted);

var capture = document.getElementById("squareButt");
console.log(capture.innerHTML);

