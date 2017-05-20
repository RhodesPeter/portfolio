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

document.getElementsByClassName("link-to-portfolio")[0].addEventListener("click", function(){
  document.getElementById("myTopnav").className = "topnav";
  scrollTo(document.body, project.offsetTop - 69, 110);

});

document.getElementsByClassName("link-to-about")[0].addEventListener("click", function(){
  document.getElementById("myTopnav").className = "topnav";
  scrollTo(document.body, about.offsetTop - 69, 180);
});

document.getElementsByClassName("link-to-skills")[0].addEventListener("click", function(){
  document.getElementById("myTopnav").className = "topnav";
  scrollTo(document.body, skills.offsetTop - 69, 210);
});

document.getElementsByClassName("link-to-contact")[0].addEventListener("click", function(){
  document.getElementById("myTopnav").className = "topnav";
  scrollTo(document.body, contact.offsetTop - 69, 255);
});

// Fixed nav links
document.getElementsByClassName("link-to-portfolio")[1].addEventListener("click", function(){
  scrollTo(document.body, project.offsetTop - 69, 110);
});

document.getElementsByClassName("link-to-about")[1].addEventListener("click", function(){
  scrollTo(document.body, about.offsetTop - 69, 180);
});

document.getElementsByClassName("link-to-skills")[1].addEventListener("click", function(){
  scrollTo(document.body, skills.offsetTop - 69, 210);
});

document.getElementsByClassName("link-to-contact")[1].addEventListener("click", function(){
  scrollTo(document.body, contact.offsetTop - 69, 255);
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

// for fixed nav
var burgerFixed = document.getElementsByClassName("burger")[1];
burgerFixed.addEventListener("click", function() {
    scrollTo(document.body, 0, 150);
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
  if ( window.pageYOffset > project.offsetTop - 70 ) {
      nav.classList.add("visible");
  } else {
      nav.classList.remove("visible");
  }
}

// to change the project images on hover
var project1 = document.getElementsByClassName("project1")[0];
var project1B = document.getElementsByClassName("project1")[1];

var project2 = document.getElementsByClassName("project2")[0];
var project2B = document.getElementsByClassName("project2")[1];

var project3 = document.getElementsByClassName("project3")[0];
var project3B = document.getElementsByClassName("project3")[1];

var project4 = document.getElementsByClassName("project4")[0];
var project4B = document.getElementsByClassName("project4")[1];

var project5 = document.getElementsByClassName("project5")[0];
var project5B = document.getElementsByClassName("project5")[1];

var project6 = document.getElementsByClassName("project6")[0];
var project6B = document.getElementsByClassName("project6")[1];

function mouseOver(project, projectB){
  project.classList.add("not-visible");
  projectB.classList.remove("not-visible");
  projectB.classList.add("visible");
}

function mouseLeave(project, projectB){
  project.classList.remove("not-visible");
  projectB.classList.remove("visible");
  projectB.classList.add("not-visible");
}

// function so that project image viewed on mobile are in view with details
var mediaQuery = window.matchMedia( "(min-width: 700px)" );

if (mediaQuery.matches) {
  project1.addEventListener("mouseover", function(){mouseOver(project1, project1B)});
  project1B.addEventListener("mouseleave", function(){mouseLeave(project1, project1B)});

  project2.addEventListener("mouseover", function(){mouseOver(project2, project2B)});
  project2B.addEventListener("mouseleave", function(){mouseLeave(project2, project2B)});

  project3.addEventListener("mouseover", function(){mouseOver(project3, project3B)});
  project3B.addEventListener("mouseleave", function(){mouseLeave(project3, project3B)});

  project4.addEventListener("mouseover", function(){mouseOver(project4, project4B)});
  project4B.addEventListener("mouseleave", function(){mouseLeave(project4, project4B)});

  project5.addEventListener("mouseover", function(){mouseOver(project5, project5B)});
  project5B.addEventListener("mouseleave", function(){mouseLeave(project5, project5B)});

  project6.addEventListener("mouseover", function(){mouseOver(project6, project6B)});
  project6B.addEventListener("mouseleave", function(){mouseLeave(project6, project6B)});
} else {
  project1.setAttribute('src', 'assets/whack-a-mole2.svg');
  project2.setAttribute('src', 'assets/drawing-app2.svg');
  project3.setAttribute('src', 'assets/city-search2.svg');
  project4.setAttribute('src', 'assets/welcome-to-camhs2.svg');
  project5.setAttribute('src', 'assets/stopwatch2.svg');
  project6.setAttribute('src', 'assets/clock2.svg');
}
