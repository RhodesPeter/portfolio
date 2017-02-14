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
var project3 = document.getElementsByClassName("project3")[0];
var project4 = document.getElementsByClassName("project4")[0];
var project5 = document.getElementsByClassName("project5")[0];
var project6 = document.getElementsByClassName("project6")[0];

function mouseOver(project, url){
  project.setAttribute('src', url);
}

function mouseLeave(project, url){
  project.setAttribute('src', url);
}

// function so that project image viewed on mobile are in view with details
var mediaQuery = window.matchMedia( "(min-width: 700px)" );

if (mediaQuery.matches) {
  project1.addEventListener("mouseover", function(){mouseOver(project1, 'assets/autocomp2.svg')});
  project1.addEventListener("mouseleave", function(){mouseLeave(project1, 'assets/autocomp.svg')});

  project2.addEventListener("mouseover", function(){mouseOver(project2, 'assets/drawing-app2.svg')});
  project2.addEventListener("mouseleave", function(){mouseLeave(project2, 'assets/drawing-app.svg')});

  project3.addEventListener("mouseover", function(){mouseOver(project3, 'assets/hacker2.svg')});
  project3.addEventListener("mouseleave", function(){mouseLeave(project3, 'assets/hacker.svg')});

  project4.addEventListener("mouseover", function(){mouseOver(project4, 'assets/welcome-to-camhs2.svg')});
  project4.addEventListener("mouseleave", function(){mouseLeave(project4, 'assets/welcome-to-camhs.svg')});

  project5.addEventListener("mouseover", function(){mouseOver(project5, 'assets/stopwatch2.svg')});
  project5.addEventListener("mouseleave", function(){mouseLeave(project5, 'assets/stopwatch.svg')});

  project6.addEventListener("mouseover", function(){mouseOver(project6, 'assets/coming-soon2.svg')});
  project6.addEventListener("mouseleave", function(){mouseLeave(project6, 'assets/coming-soon.svg')});
} else {
  project1.setAttribute('src', 'assets/autocomp2.svg');

  project2.setAttribute('src', 'assets/drawing-app2.svg');

  project3.setAttribute('src', 'assets/hacker2.svg');

  project4.setAttribute('src', 'assets/welcome-to-camhs2.svg');

  project5.setAttribute('src', 'assets/stopwatch2.svg');

  project6.setAttribute('src', 'assets/coming-soon2.svg');
}
