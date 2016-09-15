$(document).ready(function() {
    "use strict";

    var toggle = document.querySelector('.c-hamburger'),
        navbar = document.querySelector('.navbar'),
        navbarItems = document.querySelectorAll(".nav-item"),
        lastScrollY = 0,
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        ticking = false,
        showing = false;

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

    $('.nav-item a').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if ($('.c-hamburger').hasClass('is-active')) {
                $('.c-hamburger').removeClass('is-active');
                $('.navbar').removeClass('open');
            }

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 400);

                return false;
            }
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

        if (lastScrollY > windowHeight - 50) {
            $('.navbar').addClass('active');
            $('.inner-logo').addClass('svg-light');
        } else {
            $('.navbar').removeClass('active');
            $('.inner-logo').removeClass('svg-light');
        }

        if (lastScrollY < $('.about').offset().top) {
            removeActiveClass();
        }

        if ((lastScrollY >= $('.about').offset().top - 20) && (lastScrollY < $('.portfolio').offset().top - 20)) {
            removeActiveClass();
            navbarItems[1].children[0].classList.add('active');
        }
        if (showing === false && lastScrollY >= $('.portfolio').offset().top - 300) {
            console.log("showing was false");
            $('.portfolio .thumbnail img').each(function(i) {
                setTimeout(function() {
                    $('.portfolio .thumbnail img').eq(i).addClass('is-showing');
                }, (700 * (Math.exp(i * 0.14))) - 700);

            });
            showing = true;
        }

        if (lastScrollY >= $('.portfolio').offset().top - 20) {
            removeActiveClass();
            navbarItems[3].children[0].classList.add('active');
        }

        if (lastScrollY >= $('.contact').offset().top - 20) {
            removeActiveClass();
            navbarItems[4].children[0].classList.add('active');
        }


        ticking = false;
    }

    function removeActiveClass() {
        $('.nav-item').each(function() {
            $(this).removeClass('active');
            $(this).children().removeClass('active');
        });
    }


    // only listen for scroll events
    window.addEventListener('scroll', onScroll, false);

    var initHeight = $(window).height() + 56;

    $('#home').css({
        'height': initHeight
    });

    $(window).resize(function() {
        var currentHeight = $(window).height();

        var heightDifferece = currentHeight - initHeight;
        console.log(heightDifferece);

        if (heightDifferece > 56) {
            // console.log("Current Height was greater by init height more than navbar")
            $('#home').css({
                'height': currentHeight + 56
            });
            initHeight = currentHeight;
        } else if (heightDifferece < -56) {
            // console.log("Current Height was less by init height more than navbar")
            $('#home').css({
                'height': currentHeight + 56
            });
            initHeight = currentHeight;
        }
    });
});

