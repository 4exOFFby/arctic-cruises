const navigationLinks = document.querySelectorAll('.site-navigation__link');
const featuresSection = document.querySelector('#features');
const productsSection = document.querySelector('#products');
const bookingSection = document.querySelector('#booking');
const contactsSection = document.querySelector('#contacts');

const scrollHandler = (section) => {
  if (section) {
    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
};


// for (let link of navigationLinks) {
//   link.addEventListener('click', (evt) => {
//     switch (evt.target.href) {
//       case '#features':
//         scrollHandler(evt, featuresSection);
//         break;
//       case '#products':
//         scrollHandler(evt, productsSection);
//         break;
//       case '#booking':
//         scrollHandler(evt, bookingSection);
//         break;
//       case '#contacts':
//         scrollHandler(evt, contactsSection);
//         break;
//     }
//   });
// }

export {navigationLinks, featuresSection, productsSection, bookingSection, contactsSection, scrollHandler};
