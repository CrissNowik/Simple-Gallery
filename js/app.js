document.addEventListener("DOMContentLoaded", function() {

var menu = document.getElementById("drop");
var hamb = document.getElementById("hamburger");
// change MENU <-> full menu
var mobile = window.matchMedia("(max-width:760px)");
var flipMenu = function(mobile) {
  if (mobile.matches) {
    menu.style.display = "none";
    hamb.style.display = "block";
  }
  else {
    menu.style.display = "flex";
    hamb.style.display = "none";
  }
}

mobile.addListener(function(mobile){
  if (mobile.matches) {
    menu.style.display = "none";
    hamb.style.display = "block";
  }
  else {
    menu.style.display = "flex";
    menu.style.marginLeft = "0";
    hamb.style.display = "none";
  }
});

flipMenu(mobile);
//dropdown list look
hamb.addEventListener("click", openList);

function openList() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }else{
    menu.style.display = "block";
    menu.style.marginLeft = "20%";
    menu.style.position = "absolute";
  }
};


 }); // DOM contentloaded end
