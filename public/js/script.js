window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealHorizontal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealHorizontal() {
  var reveal_horizontals = document.querySelectorAll(".reveal-horizontal");
  for (let i = 0; i < reveal_horizontals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveal_horizontals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal_horizontals[i].classList.add("active-horizon");
    } else {
      reveal_horizontals[i].classList.remove("active-horizon");
    }
  }
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
