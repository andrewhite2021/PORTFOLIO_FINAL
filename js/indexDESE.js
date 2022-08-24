//responsive navbar toggle//

const navBar = document.querySelector("#navBar");
const navToggle = document.querySelector(".mobile-Toggle-Hamburger");

navToggle.addEventListener('click', () => {
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === "false") {
        navBar.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navBar.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}