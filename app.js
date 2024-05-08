//Button Scroll to Top
const btnScrollUp = document.querySelector(".scroll-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnScrollUp.style.display = "block";
  } else {
    btnScrollUp.style.display = "none";
  }
}

function scrollUp () {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

btnScrollUp.addEventListener("click", scrollUp)