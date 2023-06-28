const sideBar = document.querySelector(".side-bar");
const toggle = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("close");
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.add("close");
})