(function () {

const about = document.querySelector(`.about`);
const catalog = document.querySelector(`.catalog`);
const video = document.querySelector(`.video`);
const footerHeader = document.querySelector(`.footer__header`);
const navigationToggleClose = document.querySelector(`.navigation__toggle-close`)
const navigationToggleOpen = document.querySelector(`.navigation__toggle-open`)
const navigationMenu = document.querySelector(`.navigation__destinations`)
const mainFormName = document.querySelector(`.main__form-name`);
const mainFormNameTablet = document.querySelector(`.main-tablet__name`);
const navigationButtons = document.querySelectorAll(`.navigation__button`);

navigationMenu.classList.add(`hidden`);
navigationToggleOpen.classList.remove(`hidden`);

//if (mainFormName.value === `` && mainFormNameTablet === ``) {
  //mainFormName.setCustomValidity(`Введите ваше имя`);
  //mainFormNameTablet.setCustomValidity(`Введите ваше имя`);
//}
//mainFormName.reportValidity();
//mainFormNameTablet.reportValidity();

mainFormName.addEventListener(`input`, function () {
  if (mainFormName.value === ``) {
    mainFormName.setCustomValidity(`Введите ваше имя`);
  } else {
    mainFormName.setCustomValidity(``);
  }
  mainFormName.reportValidity();
});

mainFormNameTablet.addEventListener(`input`, function () {
  if (mainFormNameTablet.value === ``) {
    mainFormNameTablet.setCustomValidity(`Введите ваше имя`);
  } else {
    mainFormNameTablet.setCustomValidity(``);
  }
  mainFormNameTablet.reportValidity();
});

const navigationButtonClickHandler = (evt) => {
  switch (evt.target.id) {
    case `button-about`:
      about.scrollIntoView({behavior: `smooth`});
      break;
    case "button-catalog":
      catalog.scrollIntoView({behavior: `smooth`});
      break;
    case `button-video`:
      video.scrollIntoView({behavior: `smooth`});
      break;
    case `button-contacts`:
        footerHeader.scrollIntoView({behavior: `smooth`});
      break;
  }
  console.log(evt.target.id)
}

navigationButtons.forEach((button) => {
  button.addEventListener(`click`, navigationButtonClickHandler)
});

const navigationClose = () => {
  navigationMenu.classList.add(`hidden`);
  document.body.classList.remove(`noscroll`)
  navigationToggleClose.classList.add(`hidden`);
  navigationToggleOpen.classList.remove(`hidden`);
}

const navigationOpen = () => {
  navigationMenu.classList.remove(`hidden`);
  document.body.classList.add(`noscroll`)
  navigationToggleClose.classList.remove(`hidden`);
  navigationToggleOpen.classList.add(`hidden`);
}

navigationToggleClose.addEventListener(`click`, navigationClose);
navigationToggleOpen.addEventListener(`click`, navigationOpen);

// Подвал мобильная версия

const footerMapButtonOpen = document.querySelector(".map__button--open");
const footerMapButtonClose = document.querySelector(".map__button--close");
const footerMapLists = document.querySelector(".map__lists");
const footerContactsButtonOpen = document.querySelector(".contacts__button--open");
const footerContactsButtonClose = document.querySelector(".contacts__button--close");
const footerContactsLists = document.querySelector(".contacts__information");
const footerMap = document.querySelector(".footer__map");
const footerContacts = document.querySelector(".footer__contacts");

footerMapLists.classList.add("lists__hidden");
footerContactsLists.classList.add("lists__hidden");

const showFooterMapLists = () => {
  footerMapLists.classList.remove("lists__hidden");
  footerMapButtonOpen.classList.add("hidden");
  footerMapButtonClose.classList.remove("hidden");
};

const hideFooterMapLists = () => {
  footerMapLists.classList.add("lists__hidden");
  footerMapButtonOpen.classList.remove("hidden");
  footerMapButtonClose.classList.add("hidden");
};

const showFooterContactsLists = () => {
  footerContactsLists.classList.remove("lists__hidden");
  footerContactsButtonOpen.classList.add("hidden");
  footerContactsButtonClose.classList.remove("hidden");
};

const hideFooterContactsLists = () => {
  footerContactsLists.classList.add("lists__hidden");
  footerContactsButtonOpen.classList.remove("hidden");
  footerContactsButtonClose.classList.add("hidden");
};

const openCloseFooterMenu = () => {
  if (footerMapLists.classList.contains("lists__hidden")) {
    showFooterMapLists();
  } else {
    hideFooterMapLists();
  }
  if (footerContactsLists.classList.contains("lists__hidden")) {
    showFooterContactsLists();
  } else {
    hideFooterContactsLists();
  }
};

if (footerMap) {
footerMap.addEventListener("click", openCloseFooterMenu);
footerMap.addEventListener("click", hideFooterContactsLists);
}

if (footerContacts) {
footerContacts.addEventListener("click", openCloseFooterMenu);
footerContacts.addEventListener("click", hideFooterMapLists);
}

// Маска

const phoneInput = document.querySelector(".form__main-phone");
const modalPhone = document.querySelector(".modal__phone");
const maxPhoneNumber = 16;

let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let formMask = IMask(phoneInput, maskOptions);
let modalMask = IMask(modalPhone, maskOptions);

const checkPhoneInput = () => {
  if (phoneInput.value.length < maxPhoneNumber) {
    phoneInput.setCustomValidity("Номер должен быть из 10 цифр");
  } else {
    phoneInput.setCustomValidity("");
  }
  phoneInput.reportValidity();
};

const checkModalPhoneInput = () => {
  if (modalPhone.value.length < maxPhoneNumber) {
    modalPhone.setCustomValidity("Номер должен быть из 10 цифр");
  } else {
    modalPhone.setCustomValidity("");
  }
  modalPhone.reportValidity();
};

if (phoneInput || modalPhone) {
phoneInput.addEventListener("input", checkPhoneInput);
modalPhone.addEventListener("input", checkModalPhoneInput);
}


// Модальное окно

const mainForm = document.querySelector(".form__main-data");
const mainFormNameInput = document.querySelector(".form__main-name");
const mainFormPhoneInput = document.querySelector(".form__main-phone");
const mainFormTextInput = document.querySelector(".form__main-text");
const modalForm = document.querySelector(".modal__form");
const nameInput = document.querySelector(".modal__name");
const textInput = document.querySelector(".modal__text");
const openModalButton = document.querySelector(".navigation__button");
const closeModalButton = document.querySelector(".modal__close");
const modalMain = document.querySelector(".modal");
const modalSuccess = document.querySelector(".modal-success");
const closemodalSuccessButton = document.querySelector(".modal-success__close");
const modalMainInner = document.querySelector(".modal__inner");
const modalSuccessInner = document.querySelector(".modal-success__inner");

modalMain.classList.add("hidden");
modalMain.style.position = "fixed";
modalSuccess.style.position = "fixed";
modalMainInner.style.position = "fixed";
modalSuccessInner.style.position = "fixed";

const modalEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeModal();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target === modalMain) {
    console.log(evt.target);
    closeModal();
  }
};

