const btn = document.querySelector(".btn-content");
const btn_container = document.querySelector(".btn-container");
const video_p = document.querySelector(".video-container");
btn_container.addEventListener("click", function(){
    
    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video_p.play();
    }
    else{
        btn.classList.add("slide");
        video_p.pause();
    }
});