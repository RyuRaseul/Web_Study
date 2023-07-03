const modal__container = document.querySelector(".modal__container");
const modalBtn = document.querySelector(".modal__btn");
const closeBtn = document.querySelector(".close__btn");
const modal = document.querySelector(".modal__content");

modalBtn.addEventListener("click", () => {
    modal.classList.add("open");
    modal__container.classList.add("overlay");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    modal__container.classList.remove("overlay");
})