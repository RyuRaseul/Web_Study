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
    const scrollHeight = document.documentElement.scrollTop;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        nav.classList.add("fixed");
    }else{
        nav.classList.remove("fixed");
    }

    if(scrollHeight>500){
        toTop.classList.add("show");
    }else{
        toTop.classList.remove("show");
    }
})

//smooth scroll
const links = navBar.querySelectorAll("a");

links.forEach((link) =>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        
        const id = e.currentTarget.getAttribute("href").slice(1);
        const linked_section = document.getElementById(id);

        const nav_height = nav.offsetHeight;
        let location = linked_section.offsetTop;
        
        if(navBar.getBoundingClientRect().height>50){
            location += navBar.getBoundingClientRect().height;
            navBar.classList.remove("show-links");
        }
        window.scrollTo(0,location-nav_height);
    })
})


// links.forEach((link)=>{
//     link.addEventListener("click",(e)=>{
//         e.preventDefault();
//         //const id = e.target.hash.replace("#","");
//         const id = e.target.getAttribute("href").slice(1);
//         if(id === "home"){
//             window.scrollTo(0,0);
//             navBar.classList.toggle("show-links");
//         }
//         else{
//             sections.forEach((page)=>{
//                 if(page.id === id){
//                     window.scrollTo(0,page.offsetTop-78);
//                     navBar.classList.toggle("show-links");
//                 }
//             })
//         }
//     })
// })