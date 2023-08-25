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
    } else if (currentScrollPos == initialScrollPos) {
        navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
});

let test = document.getElementById('test');
let mousePos = { x: undefined, y: undefined };
window.addEventListener('mousemove', (event) => {
    const currentScrollPos2 = window.pageYOffset;
    mousePos = { x: event.clientX, y: event.clientY };
    test.textContent = `${mousePos.x} ${mousePos.y}`;
    if (event.clientY < 50) { 
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
