const colors = ["#FDDFDF","#FCF7DE","#DEFDE0","#DEF3FD","#F0DEFD"];

const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".colorCode");


function handleClick(){
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    colorCode.innerText = colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener("click", handleClick);