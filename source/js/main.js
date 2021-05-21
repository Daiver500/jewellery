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
const faqButtons = document.querySelectorAll(".faq__buttons");
const faqTexts = document.querySelectorAll(".faq__text");

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
  loginWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  inputFocus();
  closeLoginButton.addEventListener("click", closeLogin);
  loginWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
  loginForm.addEventListener("submit", formSendingHandler);
};

const closeLogin = () => {
  loginWrapper.classList.add("hidden");
  document.body.style.overflow = "";
  closeLoginButton.removeEventListener("click", closeLogin);
  loginWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
  loginForm.removeEventListener("submit", formSendingHandler);
};

if (openLoginButton) {
openLoginButton.addEventListener("click", openLogin);
}


if (closeLoginButton) {
closeLoginButton.addEventListener("click", closeLogin);
}

const openLoginSuccess = (evt) => {
  loginWrapper.classList.add("hidden");
  loginSuccessWrapper.classList.remove("hidden");
  loginSuccessWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
  closeLoginSuccessButton.addEventListener("click", closeLoginSuccess);
};

const closeLoginSuccess = () => {
  loginSuccessWrapper.classList.add("hidden");
  loginSuccessWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
  closeLoginSuccessButton.removeEventListener("click", closeLoginSuccess);
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
  modalWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  closeModalButton.addEventListener("click", closeModal);
  modalWrapper.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", escPressHandler);
};

const closeModal = () => {
  modalWrapper.classList.add("hidden");
  document.body.style.overflow = "";
  closeModalButton.removeEventListener("click", closeLogin);
  modalWrapper.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", escPressHandler);
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

faqTexts.forEach((item) => {
  if (!item.classList.contains("faq__text--active")) {
    item.classList.add("hidden");
  }
});

const faqButtonHandler = () => {
  faqButtons.forEach((item) => {
    if (!item.classList.contains("faq__button--active")) {
      item.classList.add("hidden");
    }
  });
};


faqButtons.forEach((item) => {
  item.addEventListener("click", faqButtonHandler);
});

})();
