const Reviews_Object = [
    {
        id: 0,
        name: "Susan Smith",
        job: "Web Developer",
        review: 
                "Lorem ipsum dolor sit amet,\
                consectetur adipiscing elit,\
                sed do eiusmod tempor incididunt\
                ut labore et dolore magna aliqua.\
                Ut enim ad minim veniam, quis nostrud\
                exercitation ullamcolaboris nisi ut\
                aliquip ex ea commodo consequat."    
    },
    {   
        id: 1,
        name: "Ryu",
        job: "Student",
        review: "A"
    },
    {   
        id: 2,
        name: "Shin",
        job: "College Student",
        review: "B"
    },
    {
        id: 3,
        name: "Park",
        job: "Soldier",
        review: "C"
    },
    {
        id: 4,
        name: "Lee",
        job: "FireFighter",
        review: "D"
    }
];

const name_text = document.querySelector(".name_container");
const job_text = document.querySelector(".job_container");
const review_text = document.querySelector(".review_container");
let present_id = 0;

document.addEventListener('DOMContentLoaded', function(){
    name_text.textContent = Reviews_Object[0].name;
    job_text.textContent = Reviews_Object[0].job;
    review_text.textContent = Reviews_Object[0].review;
    console.log("Success");
})

const prev_btn = document.querySelector(".left_heading");
const next_btn = document.querySelector(".right_heading");
const random_btn = document.querySelector(".surprise_btn");

prev_btn.addEventListener("click", click_prev);
next_btn.addEventListener("click", click_next);
random_btn.addEventListener("click", click_surprise);

function click_prev(){
    if(present_id == 0){
        present_id = Reviews_Object.length-1;
        show_present();
    }
    else{
        present_id = present_id - 1;
        show_present();
    }
}
function click_next(){
    if(present_id == Reviews_Object.length-1){
        present_id = 0;
        show_present();
    }
    else{
        present_id = present_id + 1;
        show_present();
    }
}

function click_surprise(){
    random_ind = Math.floor(Math.random() * Reviews_Object.length);
    while(random_ind == present_id)
        random_ind = Math.floor(Math.random() * Reviews_Object.length);
    present_id = random_ind;
    show_present();
}

function show_present(){
    name_text.innerText = Reviews_Object[present_id].name;
    job_text.innerText = Reviews_Object[present_id].job;
    review_text.innerText = Reviews_Object[present_id].review;
}