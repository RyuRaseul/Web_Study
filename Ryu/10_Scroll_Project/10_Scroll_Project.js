var today = new Date();
const date_content = document.querySelector(".year-container");
date_content.innerText = today.getFullYear() + ".";


const nav_bar = document.querySelector("#nav");
document.addEventListener("scroll", function(){
    var scroll_position = document.documentElement.scrollTop;
    if(scroll_position > 80){
        nav_bar.classList.add("fixed");
    }
    else{
        nav_bar.classList.remove("fixed");
    }
});

const text_links = document.querySelectorAll(".link-content");
var nav_height = nav_bar.offsetHeight;
text_links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const linked_section = document.getElementById(id);

        let location =  linked_section.getBoundingClientRect().y;
        console.log(location);
        
        window.scrollTo({top: location, behavior: "smooth"});
    });
});

const slide_bar = document.querySelector(".bar-container");
const links = document.querySelector(".link-container");

slide_bar.addEventListener("click", show_links);

function show_links(){
    links.classList.toggle('slide');
};
