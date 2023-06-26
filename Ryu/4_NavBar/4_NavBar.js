
const menu_btn = document.querySelector(".toggle_btn");
const menu_contents = document.querySelectorAll(".menu_content");
const icon_on_off = document.querySelector(".icons_container")
const hambuger_bar = document.querySelector(".nav_menu");
const shadow_bar = document.querySelector(".title_container")
menu_btn.addEventListener("click", menu_on_off);


function menu_on_off(){
    document.body.classList.toggle('shadow_off');
    shadow_bar.classList.toggle('shadow_on');
    hambuger_bar.classList.toggle('menu_active');
    icon_on_off.classList.toggle('icon_active');
}
