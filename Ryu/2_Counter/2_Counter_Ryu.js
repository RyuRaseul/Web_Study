const Count_Num = document.querySelector(".Count_box");

/*const Btn_List = document.querySelectorAll(".btn_box");*/

const inc_btn = document.querySelector(".inc");
const reset_btn = document.querySelector(".reset");
const dec_btn = document.querySelector(".dec");

inc_btn.addEventListener("click", inc_num);
reset_btn.addEventListener("click", reset_num);
dec_btn.addEventListener("click", dec_num);

function inc_num(){
    Count_Num.textContent = Count_Num.textContent * 1 + 1;
}

function reset_num(){
    Count_Num.textContent = 0;
}

function dec_num(){
    Count_Num.textContent = Count_Num.textContent * 1 - 1;
}