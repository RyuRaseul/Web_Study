
const menu_btn = document.querySelector(".toggle_btn");
const menu_contents = document.querySelectorAll(".menu_content");
const icon_links = document.querySelectorAll(".icon_link")
const hambuger_bar = document.querySelector(".nav_menu");
const shadow_bar = document.querySelector(".title_container")
menu_btn.addEventListener("click", menu_on_off);


function menu_on_off(){
    menu_contents.forEach(element => {
        element.classList.toggle('menu_active');
    });
    icon_links.forEach(element => {
        element.classList.toggle('icons_active');
    });
    document.body.classList.toggle('shadow_off');
    shadow_bar.classList.toggle('shadow_on');
}
