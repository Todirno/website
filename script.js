window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
  var scrollButton = document.getElementById("scrollButtonBottom");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
    setTimeout(function(){ scrollButton.style.display = "none"; }, 100);
  }
}

function scrollToTop() {
  const scrollDuration = 1700;
  const scrollStep = -window.scrollY / (scrollDuration / 70);
  const scrollInterval = setInterval(function() {
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else clearInterval(scrollInterval);
  }, 15);
}