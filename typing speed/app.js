document
  .getElementById("fake-form")
  .addEventListener("submit", function pushData(e) {
    var inputText = document.getElementById("comment").value;
    var spl = inputText.split(" ");

    spl.forEach(function(obj) {
      myArray.push(obj);
      clearInterval(timer);
      var passedTime = 59 - seconds;


      document.getElementById("wpm").innerHTML =
        "You typing speed is" +
        "  " +
        (myArray.length / passedTime).toFixed(2) +
        " " +
        "words per second";
    });

    e.preventDefault();
    document.getElementById("sub-btn").disabled = true;

  });

var myArray = [];
var seconds = 59;
var timer;

function myFunction() {
  if (seconds < 60 ) {
    // 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0) {
    // don't go to -1
    seconds--;
  } else {
    clearInterval(timer);
    var inputText = document.getElementById("comment").value;
    var spl = inputText.split(" ");
    spl.forEach(function(obj) {
      myArray.push(obj);
    });
    var passedTime = 59 - seconds;
    document.getElementById("wpm").innerHTML =
      "You typing speed is" +
      "  " +
     ( myArray.length / passedTime).toFixed(2) +
      " " +
      "words per second";
  }
}
document.getElementById("comment").onkeypress = function() {
  if (!timer) {
    timer = window.setInterval(function() {
      myFunction();
    }, 1000); 
  }
};
document.getElementById("timer").innerHTML = "1:00";
