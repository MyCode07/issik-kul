const lockPadding = document.querySelectorAll('.fixed-element');
const body = document.querySelector('body');
let timeout = 300;


let splink = document.querySelector('.spikers-link');
let programma = document.querySelector('.programma-link');
let oplata = document.querySelector('.oplata-link');
let chtotebiajdet = document.querySelector('.chtotebiajdet-link');
let tinezabudesh = document.querySelector('.tinezabudesh-link');
let videopriglashenie = document.querySelector('.videopriglashenie-link');
let galereya = document.querySelector('.galereya-link');

let splinkId = document.querySelector('#spikers');
let programmaId = document.querySelector('#programma');
let oplataId = document.querySelector('#oplata');
let chtotebiajdetId = document.querySelector('#chtotebiajdet');
let tinezabudeshId = document.querySelector('#programma');
let videopriglashenieId = document.querySelector('#videopriglashenie');
let galereyaId = document.querySelector('#galereya');
let header = document.querySelector('.header');


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

    let firstBtn = document.querySelector('.first a');
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
        const videoClose = document.querySelector('.preloader__video-close');

        setTimeout(() => {
            document.querySelector('.preloader .logo').classList.add('_video');

            if (window.innerWidth > 1024) {
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
                video.addEventListener('wheel', (e) => {
                    if (window.innerWidth > 1024) {
                        video.style.width = image.getBoundingClientRect().width + 'px';
                        video.style.height = image.getBoundingClientRect().height + 'px';
                        video.style.left = image.getBoundingClientRect().left + 'px';
                        video.style.top = image.getBoundingClientRect().top + 'px';
                        videoClose.classList.add('_hidden');
                        setTimeout(() => {
                            document.querySelector('.preloader').classList.add('_hidden');
                            video.style.opacity = 0;
                            videBox.style.pointerEvents = 'none';
                            setTimeout(() => {
                                videBox.style.display = 'none';
                            }, 200);
                        }, 500);
                    }
                    else {
                        bodyUnLock();
                    }
                })

                videoClose.addEventListener('click', (e) => {
                    if (window.innerWidth > 1024) {
                        video.style.width = image.getBoundingClientRect().width + 'px';
                        video.style.height = image.getBoundingClientRect().height + 'px';
                        video.style.left = image.getBoundingClientRect().left + 'px';
                        video.style.top = image.getBoundingClientRect().top + 'px';
                        videoClose.classList.add('_hidden');
                        setTimeout(() => {
                            document.querySelector('.preloader').classList.add('_hidden');
                            video.style.opacity = 0;
                            videBox.style.pointerEvents = 'none';
                            setTimeout(() => {
                                videBox.style.display = 'none';
                            }, 200);
                        }, 500);
                    }
                    else {
                        bodyUnLock();
                    }
                })

            }, 2000);
        }, 3000);
    }
})

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('header__burger')) {
        document.querySelector('.menu').classList.add('_active');
        if (window.innerWidth <= 1024) {
            bodyLock();
        }
    }

    if (targetEl.classList.contains('menu__burger')) {
        document.querySelector('.menu').classList.remove('_active');
        if (window.innerWidth <= 1024) {
            bodyUnLock();
        }
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
        video.preload = 'metadata';
        video.play();
    })
}


