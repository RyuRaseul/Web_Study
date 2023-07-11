const btn = document.querySelector(".btn-content");
const video_p = document.querySelector(".video-container");
btn.addEventListener("click", function(){
    
    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video_p.pause();
    }
    else{
        btn.classList.add("slide");
        video_p.play();
    }
});