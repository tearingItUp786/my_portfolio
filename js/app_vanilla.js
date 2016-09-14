var toggle = document.querySelector('.c-hamburger'),
    navbar = document.querySelector('.navbar'),
    navbarItems = document.querySelectorAll(".nav-item"),
    lastScrollY = 0,
    windowHeight = window.innerHeight,
    windowWidth = window.innerWidth;
ticking = false;



toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (true === this.classList.contains("is-active")) {
        this.classList
            .remove("is-active");
        navbar.classList.remove('open');
    } else {
        this.classList.add("is-active");
        navbar.classList.add("open");
    }
});

/**
 * Callback for our scroll event - just
 * keeps track of the last scroll value
 */
function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
}

/**
 * Calls rAF if it's not already
 * been done already
 */
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
    }
}

/**
 * Our animation callback
 */
function update() {
    var mover = document.querySelector(".name-holder"),
        halfWindowHeight = window.innerHeight * 0.5,
        offset = 0;

    if (lastScrollY < windowHeight) {
        document.querySelector(".name-holder").style.transform = 'translate(-' + lastScrollY * 2 + 'px, 0)';
        document.querySelector(".mike").style.transform = 'translate(' + lastScrollY * 2 + 'px, 0)';
    }
    ticking = false;
}

// only listen for scroll events
window.addEventListener('scroll', onScroll, false);