let personslides = document.querySelectorAll('.slidermax1024 .person');
if (personslides && document.body.getBoundingClientRect().width <= 1024) {
    document.querySelector('.slidermax1024 .persons__grid').classList.add('swiper');
    document.querySelector('.slidermax1024 .persons__grid-body').classList.add('swiper-wrapper');

    let swiper = new Swiper('.slidermax1024 .persons__grid', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.slidermax1024 .persons__slider-button-next',
            prevEl: '.slidermax1024 .persons__slider-button-prev',
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
                document.querySelector('.slidermax1024 .persons__titles').classList.add('_active');
            }
            else {
                document.querySelector('.slidermax1024 .persons__titles').classList.remove('_active');
            }

            if (swiper.activeIndex > 4) {
                document.querySelector('.slidermax1024  .persons__slider-button-next').classList.remove('_active');
                document.querySelector('.slidermax1024 .persons__slider-button-prev').classList.add('_active');
            }
            if (swiper.activeIndex < 1) {
                document.querySelector('.slidermax1024 .persons__slider-button-prev').classList.remove('_active');
                document.querySelector('.slidermax1024 .persons__slider-button-next').classList.add('_active');
            }

        }

        if (window.innerWidth <= 600) {
            if (swiper.activeIndex >= 1) {
                document.querySelector('.slidermax1024 .persons__titles').classList.add('_active');
            }
            else {
                document.querySelector('.slidermax1024 .persons__titles').classList.remove('_active');
            }


            if (swiper.activeIndex >= 3) {
                document.querySelector('.slidermax1024 .persons__slider-button-prev').classList.add('_active');
                document.querySelector('.slidermax1024 .persons__slider-button-next').classList.remove('_active');
            }
            if (swiper.activeIndex < 1) {
                document.querySelector('.slidermax1024 .persons__slider-button-prev').classList.remove('_active');
                document.querySelector('.slidermax1024 .persons__slider-button-next').classList.add('_active');
            }
        }
    });
}
































let scrollwrapper = document.querySelector('.scroll-wrapper');
let scrollwrapperBgc = document.querySelector('.scroll-wrapper2');
let scrollBar = document.querySelector('.persons__grid-body');
let width = scrollBar.getBoundingClientRect().width + 700;
let checkSpikers = document.querySelector('.check-speekers');
let scrollStart = document.querySelector('.scroll-start');
let scrollEnd = document.querySelector('.scroll-end');
let scr = 0;
let lock = false
let gallery = document.querySelector('.galery');
let sections = document.querySelectorAll('section');
let page = document.querySelector('.page');
let slides = document.querySelectorAll('.slidermin1025');


if (window.innerWidth > 1024) {
    page.classList.add('swiper')
    scrollwrapper.classList.add('swiper-wrapper')

    slides.forEach(slide => {
        slide.classList.add('swiper-slide');
    })

    let swiper = new Swiper('.page', {
        slidesPerView: 'auto',
        spaceBetween: 250,
        pagination: {
            el: '.page__paginarion',
            type: 'bullets',
            clickable: true,
        },

        // Скролл
        scrollbar: {
            el: '.page__progressbar',
            // Возможность перетаскивать скролл
            draggable: true
        },

        parallax: true,

        keyboard: {
            // Включить\выключить
            enabled: true,
            // Включить\выключить
            // только когда слайдер
            // в пределах вьюпорта
            onlyInViewport: true,
            // Включить\выключить
            // управление клавишами
            // pageUp, pageDown
            pageUpDown: true,
        },

        mousewheel: true,

        watchOverflow: true,
        speed: 1000,

        // Обновить свайпер
        // при изменении элементов слайдера
        observer: true,

        // Обновить свайпер
        // при изменении родительских
        // элементов слайдера
        observeParents: true,

        // Обновить свайпер
        // при изменении дочерних
        // элементов слайда
        observeSlideChildren: true,

        on: {
            slideChange: function () {

            }
        },
    })

    let scr2 = 0;

    // && gallery.classList.contains('_scroll')

    gallery.addEventListener('wheel', function (e) {
        if (window.innerWidth > 1024) {
            e.preventDefault();
            scr2 += e.deltaY;


            let scrollHeight = document.querySelector('.gallery').getBoundingClientRect().height;
            let windowHeight = window.innerHeight;
            let bottom = scrollHeight - windowHeight + 216;

            if (scr2 >= 0 && scr2 < bottom) {
                gallery.style.transform = `translate3d(0,${-scr2}px,0)`;
                zoomImage.style.transform = `translate3d(0,${scr2}px,0)`;
                zoomIBar.style.transform = `translate3d(0,${scr2}px,0)`;
                gallery.classList.add('_scroll');


                swiper.mousewheel.disable();
            }
            else if (scr2 >= bottom) {
                gallery.style.transform = `translate3d(0,${-bottom}px,0)`;
                zoomImage.style.transform = `translate3d(0,${bottom}px,0)`;
                zoomIBar.style.transform = `translate3d(0,${bottom}px,0)`;
                scr2 = bottom;
                gallery.classList.add('_scroll');
            }

            else {
                gallery.style.transform = `translate3d(0px,0,0)`;
                zoomImage.style.transform = `translate3d(0px,0,0)`;
                zoomIBar.style.transform = `translate3d(0px,0,0)`;
                scr2 = 0;
                gallery.classList.remove('_scroll');
                swiper.mousewheel.enable();
            }
        }
    })

    function scroll(link, el) {
        if (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector('.menu').classList.remove('_active');

                if (gallery.classList.contains('_scroll')) {
                    gallery.classList.remove('_scroll')
                }
                let databar = el.dataset.bar;
                swiper.slideTo(+databar);
            })
        }
    }

    scroll(splink, splinkId);
    scroll(programma, programmaId);
    scroll(oplata, oplataId);
    scroll(chtotebiajdet, chtotebiajdetId);
    scroll(tinezabudesh, tinezabudeshId);
    scroll(videopriglashenie, videopriglashenieId);
    scroll(galereya, galereyaId);

}


























