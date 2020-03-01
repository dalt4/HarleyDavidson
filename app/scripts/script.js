// --------------------------change header background----------------------------//

(() => {const header = document.querySelector('.header'),
    header_bg__switch_button1 =  header.querySelector('.header-bg__switch-button:first-child'),
    header_bg__switch_button2 =  header.querySelector('.header-bg__switch-button:last-child');
    let changeInt,
        setInt = () => {changeInt = setInterval(change_bg, 5000)},
        change_bg = () => {
            header.classList.toggle('active');
            header_bg__switch_button1.classList.toggle('active');
            header_bg__switch_button2.classList.toggle('active');
            clearInterval(changeInt);
            setInt()
        };

    setInt();

    header_bg__switch_button1.addEventListener('click', () => {
        if (!header_bg__switch_button1.classList.contains('active')) {
            change_bg();
        }
    });

    header_bg__switch_button2.addEventListener('click', () => {
        if (!header_bg__switch_button2.classList.contains('active')) {
            change_bg();
        }
    })
})();

//-----------------------scroll-----------------------------//

(() => {

    const smoothScroll = function (targetEl, duration) {
        // const headerElHeight =  document.querySelector('header').clientHeight;- пока без хедера
        let target = document.querySelector(targetEl);
        // let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();