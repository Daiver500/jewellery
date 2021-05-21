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

const faqTexts = document.querySelectorAll(".faq__text");
const faqButtons = document.querySelectorAll(".faq__buttons");
const faqMaterialsText = document.getElementById("materials-text");
const faqCountriesText = document.getElementById("countries-text");
const faqPaymentsText = document.getElementById("payments-text");
const faqReturnsText = document.getElementById("returns-text");

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

const setActiveButton = (evt) => {
   if(evt.target.classList.contains("faq__button--active")) {
    evt.target.classList.remove("faq__button--active");
   } else {
    evt.target.classList.add("faq__button--active");
   }
};


const clickFaqMaterialsButtons = () => {
  faqMaterialsText.classList.toggle("faq__text--active");
};

const clickFaqCountriesButtons = () => {
  faqCountriesText.classList.toggle("faq__text--active");
};

const clickFaqPaymentsButtons = () => {
  faqPaymentsText.classList.toggle("faq__text--active");
};

const clickFaqReturnsButtons = () => {
  faqReturnsText.classList.toggle("faq__text--active");
};


const faqWindowClickHandler = (evt) => {
    switch (evt.target.id) {
    case "materials":
      clickFaqMaterialsButtons();
      setActiveText();
      break;
    case "countries":
      clickFaqCountriesButtons();
      setActiveText();
      break;
    case "payments":
      clickFaqPaymentsButtons();
      setActiveText();
      break;
    case "returns":
      clickFaqReturnsButtons();
      setActiveText();
    break;
    default:
  }
};

faqButtons.forEach((item) => {
  item.addEventListener("click", setActiveButton);
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
})();
