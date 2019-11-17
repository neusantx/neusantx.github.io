//Scroll to id
function experience(){
  var elmt = document.getElementById("experience");
  elmt.scrollIntoView();
}



//Modal popup

// Get the modal
var modal0 = document.getElementById("modal0");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");
var modal7 = document.getElementById("modal7");



// Get the button that opens the modal
var card0 = document.getElementsByClassName("card")[0];
var card1 = document.getElementsByClassName("card")[1];
var card2 = document.getElementsByClassName("card")[2];
var card3 = document.getElementsByClassName("card")[3];
var card4 = document.getElementsByClassName("card")[4];
var card5 = document.getElementsByClassName("card")[5];
var card6 = document.getElementsByClassName("card")[6];
var card7 = document.getElementsByClassName("card")[7];

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];

// When the user clicks the button, open the modal
card0.onclick = function() {
  modal0.style.display = "block";
}
card1.onclick = function() {
  modal1.style.display = "block";
}
card2.onclick = function() {
  modal2.style.display = "block";
}
card3.onclick = function() {
  modal3.style.display = "block";
}
card4.onclick = function() {
  modal4.style.display = "block";
}
card5.onclick = function() {
  modal5.style.display = "block";
}
card6.onclick = function() {
  modal6.style.display = "block";
}
card7.onclick = function() {
  modal7.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
  modal0.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }

}
