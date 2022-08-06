const lockPadding = document.querySelectorAll('.fixed-element');
const body = document.querySelector('body');
let timeout = 300;

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.first').offsetWidth;

    for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = lockPaddingValue + 'px';
    }

    body.style.paddingRight = lockPaddingValue + 'px';
    body.classList.add('_noscroll');
}

function bodyUnLock() {
    setTimeout(() => {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = '0px';
        }

        body.style.paddingRight = '0px';
        body.classList.remove('_noscroll');
    }, timeout);
}

document.addEventListener('DOMContentLoaded', function (e) {

    const slides = document.querySelectorAll('.programm__slider-slide');

    if (slides) {
        new Swiper('.programm__slider-swiper', {
            loop: true,
            navigation: {
                prevEl: '.programm__slider-prev',
                nextEl: '.programm__slider-next',
            },
            slidesPerView: 'auto',

            lazy: {
                loadOnTransitonStart: false,
                loadprevNext: false,
            },

            breakpoints: {
                320: {
                    centeredSlides: true,
                    slidesPerGroup: 1,
                },

                768: {
                    centeredSlides: false,
                    slidesPerGroup: 3,
                },

                992: {
                    slidesPerGroup: 4,
                },
            }
        })
    }

    let firstBtn = document.querySelector('.first button');
    let firstDate = document.querySelector('.data-gradient');

    let menuSocials = document.querySelector('.menu__socials');

    if (window.innerWidth <= 992) {

        if (firstBtn) {
            document.querySelector('.first__image').after(firstBtn);
            document.querySelector('.first__image').after(firstDate);
        }

        if (menuSocials) {
            document.querySelector('.menu__burger-parent').append(menuSocials);
        }

    }

    let image = document.querySelector('.first__image-main');

    if (image.src) {
        const videBox = document.querySelector('.preloader__video');
        const video = document.querySelector('.preloader__video video');

        setTimeout(() => {
            document.querySelector('.preloader .logo').classList.add('_video');

            if (window.innerWidth >= 1024) {
                videBox.classList.add('_active');
                video.play();
            }
            else {
                video.setAttribute('preload', 'none')
                document.querySelector('.preloader').classList.add('_remove');
                document.body.classList.remove('_noscroll');
            }

            setTimeout(() => {
                document.querySelector('.preloader').classList.add('_hidden');
                window.addEventListener('scroll', (e) => {
                    if (window.innerWidth >= 1024) {
                        video.style.width = image.getBoundingClientRect().width + 'px';
                        video.style.height = image.getBoundingClientRect().height + 'px';
                        video.style.left = image.getBoundingClientRect().left + 'px';
                        video.style.top = image.getBoundingClientRect().top + window.scrollY + 'px';
                        setTimeout(() => {
                            document.querySelector('.preloader').classList.add('_hidden');
                            video.style.opacity = 0;
                            videBox.style.pointerEvents = 'none';
                            setTimeout(() => {
                                videBox.style.display = 'none';
                            }, 200);
                        }, 500);
                    }
                })
                document.body.classList.remove('_noscroll');
            }, 2000);
        }, 3000);
    }
})

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('header__burger')) {
        document.querySelector('.menu').classList.add('_active');
        bodyLock()
    }

    if (targetEl.classList.contains('menu__burger')) {
        document.querySelector('.menu').classList.remove('_active');
        bodyUnLock()
    }

    if (targetEl.classList.contains('popup__video-close')) {
        document.querySelector('.popup__video').classList.remove('_active');
        document.querySelector('.popup__video video').pause();
    }

    if (targetEl.classList.contains('popup__video-overlay')) {
        document.querySelector('.popup__video').classList.remove('_active');
        document.querySelector('.popup__video video').pause();
    }
})

let videBox = document.querySelector('.video__box-video img');

if (videBox) {
    videBox.addEventListener('click', () => {
        document.querySelector('.popup__video').classList.add('_active');
        let video = document.querySelector('.popup__video video')
        video.play();
    })
}

