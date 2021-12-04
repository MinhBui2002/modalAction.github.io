const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open__modal-btn");
const iconCloseModal = document.querySelector(".modal__inner-header i");
const buttonCloseModal = document.querySelector(".modal__close-btn");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);



modal.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target == e.currentTarget) toggleModal();
});

