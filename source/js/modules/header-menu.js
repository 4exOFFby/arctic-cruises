const headerMenu = document.querySelector('.main-navigation');
const buttonOpen = document.querySelector('.main-navigation__button');
const mainTitle = document.querySelector('.main-screen__container h2');
const mainDescription = document.querySelector('.main-screen__container p');
const header = document.querySelector('.main-header');
const body = document.querySelector('body');
const navigationLinks = document.querySelectorAll('.main-navigation__link');

const stopListenerOnFocus = (object, method) => {
  object.addEventListener(method, (evt) => {
    evt.stopImmediatePropagation();
  });
};

const headerCloseHandler = () => {
  headerMenu.classList.remove('main-navigation--menu-open');
  body.classList.remove('main-navigation--open');
  buttonOpen.removeEventListener('click', headerCloseHandler);
  document.removeEventListener('touchend', headerCloseHandler);
  if (mainTitle) {
    mainTitle.classList.remove('main-screen__menu-open');
  }

  if (mainDescription) {
    mainDescription.classList.remove('main-screen__menu-open');
  }
};

const headerOpenMenuHandler = () => {
  headerMenu.classList.add('main-navigation--menu-open');
  body.classList.add('main-navigation--open');
  stopListenerOnFocus(headerMenu, 'touchend');
  for (let link of navigationLinks) {
    link.addEventListener('click', () => {
      body.classList.remove('main-navigation--open');
      headerMenu.classList.remove('main-navigation--menu-open');
      buttonOpen.removeEventListener('click', headerCloseHandler);
      if (mainTitle) {
        mainTitle.classList.remove('main-screen__menu-open');
      }

      if (mainDescription) {
        mainDescription.classList.remove('main-screen__menu-open');
      }
    });
  }
  buttonOpen.addEventListener('click', headerCloseHandler);
  document.addEventListener('touchend', headerCloseHandler);

  if (mainTitle) {
    mainTitle.classList.add('main-screen__menu-open');
  }

  if (mainDescription) {
    mainDescription.classList.add('main-screen__menu-open');
  }
};


export {headerOpenMenuHandler, buttonOpen, headerMenu, header};
