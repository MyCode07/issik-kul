function lazyImages() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.style.backgroundImage = `url('${lazyImage.dataset.original}')`;
                lazyImage.classList.add('_removegif');
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr = document.querySelectorAll('[data-original]');
    if (arr) {
        arr.forEach((v) => {
            imageObserver.observe(v);
        })
    }

    const imageObserver2 = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.add('_removegif');
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr2 = document.querySelectorAll('img[data-src]');
    if (arr2) {
        arr2.forEach((v) => {
            imageObserver2.observe(v);
        })
    }
}

lazyImages();

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
let tinezabudeshId = document.querySelector('#tinezabudesh');
let videopriglashenieId = document.querySelector('#videopriglashenie');
let galereyaId = document.querySelector('#galereya');

function scroll(link, el) {
    if (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector('.menu').classList.remove('_active');
            document.body.classList.remove('_noscroll');

            let arr = { block: "start", behavior: "smooth" };
            el.scrollIntoView(arr);
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
