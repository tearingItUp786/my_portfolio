(function() {
    "use strict";

    var toggle = document.querySelector('.c-hamburger'),
        navbar = document.querySelector('.navbar'),
        navbarItems = document.querySelectorAll(".nav-item"),
        lastScrollY = 0,
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        ticking = false,
        showing = false,
        oldWindowHeight = 0,
        currentHeight = windowHeight + 60,
        hTicking = false;

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
            // Switch on animations.
            var name = document.querySelector(".name-holder");
            var first = name.getBoundingClientRect();
            name.style.transform = 'translate(-' + lastScrollY + 'px,' + lastScrollY + 'px)';
            var last = name.getBoundingClientRect();

            var invert = first.top - last.top;

        }
        ticking = false;
    }
    window.addEventListener('scroll', onScroll, false);
    var initHeight = window.innerHeight + 56;
		console.log(initHeight);
    document.querySelector("#home").style.height = initHeight + 'px';
    document.querySelector(".section-overlay").style.height = initHeight + 'px';
    
		window.addEventListener('resize', function() {
        var currentHeight = this.outerHeight;
        var heightDifferece = currentHeight - initHeight;
        console.log(heightDifferece);

        if (heightDifferece > 56) {
            console.log(currentHeight);
            document.querySelector("#home").style.height = currentHeight + 56;
            initHeight = currentHeight;
        } else if (heightDifferece < -56) {
            console.log(currentHeight + "In else if");
            document.querySelector("#home").style.height = currentHeight + 56;
            initHeight = currentHeight;
        }
    });

})();