var projects = [{
    'id': 'project1',
    'attributes': {
        'name': 'Portfolio Website - Makeup Artist',
        'date': 'May 5, 2016 - May 28, 2016',
        'image': '/images/project_images/thumbnails/makeupbyravia-small.jpg',
        'image_caption': 'Makeupbyravia: A surrey based makeup artist.',
        'description': "A freelance front-end web project that's purpose was to highlight the work of a local makeup artist. My role was to design the logo and the website in its entirety.",
        'technology_stack': ['HTML', 'SASS', 'Grunt', 'Git', 'Jekyll', 'Illustrator', 'Photoshop', 'JavaScript/jQuery'],
        'url': 'http://makeupbyravia.com/'
    }
}, {
    'id': 'project2',
    'attributes': {
        'name': 'Neighbordhood Map V2.0',
        'date': 'April 20, 2016 - June 2, 2016',
        'image': '/images/project_images/thumbnails/map-small.jpg',
        'image_caption': 'HoodMap: A map built with the Yelp API and Google Maps',
        'technology_stack': ['HTML', 'SASS', 'Grunt', 'Git', 'Knockoust JS', 'Illustrator', 'Yelp API', 'Google Maps', 'JavaScript/jQuery'],
        'description': "This was one of the projects in Udacity's Front-End Web Developer Nanodegree. The purposes of this project were to gain experience using the MVC pattern of development, a JavaScript Framework (Knockout.js), and third-party APIS.",
        'url': 'http://taran.bus.sfu.ca/HoodV2/'
    }
}, {
    'id': 'project3',
    'attributes': {
        'name': 'Udacity Resume',
        'date': 'February 1, 2016 - February 20, 2016',
        'image': '/images/project_images/thumbnails/resume-small.jpg',
        'image_caption': 'Resume: Built dynamically with JavaScript',
        'description': "This was another project in Udacity's Front-End Web Developer Nanodegree. The purpose of this project was to practice basic JavaScript skills such as loops, functions and DOM manipulation.",
        'technology_stack': ['HTML', 'CSS', 'Git', 'Google Maps', 'JavaScript/jQuery'],
        'url': 'http://taran.bus.sfu.ca/frontend-nanodegree-resume/'
    }
}, {
    'id': 'project4',
    'attributes': {
        'name': 'Blog Version 1.0',
        'date': 'December 2014 - January 2015',
        'image': '/images/project_images/thumbnails/blog1-small.jpg',
        'image_caption': 'My first attempt at building a blog using PHP and MySQL',
        'description': "This was my first ever web project. It is continually being updated so this section is subject to change. I created the content for this blog, used Git for version control and to manage my testing/production hosts, and performed several configurations to my server.",
        'technology_stack': ['HTML', 'CSS', 'Git', 'MySQL', 'Bootstrap', 'Photoshop', 'JavaScript/jQuery'],
        'url': 'http://taran.bus.sfu.ca/time-for-a-revamp/'
    }
}, {
    'id': 'project5',
    'attributes': {
        'name': '25toLife',
        'date': 'September 2015 - October 2015',
        'image': '/images/project_images/thumbnails/twentyfivetolife-small.jpg',
        'image_caption': 'Twentyfivetolife: A website built for BUS 361',
        'description': "First paid front end web development project. Utilized the bootstrap framework to create the layout. This project's purpose was to replace the outdated style with a more modern look within a constricted timeframe. The project had to be live within two weeks of development.",
        'technology_stack': ['HTML', 'CSS', 'Git', 'Bootstrap', 'JavaScript/jQuery'],
        'url': 'http://www.twentyfivetolife.ca/'
    }
}, {
    'id': 'project6',
    'attributes': {
        'name': 'Jasmine - Test Driven Development',
        'date': 'June 1, 2016 - June 8, 2016',
        'image': '/images/project_images/thumbnails/jasmine-small.jpg',
        'image_caption': 'Jasmine Project: Test driven development intro',
        'description': "This was a project in Udacity's Front-End Web Developer Nanodegree. The purposes of this project were to gain experience using a testing framework and to introduce students to test driven development in the JavaScript language.",
        'technology_stack': ['HTML', 'CSS', 'Git', 'Jasmine', 'JavaScript/jQuery'],
        'url': 'https://github.com/tearingItUp786/frontend-nanodegree-feedreader.git'
    }
}];

function openDialog(param) {

    for (var key in projects) {
        if (projects.hasOwnProperty(key)) {
            if (projects[key].id === param.id) {
                var project = projects[key].attributes;

                var list_of_technologies = "";
                for (var technology in project.technology_stack) {
                    if (project.technology_stack.hasOwnProperty(technology)) {
                        list_of_technologies += ('<li>' + project.technology_stack[technology] + '</li>');
                    }
                }

                vex.defaultOptions.className = 'vex-theme-wireframe';
                vex.open({
                    content: '<div class="project-info"><h2 class="project-name">' + project.name + '</h2><h3 class="project-date">' + project.date + '</h3>' +
                        '<p class="project-description">' + project.description + '</p></div>' +
                        '<figure><img src="' + project.image + '"/><figcaption>' +
                        project.image_caption + '</figcaption></figure>' +
                        '<div class="technology-stack">' +
                        '<h2 class="technology-stack-title">Technology Stack</h2>' +
                        '<ul class="technology-list">' + list_of_technologies + '</ul></div>' +
                        '<div class="url-box"><h2 class="link">URL</h2>' +
                        '<a class="url" target="_blank" href="' + project.url + '">' + project.url + '</a>' +
                        '</div>'
                });
            }
        }
    }
}
