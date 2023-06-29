const sideBar = document.querySelector(".side-bar");
const toggle = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("open");
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("open");
})