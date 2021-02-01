import throttle from 'lodash/throttle'

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item");
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    // Events
    events() {
        window.addEventListener('scroll', this.scrollThrottle);

    }

    // Methods 
    calcCaller() {
        this.itemsToReveal.forEach(el => {
            console.log("fired");
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        console.log("element was calculated");
        let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add('reveal-item--is-visible');
            el.isRevealed = true;
            if (el.isLastItem) {
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });

        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll