const qna_body = document.querySelectorAll(".qna-container");
const open_btn = document.querySelectorAll(".on-btn");
const close_btn = document.querySelectorAll(".off-btn");
const answer = document.querySelectorAll(".answer-body");

open_btn.forEach(function(item){
    item.addEventListener("click", function(e){
        item.parentElement.parentElement.parentElement.querySelector(".answer-body").classList.add('on');
        e.target.classList.add("hidden-btn");
        e.target.nextElementSibling.classList.remove("hidden-btn");
    });
});

close_btn.forEach(function(item){
    item.addEventListener("click", function(e){
        item.parentElement.parentElement.parentElement.querySelector(".answer-body").classList.remove('on');
        e.target.classList.add("hidden-btn");
        e.target.previousElementSibling.classList.remove("hidden-btn");
    });
});

