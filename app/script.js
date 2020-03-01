'use strict';

// --------------------------change header background----------------------------//

(function () {
    var header = document.querySelector('.header'),
        header_bg__switch_button1 = header.querySelector('.header-bg__switch-button:first-child'),
        header_bg__switch_button2 = header.querySelector('.header-bg__switch-button:last-child');
    var changeInt = void 0,
        setInt = function setInt() {
        changeInt = setInterval(change_bg, 5000);
    },
        change_bg = function change_bg() {
        header.classList.toggle('active');
        header_bg__switch_button1.classList.toggle('active');
        header_bg__switch_button2.classList.toggle('active');
        clearInterval(changeInt);
        setInt();
    };

    setInt();

    header_bg__switch_button1.addEventListener('click', function () {
        if (!header_bg__switch_button1.classList.contains('active')) {
            change_bg();
        }
    });

    header_bg__switch_button2.addEventListener('click', function () {
        if (!header_bg__switch_button2.classList.contains('active')) {
            change_bg();
        }
    });
})();

//-----------------------scroll-----------------------------//

(function () {

    var smoothScroll = function smoothScroll(targetEl, duration) {
        // const headerElHeight =  document.querySelector('header').clientHeight;- пока без хедера
        var target = document.querySelector(targetEl);
        // let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        var ease = function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        var animation = function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    var scrollTo = function scrollTo() {
        var links = document.querySelectorAll('.js-scroll');
        links.forEach(function (each) {
            each.addEventListener('click', function () {
                var currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();