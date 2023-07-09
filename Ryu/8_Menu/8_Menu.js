const menu_set =[
    {
        category: "Breakfast",
        img: "img/American-Breakfast.jpg",
        name: "American Breakfast",
        price: "$1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Breakfast",
        img: "img/Pancakes.jpg",
        name: "Pancakes",
        price: "$2",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Breakfast",
        img: "img/Croissants.jpg",
        name: "Croissants",
        price: "$3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Lunch",
        img: "img/Burgers.jpg",
        name: "Burgers",
        price: "$4",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Lunch",
        img: "img/Hotdogs.jpg",
        name: "Hotdogs",
        price: "$5",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Lunch",
        img: "img/Chicken-Salad.jpg",
        name: "Chicken Salad",
        price: "$6",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Dinner",
        img: "img/Baked-Stuffed-Lobster.jpg",
        name: "Baked Stuffed Lobster",
        price: "$7",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Dinner",
        img: "img/Pizza.jpg",
        name: "Pizza",
        price: "$8",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Shakes",
        img: "img/Milk_Shake.jpg",
        name: "Milk Shake",
        price: "$9",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        category: "Shake",
        img: "img/Berries_Smoothie.jpg",
        name: "Berries Smoothie",
        price: "$10",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
];

const contents = document.querySelectorAll(".menu-content");
const imgs = document.querySelectorAll(".menu-image");
const names = document.querySelectorAll(".menu-name");
const prices = document.querySelectorAll(".menu-price");
const texts = document.querySelectorAll(".menu-text");
let ind = 0;

const tags = [imgs, names, prices, texts];

/*
document.addEventListener("DOMContentLoaded", function(){
    contents.forEach(function(content){
        let img = content.querySelector(".menu-image");
        let name = content.querySelector(".menu-name");
        let price = content.querySelector(".menu-price");
        let text = content.querySelector(".menu-text");
        img.src = menu_set[ind].img;
        name.innerHTML = menu_set[ind].name;
        price.innerHTML = menu_set[ind].price;
        text.innerHTML = menu_set[ind].content;
        ind++;
    });
    ind = 0;
});
*/
const main_container = document.querySelector(".menu-container");
document.addEventListener("DOMContentLoaded", displayDefault(menu_set));

function displayDefault(item_set){
    let menu_info = item_set.map(function(item){
        return `<div class="menu-content">
        <img class="menu-image" src="${item.img}">
        <div class="menu-info">
            <div class="menu-name-price">
                <div class="menu-name">${item.name}</div>
                <div class="menu-price">${item.price}</div>
                <hr>
            </div>
            <div class="menu-text">${item.content}</div>
        </div>
    </div>`
    });
    main_container.innerHTML = menu_info.join("");
};