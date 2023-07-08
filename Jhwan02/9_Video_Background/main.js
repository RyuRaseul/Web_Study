const loading = document.querySelector(".loading__page");
const video = document.querySelector(".video__background");
const btn = document.querySelector(".btn__box");

btn.addEventListener("click",() => {
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide");
        video.play();
    }
})

window.addEventListener("load", () => {
    loading.classList.add("hide__loadingPage");
})