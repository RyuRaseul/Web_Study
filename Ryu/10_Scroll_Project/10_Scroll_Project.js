var today = new Date();
const date_content = document.querySelector(".year-container");

date_content.innerText = today.getFullYear() + ".";

const slide_bar = document.querySelector(".bar-container");
const links = document.querySelector(".link-container");

slide_bar.addEventListener("click", show_links);

function show_links(){
    links.classList.toggle('slide');
};