function scroll2(link, el) {
    if (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.menu').classList.remove('_active');
            bodyUnLock();
            let arr = { block: "start", behavior: "smooth" };
            el.scrollIntoView(arr);
        })
    }
}

if (window.innerWidth <= 1024) {
    scroll2(splink, splinkId);
    scroll2(programma, programmaId);
    scroll2(oplata, oplataId);
    scroll2(chtotebiajdet, chtotebiajdetId);
    scroll2(tinezabudesh, tinezabudeshId);
    scroll2(videopriglashenie, videopriglashenieId);
    scroll2(galereya, galereyaId);
}

if (window.innerWidth < 1025) {
    gallery.classList.add('_scroll')
}

let zoomBox = document.querySelector('.gallery__zoom');
let zoomImage = document.querySelector('.gallery__zoom-image');
let zoomIBar = document.querySelector('.gallery__zoom-bar');
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('gallery__image') && gallery.classList.contains('_scroll')) {
        let img = targetEl.querySelector('img').cloneNode();

        zoomBox.classList.add('_active')
        zoomImage.style.backgroundImage = `url(${img.src})`;
        zoomBox.style.top = '0px';
        zoomBox.style.left = '0px';
        zoomBox.style.width = '100%';
        zoomBox.style.height = '100%';
        if (window.innerWidth > 1025) {
            header.style.opacity = 0;
            header.style.zIndex = -10;
        }
    }
    zoomImage.addEventListener('wheel', (e) => {
        if (e.deltaY == 100 || e.deltaY == -100) {
            close();
        }
    })
    function close() {
        zoomBox.classList.remove('_active')
        zoomBox.style.top = zoomBox.dataset.top + 'px';
        zoomBox.style.left = zoomBox.dataset.left + 'px';
        zoomBox.style.width = zoomBox.dataset.width + 'px';
        zoomBox.style.height = zoomBox.dataset.height + 'px';

        if (window.innerWidth > 1025) {
            header.style.opacity = 1;
            header.style.zIndex = 99;
        }
    }
    if (targetEl.classList.contains('fullscreen-plus')) {
        addFullScreen(document.documentElement);
        document.querySelector('.fullscreen').classList.add('_fullscreen');
    }
    if (targetEl.classList.contains('fullscreen-minus')) {
        removeFullScreen();
        document.querySelector('.fullscreen').classList.remove('_fullscreen');
    }

    if (targetEl.classList.contains('close')) {
        close();
    }
})

const images = document.querySelectorAll('.gallery__image');
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    let img = image.querySelector('img').cloneNode();
    image.addEventListener('mouseenter', function (e) {
        let coords = image.getBoundingClientRect();
        zoomBox.style.top = coords.top + 'px';
        zoomBox.style.left = coords.left + 'px';
        zoomBox.style.width = coords.width + 'px';
        zoomBox.style.height = coords.height + 'px';

        zoomBox.setAttribute('data-top', coords.top);
        zoomBox.setAttribute('data-left', coords.left);
        zoomBox.setAttribute('data-width', coords.width);
        zoomBox.setAttribute('data-height', coords.height);
    })
}

function addFullScreen(el) {
    // for newer Webkit and Firefox
    let rfs =
        el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullScreen
        ;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    }
    else if (typeof window.ActiveXObject != "undefined") {
        // for Internet Explorer
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function removeFullScreen() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}