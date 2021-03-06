import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

// REACT RELATED CODE GOES HERE
import React from 'react';
import ReactDOM from 'react-dom';

//import react components that we created
import MyAmazingComponent from './modules/MyAmazingComponent';

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#my-react-example'));



let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new ClientArea();

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);


// adding modal functionality on the fly rather than on load
let modal;
document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (typeof modal == 'undefined') {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem loading Modal"))
        } else {
            modal.openTheModal();
        }
    });
});


// allow hot modules to load css and javascript on save without traditional reload.
if (module.hot) {
    module.hot.accept();
}

