import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.itemsToReveal = els;
        this.thresholdPercent = thresholdPercent;
        this.hideInitially();
        // lodash throttle limits the number of calls to a function. bind this means that in that function this still refers to the overall object. This is called by the initial event listener and calls the actual functionailty
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events();
        this.browserHeight = window.innerHeight;
    }

    // Events
    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            // console.log("resize just ran");
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    // Methods 
    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });

        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    // the initial call function. this only fires if isRevealed is false
    calcCaller() {
        this.itemsToReveal.forEach(el => {
            // console.log("scroll function ran");
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }
    // calculates if the elements are within the bottom 25 percent of the viewport. Reveals item then isReveal is true so calc caller is no longer called. Also removes the event listener
    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            // console.log("element was calculated");
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }


}

export default RevealOnScroll