const toggle_btn = document.querySelector('.slider');
const out_btn = document.querySelector('.xmark');
const sliding_container = document.querySelector('.sidebar-container');

toggle_btn.addEventListener("click", slide_open);
out_btn.addEventListener("click", slide_out);

function slide_open(){
    sliding_container.classList.toggle('bar-sliding');
    sliding_container.classList.remove('bar-out');
};

function slide_out(){
    sliding_container.classList.toggle('bar-out');
    sliding_container.classList.remove('bar-sliding');
};

