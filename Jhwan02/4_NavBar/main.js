const navList = document.querySelector(".nav-bar__list");
const navHambuger = document.querySelector(".nav-bar__hambuger");

navHambuger.addEventListener("click", () => {
    navList.classList.toggle("active");
})
