function showModal() {
  let div_modal = document.querySelector("div.modal");
  let div_content = document.querySelector("div.modal-content");

  let button_close = document.querySelector("button#close");
  let button_yes = document.querySelector("button#yes");
  let button_no = document.querySelector("button#no");

  function window_onclick(event) {
    if (event.target === div_modal) {
      closeDialog();
    }
  }
  window.addEventListener('click', window_onclick, false);

  function button_yes_onclick(event) {
    // setSignal(signal, value);
  }
  button_yes.addEventListener('click', button_yes_onclick, false);

  function button_no_onclick(event) {
    closeDialog();
  }
  button_no.addEventListener('click', button_no_onclick, false);
  button_close.addEventListener("click", button_no_onclick, false);

  function closeDialog() {
    //div_modal.style.display = "none";
    div_modal.classList.remove('show__modal');
    div_content.classList.remove('show');
    // Необходимо удалять назначенные обработчики, иначе они будут накапливаться.
    // Для проверки можно использовать: getEventListeners(object) в консоли Chrome.
    window.removeEventListener('click', window_onclick);
    button_yes.removeEventListener('click', button_yes_onclick);
    button_no.removeEventListener('click', button_no_onclick);
    button_close.removeEventListener('click', button_no_onclick);
  }

  //div_modal.style.display = "block"; // показать диалог
  div_modal.classList.add('show__modal');
  div_content.classList.add('show');
}