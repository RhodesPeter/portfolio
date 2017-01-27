window.onscroll = function() {
  var nav = document.getElementsByClassName('fixed-header')[0];
  if ( window.pageYOffset > 536 ) {
      nav.classList.add("opacity");
  } else {
      nav.classList.remove("opacity");
  }
}

elmnt = document.getElementById("projects");

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

document.getElementsByClassName("link-to-portfolio")[0].addEventListener("click", function(){
  scrollTo(document.body, 537, 70);
});

// for nav bar
var burger = document.getElementsByClassName("burger")[0];
burger.addEventListener("click", function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});
