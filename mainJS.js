const navbar = document.getElementById('main-navbar');
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const initialScrollPos = window.pageYOffset;
let prevScrollPos = window.pageYOffset;
let isNavbarVisible = true;

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
window.addEventListener('scroll', () => { 
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) { 
        navbar.style.top = `-${navbar.offsetHeight}px`;
        navbarLinks.classList.remove('active');
    } else if (currentScrollPos == initialScrollPos) {
        navbar.style.top = "0";
    }
    prevScrollPos = currentScrollPos;
});
window.addEventListener('mousemove', (event) => {
    if (event.clientY < 50) { 
        navbar.style.top = "0";
        console.log('mousemove <50 activated');
    } else if (window.pageYOffset > 50) {
        navbar.style.top = `-${navbar.offsetHeight}px`;
    } else if (window.pageYOffset < 50) {
        navbar.style.top = "0";
    }
})
/*
navbar.addEventListener("mouseover", () => { 
    console.log("mouseover");
    navbar.style.top = "0";
});*/
/*
navbar.addEventListener("mouseleave", () => { 
    if (window.pageYOffset > navbar.offsetHeight) {
        navbar.style.top = `-${navbar.offsetHeight}px`;
    }
});
*/