const openModal = () => {
  modalMain.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  inputFocus();
  closeModalButton.addEventListener("click", closeModalButtonClickHandler);
  modalMain.addEventListener("click", windowClickHandler);
  document.addEventListener("keydown", modalEscPressHandler);
  modalForm.addEventListener("submit", formSendingHandler);
};

const closeModal = () => {
  modalMain.classList.add("hidden");
  document.body.style.overflow = "";
  closeModalButton.removeEventListener("click", openModalButtonClickHandler);
  modalMain.removeEventListener("click", windowClickHandler);
  document.removeEventListener("keydown", modalEscPressHandler);
  modalForm.removeEventListener("submit", formSendingHandler);
};

const openModalButtonClickHandler = (evt) => {
  evt.preventDefault();
  openModal();
};

const closeModalButtonClickHandler = () => {
  closeModal();
};

if (openModalButton) {
openModalButton.addEventListener("click", openModalButtonClickHandler);
}


if (closeModalButton) {
closeModalButton.addEventListener("click", closeModalButtonClickHandler);
}



const modalSuccessEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeSuccessModal();
    evt.preventDefault();
  }
};

const windowSuccessClickHandler = (evt) => {
  if (evt.target === modalSuccess) {
    console.log(evt.target);
    closeSuccessModal();
  }
};

const openSuccessModal = () => {
  modalMain.classList.add("hidden");
  modalSuccess.classList.remove("hidden");
  modalSuccess.addEventListener("click", windowSuccessClickHandler);
  closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
  document.addEventListener("keydown", modalSuccessEscPressHandler);
};

const closeSuccessModal = () => {
  modalSuccess.classList.add("hidden");
  closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
  modalSuccess.removeEventListener("click", windowSuccessClickHandler);
  document.removeEventListener("keydown", modalSuccessEscPressHandler);
};

const closemodalSuccessButtonClickHandler = () => {
  closeSuccessModal();
};


closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);


const formSendingHandler = (evt) => {
  modalPhone.value = "";
  nameInput.value = "";
  textInput.value = "";
  openSuccessModal();
  evt.preventDefault();
};

  mainForm.addEventListener("submit", function (evt) {
  modalSuccess.classList.remove("hidden");
  evt.preventDefault();
  localStorageSet();
  closemodalSuccessButton.addEventListener("click", closemodalSuccessButtonClickHandler);
  document.addEventListener("keydown", modalSuccessEscPressHandler);
  document.addEventListener("click", windowSuccessClickHandler);
  mainFormNameInput.value = "";
  mainFormPhoneInput.value = "";
  mainFormTextInput.value = "";
});


// Local storage

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

const localStorageSet = (evt) => {
  if(!mainFormNameInput || !mainFormPhoneInput) {
    evt.preventDefault();
    mainFormNameInput.setCustomValidity("Нужно ввести имя");
    mainFormPhoneInput.setCustomValidity("Нужно ввести телефон");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("login", mainFormNameInput.value);
    }
  }
  mainFormNameInput.reportValidity();
  mainFormPhoneInput.reportValidity();
};

const inputFocus = () => {
  if (storage) {
    nameInput.value = storage;
    modalPhone.focus();
  } else {
    nameInput.focus();
  }
};


const checkbox = document.querySelector(".form__main-checkbox");
const label = document.querySelector(".form__main-checkbox-label");
const modalCheckbox = document.querySelector(".modal__checkbox-text");
const modalLabel  = document.querySelector(".modal__checkbox-label");

const checkboxClicker = () => {
checkbox.addEventListener("click", function () {
  label.classList.toggle("checkbox-toggle");
});
modalCheckbox.addEventListener("click", function () {
  modalLabel.classList.toggle("checkbox-toggle");
});
};
checkboxClicker();

})();
