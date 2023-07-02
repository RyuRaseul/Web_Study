const modal_content = document.querySelector(".Modal-Container");
const modal_open_btn = document.querySelector(".Btn-Container");
const modal_close_btn = document.querySelector('.xmark');
const body_content = document.querySelector('.Origin-Container');


modal_open_btn.addEventListener("click", modal_on);
modal_close_btn.addEventListener("click", modal_off);

function modal_on(){
    modal_content.classList.add("show");
    body_content.classList.add("modal-on");
}

function modal_off(){
    modal_content.classList.remove("show");
    body_content.classList.remove("modal-on");
}