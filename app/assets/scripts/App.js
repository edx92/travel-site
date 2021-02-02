import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new Modal();

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if (module.hot) {
    module.hot.accept();
}