let personslides = document.querySelectorAll('.person');
if (personslides && document.body.getBoundingClientRect().width <= 1024) {
    document.querySelector('.persons__grid').classList.add('swiper');
    document.querySelector('.persons__grid-body').classList.add('swiper-wrapper');

    let swiper = new Swiper('.persons__grid', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.persons__slider-button-next',
            prevEl: '.persons__slider-button-prev',
        },
        spaceBetween: 0,
        pagination: false,
        on: {
            scroll: function (e) {
            },
        },

        breakpoints: {
            320: {
                grid: {
                    rows: 3,
                    fill: 'row'
                },
            },

            601: {
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },

        }

    });

    swiper.on('slideChange', function () {
        if (window.innerWidth <= 1024 && window.innerWidth > 600) {
            if (swiper.activeIndex >= 2) {
                document.querySelector('.persons__titles').classList.add('_active');
            }
            else {
                document.querySelector('.persons__titles').classList.remove('_active');
            }

            if (swiper.activeIndex >= 5) {
                document.querySelector('.persons__slider-button-prev').classList.add('_active');
                document.querySelector('.persons__slider-button-next').classList.remove('_active');
            }
            if (swiper.activeIndex < 1) {
                document.querySelector('.persons__slider-button-prev').classList.remove('_active');
                document.querySelector('.persons__slider-button-next').classList.add('_active');
            }
        }

        if (window.innerWidth <= 600) {
            if (swiper.activeIndex >= 1) {
                document.querySelector('.persons__titles').classList.add('_active');
            }
            else {
                document.querySelector('.persons__titles').classList.remove('_active');
            }


            if (swiper.activeIndex >= 3) {
                document.querySelector('.persons__slider-button-prev').classList.add('_active');
                document.querySelector('.persons__slider-button-next').classList.remove('_active');
            }
            if (swiper.activeIndex < 1) {
                document.querySelector('.persons__slider-button-prev').classList.remove('_active');
                document.querySelector('.persons__slider-button-next').classList.add('_active');
            }
        }
    });
}

let persons = document.querySelector('.persons');
let scrollBer = document.querySelector('.persons__grid-body');
let container = document.querySelector('.programm__container');
let width = scrollBer.getBoundingClientRect().width + 700;
let count = Math.floor(width / 100);
let programm = document.querySelector('.programm');
let steps = document.querySelector('.steps');
let checkSpikers = document.querySelector('.check-speekers');
let scrollStart = document.querySelector('.scroll-start');
let scrollEnd = document.querySelector('.scroll-end');
let scr = 0;

persons.addEventListener('wheel', function (e) {
    if (window.innerWidth > 1024) {
        persons.classList.remove('_pointerevents')

        persons.classList.add('_active')
        e.preventDefault();
        scr += e.deltaY;
        scrollBer.scrollLeft += e.deltaY;
        let coords = scrollBer.getBoundingClientRect();


        paddingToScrollBar();

        let bodyWidth = document.body.getBoundingClientRect().width;
        let containerWidth = container.getBoundingClientRect().width;
        let padding = (bodyWidth - containerWidth) / 2;


        let scrollStartPoint = scrollStart.getBoundingClientRect().left - padding;
        let scrollEndpoint = scrollEnd.getBoundingClientRect().left - padding;


        if (scrollEndpoint <= 10) {
            document.body.classList.remove('_noscroll')
            persons.classList.remove('_active')
            persons.classList.add('_pointerevents')
        }


        if (scrollStartPoint >= 0) {
            document.body.classList.remove('_noscroll')
            persons.classList.remove('_active')
            persons.classList.add('_pointerevents')
        }


        let checkSpikersCoords = checkSpikers.getBoundingClientRect().left - padding;


        if (checkSpikersCoords <= 10) {
            document.querySelector('.persons__titles').classList.add('_active');
        }
        else {
            document.querySelector('.persons__titles').classList.remove('_active');
        }
    }


})

function paddingToScrollBar() {
    let bodyWidth = document.body.getBoundingClientRect().width;
    let containerWidth = container.getBoundingClientRect().width;
    let padding = (bodyWidth - containerWidth) / 2;

    if (window.innerWidth >= containerWidth + 60) {
        scrollBer.style.paddingLeft = `${padding}px`;
        scrollBer.style.paddingRight = `${padding}px`;
    }
    if (window.innerWidth <= 1024 && window.innerWidth > 992) {
        scrollBer.style.paddingLeft = `30px`;
        scrollBer.style.paddingRight = `30px`;
    }
    if (window.innerWidth <= 992) {
        scrollBer.style.paddingLeft = `20px`;
        scrollBer.style.paddingRight = `0`;
    }
    if (window.innerWidth <= 768) {
        scrollBer.style.paddingLeft = `15px`;
    }

}

paddingToScrollBar();

window.addEventListener('scroll', function () {
    if (persons.classList.contains('_pointerevents')) {
        persons.classList.remove('_pointerevents')
    }
})