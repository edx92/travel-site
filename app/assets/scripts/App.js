import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll';

let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();

if (module.hot) {
    module.hot.accept();
}

