const navigationLinks = document.querySelectorAll('.site-navigation__link');
const featuresSection = document.querySelector('#features');
const productsSection = document.querySelector('#products');
const bookingSection = document.querySelector('#booking');
const contactsSection = document.querySelector('#contacts');

const scrollHandler = (evt, section) => {
  if (section) {
    evt.preventDefault();
    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
};

export {navigationLinks, featuresSection, productsSection, bookingSection, contactsSection, scrollHandler};
