const plusBtn = document.querySelectorAll(".plus__icon");
const minusBtn = document.querySelectorAll(".minus__icon");
const answerBox = document.querySelectorAll(".answer__box");
const container = document.querySelectorAll(".container");

plusBtn.forEach(function (element) {
    element.addEventListener("click", () => {
        answerBox.forEach((item) => {
            item.classList.remove("show-answer");
        })
        element.parentElement.nextElementSibling.classList.add("show-answer");
        element.classList.toggle("show-icon");
        element.nextElementSibling.classList.toggle("show-icon");
        container.forEach((e)=>{
            if(e !== element.parentElement.parentElement){
                e.firstElementChild.lastElementChild.classList.remove("show-icon");
                e.firstElementChild.children[1].classList.add("show-icon");
            }
        })
    })
})

minusBtn.forEach((element) => {
    element.addEventListener("click", () => {
        element.parentElement.nextElementSibling.classList.remove("show-answer");
        element.classList.toggle("show-icon");
        element.previousElementSibling.classList.toggle("show-icon");
    })
})