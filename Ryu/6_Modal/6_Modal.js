const modal_background = document.querySelector(".Modal-Container");
const modal_content = document.querySelector(".Modal-body");
const modal_open_btn = document.querySelector(".Btn-Container");
const modal_close_btn = document.querySelector('.xmark');

modal_open_btn.addEventListener("click", modal_on);
modal_close_btn.addEventListener("click", modal_off);

modal_background.addEventListener("click", function(e){
    if(e.target.classList.contains('modal-on')){
        modal_off();
    }
});

function modal_on(){
    modal_background.classList.add("modal-on");
    modal_content.classList.add("show");
}

function modal_off(){
    modal_background.classList.remove("modal-on");
    modal_content.classList.remove("show");
}