var linkToTop2 = document.getElementsByClassName("link-to-top2")[0]
linkToTop2.addEventListener('click', function(){ scrollToTop() })

var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-100);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(timeOut);
}
