const BG_Colors = ["orangered", "blueviolet", "cornflowerblue", "dodgerblue", "goldenrod", "mediumseagreen", "thistle", "chartreuse"]

const Change_Btn = document.querySelector(".Btn");
const C_name = document.querySelector(".Color_name");

Change_Btn.addEventListener("click", Change_Bg);
function Change_Bg(){
    document.body.style.backgroundColor = BG_Colors[Math.floor(Math.random() * BG_Colors.length)];
    C_name.innerHTML = `<div style="text-transform:capitalize; color: ${document.body.style.backgroundColor};"> ${document.body.style.backgroundColor}</div>`;
}   
