const splashScreen=()=>{document.addEventListener("DOMContentLoaded",(e)=>{document.querySelector(".splash").classList.add("display-none")})};splashScreen();const observer=()=>{const floatingNav=document.querySelectorAll(".navLink");floatingNav.forEach((element)=>{element.addEventListener("click",()=>{floatingNav.forEach((e)=>{e.classList.remove("clicked")});element.classList.add("clicked")})})};observer()
