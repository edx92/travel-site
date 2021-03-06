// commented out code is due to these functions being controlled in our seperated code. 
// Loading the modal Class only when required and handling some of its basic functions.

class Modal {
  constructor() {
    this.injectHTML();
    // this.openModalButtons = document.querySelectorAll('.open-modal');
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelector('.modal__close');

    this.events();

  }

  // events
  events() {
    // listen for open click
    // this.openModalButtons.forEach(el => el.addEventListener('click', e => this.openTheModal(e)));

    // listen for close click
    this.closeIcon.addEventListener('click', el => this.closeTheModal());

    // pushes any key
    document.addEventListener('keyup', e => this.keyPressHandler(e));

  }


  // Methods
  openTheModal(e) {
    // e.preventDefault();
    this.modal.classList.add('modal--is-visible');
  }

  closeTheModal() {
    this.modal.classList.remove('modal--is-visible');
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
      `);
  }
}



export default Modal