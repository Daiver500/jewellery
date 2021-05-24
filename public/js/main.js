(function () {

// Окно логина и молдальное окно карточки

const openLoginButton = document.querySelector(".navigation__login");
const closeLoginButton = document.querySelector(".login__close");
const closeLoginSuccessButton = document.querySelector(".login-success__close");
const loginWrapper = document.querySelector(".login");
const loginInner = document.querySelector(".login__inner");
const loginSuccessWrapper = document.querySelector(".login-success");
const loginSuccessInner = document.querySelector(".login-success__inner");
const loginForm = document.querySelector(".login__form");
const loginMailInput = document.querySelector(".login__mail");
const loginPasswordInput = document.querySelector(".login__password");
const openModalButton = document.querySelector(".card__link");
const closeModalButton = document.querySelector(".modal__close");
const modalWrapper = document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");
const openLoginMobile = document.querySelector(".navigation__link-login");


// Хэндлеры на открытие и закрытие окон по клику на область и по кнопке


const escPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeLogin();
    closeLoginSuccess();
    closeModal();
    evt.preventDefault();
  }
};



const windowClickHandler = (evt) => {
  if (evt.target === loginWrapper || evt.target === loginSuccessWrapper || evt.target === modalWrapper) {
    console.log(evt.target);
    closeLogin();
    closeLoginSuccess();
    closeModal();
  }
};

// Логин

loginWrapper.style.position = "fixed";
loginInner.style.position = "fixed";
loginSuccessWrapper.style.position = "fixed";
loginSuccessInner.style.position = "fixed";

if (modalWrapper) {
  modalWrapper.style.position = "fixed";
  modalInner.style.position = "fixed";
}

const openLogin = (evt) => {
  evt.preventDefault();
  if (loginWrapper || closeLoginButton || loginForm) {
  loginWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  inputFocus();
  closeLoginButton.addEventListener("click", closeLogin);
  loginWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
  loginForm.addEventListener("submit", formSendingHandler);
  }
};

const closeLogin = () => {
  if (loginWrapper || closeLoginButton || loginForm) {
  loginWrapper.classList.add("hidden");
  document.body.style.overflow = "";
  closeLoginButton.removeEventListener("click", closeLogin);
  loginWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
  loginForm.removeEventListener("submit", formSendingHandler);
  }
};

if (openLoginButton) {
openLoginButton.addEventListener("click", openLogin);
}


if (closeLoginButton) {
closeLoginButton.addEventListener("click", closeLogin);
}

if (openLoginMobile) {
  openLoginMobile.addEventListener("click", openLogin);
}


const openLoginSuccess = () => {
  if (loginWrapper || loginSuccessWrapper || closeLoginSuccessButton) {
  loginWrapper.classList.add("hidden");
  loginSuccessWrapper.classList.remove("hidden");
  loginSuccessWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
  closeLoginSuccessButton.addEventListener("click", closeLoginSuccess);
  }
};

const closeLoginSuccess = () => {
  if (loginSuccessWrapper || closeLoginSuccessButton) {
  loginSuccessWrapper.classList.add("hidden");
  loginSuccessWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
  closeLoginSuccessButton.removeEventListener("click", closeLoginSuccess);
 }
};

if (closeLoginSuccessButton) {
closeLoginSuccessButton.addEventListener("click", closeLoginSuccess);
}

const formSendingHandler = (evt) => {
  evt.preventDefault();
  localStorageSet();
  loginMailInput.value = "";
  loginPasswordInput.value = "";
  closeLogin();
  openLoginSuccess();
};

// Модальное окно карточки

const openModal = (evt) => {
  evt.preventDefault();
  if (modalWrapper || closeModalButton) {
  modalWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  closeModalButton.addEventListener("click", closeModal);
  modalWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
  }
};

const closeModal = () => {
  if (modalWrapper || closeModalButton) {
  modalWrapper.classList.add("hidden");
  document.body.style.overflow = "";
  closeModalButton.removeEventListener("click", closeLogin);
  modalWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
  }
};

if (openModalButton) {
openModalButton.addEventListener("click", openModal);
}

if (closeModalButton) {
closeModalButton.addEventListener("click", closeModal);
}

// Local storage

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

