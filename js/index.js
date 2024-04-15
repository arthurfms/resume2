window.addEventListener("load", (event) => {
  let body = document.querySelector(".page");
  let menu = body.querySelector(".menu");
  let menuButton = menu.querySelector(".menu__button");
  let menuItems = menu.querySelectorAll(".menu__item");

  menuButton.addEventListener("click", (evt) =>
    menu.classList.toggle("menu_collapse")
  );
  menuItems.forEach((item) => {
    item.addEventListener("click", (evt) =>
      menu.classList.contains("menu_collapse")
        ? menu.classList.toggle("menu_collapse")
        : ""
    );
  });

  //HANDLE FORM
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleSubmitButton = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.remove("form__submit_active");
      buttonElement.removeEventListener("click", getEntries);
    } else {
      buttonElement.classList.add("form__submit_active");
      buttonElement.addEventListener("click", getEntries);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const submitButton = formElement.querySelector(".form__submit");
    toggleSubmitButton(inputList, submitButton);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleSubmitButton(inputList, submitButton);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(
      document.querySelectorAll(".two-columns__form")
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });

      setEventListeners(formElement);
    });
  };

  enableValidation();

  //FORM

  function genEntry(info) {
    let gen = info
      .replaceAll("+", "%2B")
      .replaceAll("%", "%25")
      .replaceAll(" ", "+")
      .replaceAll("\n", "%0A")
      .replaceAll("#", "%23")
      .replaceAll("&", "%26")
      .replaceAll("*", "%2A")
      .replaceAll("<", "%3C")
      .replaceAll("=", "%3D")
      .replaceAll(">", "%3E")
      .replaceAll("[", "%5B")
      .replaceAll("\\", "%5C")
      .replaceAll("]", "%5D")
      .replaceAll("^", "%5E")
      .replaceAll("`", "%60")
      .replaceAll("{", "%7B")
      .replaceAll("|", "%7C")
      .replaceAll("}", "%7D")
      .replaceAll("€", "%E2%82%AC")
      .replaceAll("‚", "%E2%80%9A")
      .replaceAll("ƒ", "%C6%92")
      .replaceAll("„", "%E2%80%9E")
      .replaceAll("…", "%E2%80%A6")
      .replaceAll("†", "%E2%80%A0")
      .replaceAll("‡", "%E2%80%A1")
      .replaceAll("ˆ", "%CB%86")
      .replaceAll("‰", "%E2%80%B0")
      .replaceAll("Š", "%C5%A0")
      .replaceAll("‹", "%E2%80%B9")
      .replaceAll("Œ", "%C5%92")
      .replaceAll("Ž", "%C5%BD")
      .replaceAll("‘", "%E2%80%98")
      .replaceAll("’", "%E2%80%99")
      .replaceAll("“", "%E2%80%9C")
      .replaceAll("”", "%E2%80%9D")
      .replaceAll("•", "%E2%80%A2")
      .replaceAll("–", "%E2%80%93")
      .replaceAll("—", "%E2%80%94")
      .replaceAll("˜", "%CB%9C")
      .replaceAll("™", "%E2%84")
      .replaceAll("š", "%C5%A1")
      .replaceAll("›", "%E2%80")
      .replaceAll("œ", "%C5%93")
      .replaceAll("ž", "%C5%BE")
      .replaceAll("Ÿ", "%C5%B8")
      .replaceAll("¡", "%C2%A1")
      .replaceAll("¢", "%C2%A2")
      .replaceAll("£", "%C2%A3")
      .replaceAll("¤", "%C2%A4")
      .replaceAll("¥", "%C2%A5")
      .replaceAll("¦", "%C2%A6")
      .replaceAll("§", "%C2%A7")
      .replaceAll("¨", "%C2%A8")
      .replaceAll("©", "%C2%A9")
      .replaceAll("ª", "%C2%AA")
      .replaceAll("«", "%C2%AB")
      .replaceAll("¬", "%C2%AC")
      .replaceAll("®", "%C2%AE")
      .replaceAll("¯", "%C2%AF")
      .replaceAll("°", "%C2%B0")
      .replaceAll("±", "%C2%B1")
      .replaceAll("²", "%C2%B2")
      .replaceAll("³", "%C2%B3")
      .replaceAll("´", "%C2%B4")
      .replaceAll("µ", "%C2%B5")
      .replaceAll("¶", "%C2%B6")
      .replaceAll("·", "%C2%B7")
      .replaceAll("¸", "%C2%B8")
      .replaceAll("¹", "%C2%B9")
      .replaceAll("º", "%C2%BA")
      .replaceAll("»", "%C2%BB")
      .replaceAll("¼", "%C2%BC")
      .replaceAll("½", "%C2%BD")
      .replaceAll("¾", "%C2%BE")
      .replaceAll("¿", "%C2%BF")
      .replaceAll("À", "%C3%80")
      .replaceAll("Á", "%C3%81")
      .replaceAll("Â", "%C3%82")
      .replaceAll("Ã", "%C3%83")
      .replaceAll("Ä", "%C3%84")
      .replaceAll("Å", "%C3%85")
      .replaceAll("Æ", "%C3%86")
      .replaceAll("Ç", "%C3%87")
      .replaceAll("È", "%C3%88")
      .replaceAll("É", "%C3%89")
      .replaceAll("Ê", "%C3%8A")
      .replaceAll("Ë", "%C3%8B")
      .replaceAll("Ì", "%C3%8C")
      .replaceAll("Í", "%C3%8D")
      .replaceAll("Î", "%C3%8E")
      .replaceAll("Ï", "%C3%8F")
      .replaceAll("Ð", "%C3%90")
      .replaceAll("Ñ", "%C3%91")
      .replaceAll("Ò", "%C3%92")
      .replaceAll("Ó", "%C3%93")
      .replaceAll("Ô", "%C3%94")
      .replaceAll("Õ", "%C3%95")
      .replaceAll("Ö", "%C3%96")
      .replaceAll("×", "%C3%97")
      .replaceAll("Ø", "%C3%98")
      .replaceAll("Ù", "%C3%99")
      .replaceAll("Ú", "%C3%9A")
      .replaceAll("Û", "%C3%9B")
      .replaceAll("Ü", "%C3%9C")
      .replaceAll("Ý", "%C3%9D")
      .replaceAll("Þ", "%C3%9E")
      .replaceAll("ß", "%C3%9F")
      .replaceAll("à", "%C3%A0")
      .replaceAll("á", "%C3%A1")
      .replaceAll("â", "%C3%A2")
      .replaceAll("ã", "%C3%A3")
      .replaceAll("ä", "%C3%A4")
      .replaceAll("å", "%C3%A5")
      .replaceAll("æ", "%C3%A6")
      .replaceAll("ç", "%C3%A7")
      .replaceAll("è", "%C3%A8")
      .replaceAll("é", "%C3%A9")
      .replaceAll("ê", "%C3%AA")
      .replaceAll("ë", "%C3%AB")
      .replaceAll("ì", "%C3%AC")
      .replaceAll("í", "%C3%AD")
      .replaceAll("î", "%C3%AE")
      .replaceAll("ï", "%C3%AF")
      .replaceAll("ð", "%C3%B0")
      .replaceAll("ñ", "%C3%B1")
      .replaceAll("ò", "%C3%B2")
      .replaceAll("ó", "%C3%B3")
      .replaceAll("ô", "%C3%B4")
      .replaceAll("õ", "%C3%B5")
      .replaceAll("ö", "%C3%B6")
      .replaceAll("÷", "%C3%B7")
      .replaceAll("ø", "%C3%B8")
      .replaceAll("ù", "%C3%B9")
      .replaceAll("ú", "%C3%BA")
      .replaceAll("û", "%C3%BB")
      .replaceAll("ü", "%C3%BC")
      .replaceAll("ý", "%C3%BD")
      .replaceAll("þ", "%C3%BE")
      .replaceAll("ÿ", "%C3%BF");

    return gen;
  }

  function genLink(name, email, subject, message) {
    let link =
      "https://docs.google.com/forms/d/e/1FAIpQLSc413Pae7T39ZUCqe8ZAQtlgrZ1Ey1KPMb4wxoIe2zoUUmPVw/viewform?usp=pp_url&entry.1851779256=" +
      genEntry(name) +
      "&entry.445698340=" +
      genEntry(email) +
      "&entry.2010236314=" +
      genEntry(subject) +
      "&entry.2062306582=" +
      genEntry(message);

    return link;
  }

  function send(link) {
    const form = document.querySelector(".two-columns__form");
    const frame = document.createElement("iframe");

    frame.src = link;
    frame.classList.add("two-columns__frame");
    frame.style.display = "none";

    form.append(frame);

    setTimeout(function deleting() {
      console.log(
        document.querySelector(".two-columns__frame").contentWindow.document
          .body
      );
    }, 10000);

    /*
    setTimeout(function deleting() {
      frame.remove();
    }, 25000);*/

    clearEntries();
    enableValidation();
  }

  function clearEntries() {
    const name = document.querySelector("#name-input");
    const email = document.querySelector("#email-input");
    const subject = document.querySelector("#subject-input");
    const message = document.querySelector("#message-input");

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }

  function getEntries() {
    const name = document.querySelector("#name-input").value;
    const email = document.querySelector("#email-input").value;
    const subject = document.querySelector("#subject-input").value;
    const message = document.querySelector("#message-input").value;

    let link = genLink(name, email, subject, message);
    send(link);
  }
  // END HANDLE FORM
});
