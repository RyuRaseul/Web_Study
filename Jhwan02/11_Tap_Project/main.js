const about = document.querySelector(".about__container");
const btns = document.querySelectorAll(".btn__container button");
const aboutContent = document.querySelectorAll(".about__content");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
        const activeContent = document.getElementById(id);
        aboutContent.forEach(function(content){
            content.classList.remove("active");
        })
        activeContent.classList.add("active");
    }
})

