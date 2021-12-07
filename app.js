const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burguer.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
            }
        })
        burguer.classList.toggle("toggle")
    });
    navLinks.forEach((elemento, index)=>{
        elemento.addEventListener("click",()=>{
            nav.classList.toggle("nav-active");
            burguer.classList.toggle("toggle");
            navLinks.forEach((elemento, index)=>{
                if (elemento.style.animation) {
                    elemento.style.animation = "";
                } else {
                    elemento.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
                }
            })
        })
        
    })
}
navSlide();
const header=document.getElementById("nav");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>0){
        header.classList.add("fadeOutUp");
        header.classList.remove("fadeInDown")
    }else{
        header.classList.remove("fadeOutUp");
        header.classList.add("fadeInDown")
    }
})


