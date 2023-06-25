
const menu_btn = document.querySelector(".toggle_btn");
const menu_contents = document.querySelectorAll(".menu_content");
menu_btn.addEventListener("click", menu_on_off);

function menu_on_off(){
    menu_contents.forEach(element => {
        element.classList.toggle('active');
    });
}