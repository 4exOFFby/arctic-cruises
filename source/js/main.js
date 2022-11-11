import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {headerMenuHandler, buttonOpen, headerMenu, header} from './modules/header-menu';
import {navigationLinks, featuresSection, productsSection, bookingSection, contactsSection, scrollHandler} from './modules/scroll-to';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  headerMenu.classList.remove('main-navigation--no-js');
  header.classList.remove('main-header--no-js');
  if (buttonOpen) {
    buttonOpen.addEventListener('click', headerMenuHandler);
  }

  if (navigationLinks.length > 0) {
    for (let link of navigationLinks) {
      link.addEventListener('click', (evt) => {
        switch (evt.target.ariaLabel) {
          case 'features':
            scrollHandler(evt, featuresSection);
            break;
          case 'products':
            scrollHandler(evt, productsSection);
            break;
          case 'booking':
            scrollHandler(evt, bookingSection);
            break;
          case 'contacts':
            scrollHandler(evt, contactsSection);
            break;
        }
      });
    }
  }

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
