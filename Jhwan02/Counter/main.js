const count = document.querySelector(".count");
const btn = document.querySelectorAll(".btn"); 

let num = 0;

btn.forEach((element) => {
    element.addEventListener("click", (e) => {
        if(e.target.classList.contains("decrease")){
            num--;
            count.innerHTML = num;
        }else if(e.target.classList.contains("reset")){
            num = 0;
            count.innerHTML = num;
        }else if(e.target.classList.contains("increase")){
            num++;
            count.innerHTML = num;
        }
        if(num>0){
            count.style.color = "green";
        }else if(num<0){
            count.style.color = "red";
        }else{
            count.style.color = "black";
        }
    })
})