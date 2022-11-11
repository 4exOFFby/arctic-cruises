const headerMenu = document.querySelector('.main-navigation');
const buttonOpen = document.querySelector('.main-navigation__button');
const mainTitle = document.querySelector('.main-screen__container h2');
const mainDescription = document.querySelector('.main-screen__container p');
const header = document.querySelector('.main-header');

const headerMenuHandler = () => {
  headerMenu.classList.toggle('main-navigation--menu-open');
  if (mainTitle) {
    mainTitle.classList.toggle('main-screen__menu-open');
  }

  if (mainDescription) {
    mainDescription.classList.toggle('main-screen__menu-open');
  }
};

export {headerMenuHandler, buttonOpen, headerMenu, header};
