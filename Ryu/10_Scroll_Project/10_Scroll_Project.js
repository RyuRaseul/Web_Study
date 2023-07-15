var today = new Date();
const nav_bar = document.querySelector("#nav");
const date_content = document.querySelector(".year-container");
date_content.innerText = today.getFullYear() + ".";

document.addEventListener("scroll", function(){
    var scroll_position = document.documentElement.scrollTop;
    if(scroll_position > 80){
        nav_bar.classList.add("fixed");
    }
    else{
        nav_bar.classList.remove("fixed");
    }
});

const slide_bar = document.querySelector(".bar-container");
const links = document.querySelector(".link-container");

slide_bar.addEventListener("click", show_links);

function show_links(){
    links.classList.toggle('slide');
};

