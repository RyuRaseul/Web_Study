var today = new Date();
const date_content = document.querySelector(".year-container");
date_content.innerText = today.getFullYear() + ".";


const nav_bar = document.querySelector("#nav");
const top_link = document.querySelector(".top-link");
document.addEventListener("scroll", function(){
    var scroll_position = document.documentElement.scrollTop;
    if(scroll_position > 80){
        nav_bar.classList.add("fixed");
    }
    else{
        nav_bar.classList.remove("fixed");
    }

    if(scroll_position > 400){
        top_link.classList.add("show-link");
    }
    else{
        top_link.classList.remove("show-link");
    }
});

const text_links = document.querySelectorAll(".link-content");
text_links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const linked_section = document.getElementById(id);
        const links_container = document.querySelector(".link-container");
        const nav_height = nav_bar.offsetHeight;
        const isFixed = nav_bar.classList.contains("fixed");
        let location = linked_section.offsetTop;
        if(!isFixed){
            location = location - nav_height;
        }
        if(links_container.getBoundingClientRect().height > 50){
            location = location + links_container.getBoundingClientRect().height;
            links_container.classList.remove("slide");
        }
        console.log(location);
        window.scrollTo({top: location-nav_height, behavior: "smooth"});
    });
});

const slide_bar = document.querySelector(".bar-container");
const links = document.querySelector(".link-container");

slide_bar.addEventListener("click", show_links);

function show_links(){
    links.classList.toggle('slide');
};
