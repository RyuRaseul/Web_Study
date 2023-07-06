const menu = [
    {
        category: "Hamburger",
        img: "img/포레스트.jpg",
        name: "포레스트 버거",
        price: "33,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Hamburger",
        img: "img/헬스키친.jpg",
        name: "헬스키친 버거",
        price: "31,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Hamburger",
        img: "img/야드버드.jpg",
        name: "야드버드 버거",
        price: "27,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Side",
        img: "img/맥앤치즈.jpg",
        name: "트러플'맥 앤 치즈'크로켓",
        price: "16,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Side",
        img: "img/파마산.jpg",
        name: "트러플 파마산 프라이즈",
        price: "19,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Side",
        img: "img/포테이토.jpg",
        name: "스위트 포테이토 프라이즈",
        price: "10,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Shakes",
        img: "img/스트로베리.jpg",
        name: "스트로베리 푸딩 & 비스코프 쉐이크",
        price: "13,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
    {
        category: "Shakes",
        img: "img/스티키.jpg",
        name: "스티키 토피 푸딩 & 브라운 버터 쉐이크",
        price: "13,000원",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officiis numquam animi beatae, excepturi nemo at repudiandae libero obcaecati ipsam doloribus, nam quos reiciendis, odio velit magni sunt expedita necessitatibus!"
    },
];

const btnContainer = document.querySelectorAll(".category__btn button");
const mainContainer = document.querySelector(".menu__container");

document.addEventListener("DOMContentLoaded", () => {
    firstRendering();
})

function firstRendering() {
    let showMenu = menu.map(function (item) {
        return `<div class="menu">
        <img src="${item.img}" alt="${item.name}" class="menu__img">
        <div class="menu__info">
            <div class="menu__namePrice">
                <h4 class="menu__name">${item.name}</h4>
                <h4 class="menu__price">${item.price}</h4>
            </div>
            <p class="menu__content">${item.content}</p>
        </div>
    </div>`
    })
    mainContainer.innerHTML = showMenu.join("");
}

function renderingChooseMenu(category) {
    let size = 0;
    let showMenu = [];
    if (category === "All") {
        firstRendering();
    }
    else {
        for (let item of menu) {
            if (item.category === category) {
                showMenu[size++] = `<div class="menu">
                <img src="${item.img}" alt="${item.name}" class="menu__img">
                <div class="menu__info">
                    <div class="menu__namePrice">
                        <h4 class="menu__name">${item.name}</h4>
                        <h4 class="menu__price">${item.price}</h4>
                    </div>
                    <p class="menu__content">${item.content}</p>
                </div>
            </div>`
            }
        }
        mainContainer.innerHTML = showMenu.join("");
    }
}

btnContainer.forEach(function (item) {
    item.addEventListener("click", (e) => {
        renderingChooseMenu(e.target.innerText);
    })
})