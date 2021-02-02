import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header");
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }


    //events
    events() {
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }


    //methods
    runOnScroll() {
        this.determineScrollDirection();
        //Add darker class for scrolling sticky header. This also is used to adjust logo transform
        if (window.scrollY > 60) {
            this.siteHeader.classList.add("site-header--dark");
        } else {
            this.siteHeader.classList.remove("site-header--dark");
        }

        // call the calculator function for each page section
        this.pageSections.forEach(el => this.calcSection(el));
    }

    calcSection(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100;
            // if the element is less than X% scrolled but more than 0% scrolled and scrolling down, then run. OR for up, once scroll percent is less than X. Remove the is current class form all and add it to the current link.
            if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add("is-current-link");
            }
        }
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = "up";
        }

        this.previousScrollY = window.scrollY;
    }
}


export default StickyHeader