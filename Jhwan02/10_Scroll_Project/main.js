// set date
const copyRightYear = document.querySelector(".copyright__year");
copyRightYear.innerText = new Date().getFullYear();

// 토글 버튼 클릭시 링크 보여주기
const toggle = document.querySelector(".nav__toggle");
const navBar = document.querySelector(".header__list");

toggle.addEventListener("click", () => {
    navBar.classList.toggle("show-links");
})

// toTop 버튼 클릭시 상단으로 이동
const toTop = document.querySelector(".toTop");
const nav = document.querySelector(".header__nav")

toTop.addEventListener("click",(e) => {
    e.preventDefault();
    window.scrollTo({top:0, left:0, behavior:"smooth"});
})

// nav-bar 고정 & toTop 버튼 표시
document.addEventListener("scroll", function (){
    const screenHeight = document.documentElement.scrollTop;
    if(screenHeight>100){
        toTop.classList.add("show");
        nav.classList.add("fixed");
    }else{
        toTop.classList.remove("show");
        nav.classList.remove("fixed");
    }
})

//smooth scroll
const links = navBar.querySelectorAll("a");
const sections = document.querySelectorAll(".main__section");

links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        //const id = e.target.hash.replace("#","");
        const id = e.target.getAttribute("href").slice(1);
        if(id === "home"){
            window.scrollTo(0,0);
            navBar.classList.toggle("show-links");
        }
        else{
            sections.forEach((page)=>{
                if(page.id === id){
                    window.scrollTo(0,page.offsetTop-78);
                    navBar.classList.toggle("show-links");
                }
            })
        }
    })
})