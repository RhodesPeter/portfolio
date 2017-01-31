// for transition on nav links
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

var project = document.getElementsByClassName('projects')[0];
var about = document.getElementsByClassName('about')[0];
var skills = document.getElementsByClassName('skills')[0];
var contact = document.getElementsByClassName('contact')[0];

document.getElementsByClassName("link-to-top")[0].addEventListener("click", function(){
  scrollTo(document.body, 0, 70);
});

document.getElementsByClassName("link-to-portfolio")[0].addEventListener("click", function(){
  scrollTo(document.body, project.offsetTop - 46, 70);
});

document.getElementsByClassName("link-to-about")[0].addEventListener("click", function(){
  scrollTo(document.body, about.offsetTop - 46, 70);
});

document.getElementsByClassName("link-to-skills")[0].addEventListener("click", function(){
  scrollTo(document.body, skills.offsetTop - 46, 70);
});

document.getElementsByClassName("link-to-contact")[0].addEventListener("click", function(){
  scrollTo(document.body, contact.offsetTop - 46, 70);
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

// for the height that the fixed-header starts at
window.onscroll = function() {
  var nav = document.getElementsByClassName('fixed-header')[0];
  if ( window.pageYOffset > project.offsetTop - 47 ) {
      nav.classList.add("opacity");
  } else {
      nav.classList.remove("opacity");
  }
}

// to change the project images on hover
var project1 = document.getElementsByClassName("project1")[0];
var project2 = document.getElementsByClassName("project2")[0];

project1.addEventListener("mouseover", function(){
  project1.setAttribute('src', 'assets/autocomp2.svg');
});

project1.addEventListener("mouseleave", function(){
  project1.setAttribute('src', 'assets/autocomp.svg');
});

project2.addEventListener("mouseover", function(){
  project2.setAttribute('src', 'assets/drawing-app2.svg');
});

project2.addEventListener("mouseleave", function(){
  project2.setAttribute('src', 'assets/drawing-app.svg');
});

// project1.addEventListener("mouseleave", noHover(project1, "assets/autocomp.svg"));
//
// function hover(element, imageSrc) {
//     element.setAttribute('src', imageSrc);
//     console.log('hover')
// }

// function noHover(element, imageSrc) {
//     element.setAttribute('src', imageSrc);
// }