const localStorageSet = () => {
  if(isStorageSupport) {
    localStorage.setItem("login", loginMailInput.value);
  }
};

const inputFocus = () => {
  if (storage) {
    loginMailInput.value = storage;
    loginPasswordInput.focus();
  } else {
    loginMailInput.focus();
  }
};

// FAQ

const faqTitles = document.querySelectorAll(".faq__title");
const faqTexts = document.querySelectorAll(".faq__text");
const faqMaterialsText = document.getElementById("materials-text");
const faqCountriesText = document.getElementById("countries-text");
const faqPaymentsText = document.getElementById("payments-text");
const faqReturnsText = document.getElementById("returns-text");
const faqMaterialsButton = document.getElementById("materials");
const faqCountriesButton = document.getElementById("countries");
const faqPaymentsButton = document.getElementById("payments");
const faqReturnsButton = document.getElementById("returns");



faqTexts.forEach((item) => {
  if(!item.classList.contains("faq__text--active")) {
    item.classList.add("hidden");
  } else {
    item.classList.remove("hidden");
  }
});

const setActiveText = () => {
faqTexts.forEach((item) => {
  if(!item.classList.contains("faq__text--active")) {
    item.classList.add("hidden");
  } else {
    item.classList.remove("hidden");
  }
 });
};

const clickFaqMaterialsButtons = () => {
  faqMaterialsText.classList.toggle("faq__text--active");
  faqMaterialsButton.classList.toggle("faq__buttons--active");
};

const clickFaqCountriesButtons = () => {
  faqCountriesText.classList.toggle("faq__text--active");
  faqCountriesButton.classList.toggle("faq__buttons--active");
};

const clickFaqPaymentsButtons = () => {
  faqPaymentsText.classList.toggle("faq__text--active");
  faqPaymentsButton.classList.toggle("faq__buttons--active");
};

const clickFaqReturnsButtons = () => {
  faqReturnsText.classList.toggle("faq__text--active");
  faqReturnsButton.classList.toggle("faq__buttons--active");
};


const faqWindowClickHandler = (evt) => {
    switch (evt.target.id) {
    case "materials-title":
      clickFaqMaterialsButtons();
      setActiveText();
      break;
    case "countries-title":
      clickFaqCountriesButtons();
      setActiveText();
      break;
    case "payments-title":
      clickFaqPaymentsButtons();
      setActiveText();
      break;
    case "returns-title":
      clickFaqReturnsButtons();
      setActiveText();
    break;
    default:
  }
};

faqTitles.forEach((item) => {
  item.addEventListener("click", faqWindowClickHandler);
});


// Слайдер
const mobileSlider = window.matchMedia("(max-width: 1023px)");
const slides = document.querySelectorAll(".slider__item");
//const slide = document.querySelector(".slider__item");
const buttonRight = document.querySelector(".slider__button--right");
const buttonLeft = document.querySelector(".slider__button--left");
const slidesField = document.querySelector(".slider__wrapper-inner");

let offset = 0;

