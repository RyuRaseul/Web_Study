let Num = 0;

const Count_Num = document.querySelector(".Count_box");

const Btn_List = document.querySelectorAll(".btn_box");
Btn_List.forEach(function(item){
    item.addEventListener("mouseover", function(hover){
        const mouse_over_obj = hover.currentTarget;
        mouse_over_obj.style.backgroundColor = mouse_over_obj.style.borderColor;
        mouse_over_obj.style.color = "white";
    })
});

Btn_List.forEach(function(item){
    item.addEventListener("mouseout", function(hover){
        const mouse_over_obj = hover.currentTarget;
        mouse_over_obj.style.backgroundColor = "white";
        mouse_over_obj.style.color = "black";
    })
});

Btn_List.forEach(function(item){
    item.addEventListener("click", function(e){
        const Btn_Class = e.currentTarget.classList;
        if(Btn_Class.contains("dec")){
            Num--;
        }
        else if(Btn_Class.contains("inc")){
            Num++;
        }
        else if(Btn_Class.contains("reset")){
            Num = 0;
        }
        Count_Num.textContent = Num;
        if(Num > 0){
            Count_Num.style.color = "green";
        }
        else if(Num < 0){
            Count_Num.style.color = "red";
        }
        else{
            Count_Num.style.color = "black";
        }
    })
});