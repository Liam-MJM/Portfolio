const btnScrollToTop = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 220) {
    btnScrollToTop.style.display = "block";
  }

  else {
    btnScrollToTop.style.display = "none";
  }
}

btnScrollToTop.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0,0);
}
