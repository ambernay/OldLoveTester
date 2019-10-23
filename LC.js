
function getPercent(){
  var lName = document.getElementById("trueLove").value;
  document.getElementById("percent").innerHTML =
  "You and " + lName + " are " + Math.floor(Math.random()* 100 + 1)+"% compatable!";
  };

function buttonChange(){
  document.getElementById("submit").value = "Try again?"

};

function reset(){
  document.getElementsByClass("input").reset();
};

/* write different alerts with a Range
(ie. 98-100% "you love each other like Kanye loves Kanye")
(< 10 "You go together like oil and water")*/
