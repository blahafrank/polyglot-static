for (let scrollToLink of document.getElementsByClassName('js-scroll-to')) {
    scrollToLink.addEventListener('click', () => {
        switch (scrollToLink.dataset.scrollTo) {
            case 'welcome': {
                setTimeout(() => {
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',

                    });
                }, 2);

                break;
            }
            case 'concept': {
                setTimeout(() => {
                    window.scroll({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }, 2);

                break;
            }
            case 'about_us': {
                setTimeout(() => {
                    window.scroll({
                        top: window.innerHeight * 2,
                        behavior: 'smooth'
                    });
                }, 2);

                break;
            }
            case 'contact': {
                setTimeout(() => {
                    window.scroll({
                        top: window.innerHeight * 3,
                        behavior: 'smooth'
                    });
                }, 2);

                break;
            }
        }
    });
}