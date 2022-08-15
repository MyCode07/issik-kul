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