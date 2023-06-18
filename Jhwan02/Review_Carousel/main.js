const reviews = [
    {
    name : "Mario", 
    job : "Plumber", 
    review : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
    name : "Luigi",
    job : "Plumber",
    review : "A"
    },

    {
    name : "Yoshi",
    job : "dinosaur",
    review : "B"
    },
];
const img = ["mario.png","luigi.png","yoshi.png"];

const reviewerName = document.querySelector(".reviewer__name");
const reviewerJob = document.querySelector(".reviewer__job");
const reviewerContent = document.querySelector(".review__content");
const reviewerImg = document.querySelector(".review__img");

const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");
const randomBtn = document.querySelector(".random__btn");

let current = 0;

function paintReview(){
    reviewerImg.src = `img/${img[current]}`;
    reviewerName.textContent = reviews[current].name;
    reviewerJob.textContent = reviews[current].job;
    reviewerContent.textContent = reviews[current].review;
}

document.addEventListener("DOMContentLoaded", () => {
    paintReview();
})

prevBtn.addEventListener("click", () => {
    current--;
    if(current < 0){
        current = reviews.length-1;
    }
    paintReview();
})

nextBtn.addEventListener("click", () => {
    current++;
    if(current > reviews.length-1){
        current = 0;
    }
    paintReview();
})

randomBtn.addEventListener("click", () => {
    current = Math.floor(Math.random() * reviews.length);
    paintReview();
})