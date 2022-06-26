(() => {
  const refs = {
    openModalBtn: document.querySelector("[data__modal__open]"),
    closeModalBtn: document.querySelector("[data__modal__close]"),
    modal: document.querySelector("[data__modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is__hidden");
  }
})();