if (slidesField) {
width = window.getComputedStyle(slidesField).width;

buttonRight.addEventListener("click", () => {
  if (offset === +width.slice(0, width.length - 2) * (slides.length - 3)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(-${offset}px )`;
});

buttonLeft.addEventListener("click", () => {
  if (offset === 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 3);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  slidesField.style.transform = `translateX(+${offset}px )`;
});
}

// Меню

const navigationToggle = document.querySelector(".navigation__toggle");
const navigationMenu = document.querySelector(".navigation__menu");
const navigationInput = document.querySelector(".navigation__input-tablet");
const navigationInner = document.querySelector(".navigation__inner");
const navigationLogo = document.getElementById("logo");
const navigationCart = document.querySelector(".navigation__cart-mobile");
const navigationUpperPart = document.querySelector(".navigation__upper-part");
const mediaQuery = window.matchMedia("(max-width: 1023px)");

const navigationOpen = () => {
  navigationMenu.classList.toggle(`hidden`);
  navigationInput.classList.toggle("hidden");
  document.body.classList.toggle(`no-scroll`);
  navigationToggle.classList.toggle("navigation__toggle--active");
  navigationCart.classList.toggle("navigation__cart-mobile--active");
  if (mediaQuery.matches && !navigationMenu.classList.contains("hidden")) {
    navigationInner.style.background = "#a87b62";
    navigationInner.style.paddingBottom = "80px";
    navigationLogo.style.color = "white";
    navigationUpperPart.style.marginBottom = "95px";
  } else {
    navigationInner.style.background = "white";
    navigationInner.style.paddingBottom = "0";
    navigationLogo.style.color = "#a87b62";
    navigationUpperPart.style.marginBottom = "20px";
  }
};

if (mediaQuery.matches) {
navigationMenu.classList.add("hidden");
navigationInput.classList.add("hidden");
navigationToggle.classList.add("navigation__toggle--active");
navigationCart.classList.add("navigation__cart-mobile--active");
navigationInner.style.background = "white";
navigationInner.style.paddingBottom = "0";
navigationLogo.style.color = "#a87b62";
navigationUpperPart.style.marginBottom = "20px";
}

navigationToggle.addEventListener(`click`, navigationOpen);


// Фильтр

const filterCheckboxes = document.querySelectorAll(".checkbox__form");
const filterTitles = document.querySelectorAll(".catalog__title-filter");
const catalogRangebox = document.querySelector(".range");
const filterProductCheckbox = document.getElementById("product-checkbox");
const filterMaterialCheckbox = document.getElementById("material-checkbox");
const filterCollectionCheckbox = document.getElementById("collection-checkbox");
const filterPriceCheckbox = document.getElementById("price-checkbox");
const filterProductsButton = document.getElementById("product-button");
const filterMaterialButton = document.getElementById("material-button");
const filterCollectionButton = document.getElementById("collection-button");
const filterPriceButton = document.getElementById("price-button");
const catalogFilter = document.querySelector(".catalog__filter");
const filterOpenButton = document.querySelector(".catalog__button-header");
const filterCloseButton = document.querySelector(".catalog__filter-button-close");

if (mediaQuery.matches) {
  catalogFilter.classList.add("hidden");
}

const openFilter = (evt) => {
  catalogFilter.classList.remove("hidden");
  evt.preventDefault();
};

const closeFilter = () => {
  catalogFilter.classList.add("hidden");
};

if (filterOpenButton) {
filterOpenButton.addEventListener("click", openFilter);
}

if (filterCloseButton) {
filterCloseButton.addEventListener("click", closeFilter);
}

filterCheckboxes.forEach((item) => {
  if(!item.classList.contains("checkbox__form--active")) {
    item.classList.add("hidden");
  } else {
    item.classList.remove("hidden");
  }
});

const setActiveCheckbox = () => {
  filterCheckboxes.forEach((item) => {
  if(!item.classList.contains("checkbox__form--active")) {
    item.classList.add("hidden");
  } else {
    item.classList.remove("hidden");
  }
 });
};

const setActiveRangebox = () => {
  if(!catalogRangebox.classList.contains("checkbox__form--active")) {
    catalogRangebox.classList.add("hidden");
  } else {
    catalogRangebox.classList.remove("hidden");
  }
}


const clickProductButton = () => {
  filterProductCheckbox.classList.toggle("checkbox__form--active");
  filterProductsButton.classList.toggle("form__button--active");
};

const clickMaterialButton = () => {
  filterMaterialCheckbox.classList.toggle("checkbox__form--active");
  filterMaterialButton.classList.toggle("form__button--active");
};

const clickCollectionButton = () => {
  filterCollectionCheckbox.classList.toggle("checkbox__form--active");
  filterCollectionButton.classList.toggle("form__button--active");
};

const clickPriceButton = () => {
  filterPriceCheckbox.classList.toggle("checkbox__form--active");
  filterPriceButton.classList.toggle("form__button--active");
};


const filterWindowClickHandler = (evt) => {
    switch (evt.target.id) {
    case "product":
      clickProductButton();
      setActiveCheckbox();
      break;
    case "material":
      clickMaterialButton();
      setActiveCheckbox();
      break;
    case "collection":
      clickCollectionButton();
      setActiveCheckbox();
      break;
    case "price":
      clickPriceButton();
      setActiveRangebox();
    break;
    default:
  }
};

filterTitles.forEach((item) => {
  item.addEventListener("click", filterWindowClickHandler);
});

})();
