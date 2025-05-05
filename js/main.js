// menu
const menu = document.querySelector(".navbar__links")
const menubutton = document.querySelector(".navbar__icons")
const overlay = document.querySelector("#overlay")

menubutton.addEventListener('click', ()=>{
  menu.classList.toggle("navbar__open");
  menubutton.classList.toggle("open")
  overlay.classList.toggle("show")


})
overlay.addEventListener('click', ()=>{
  menu.classList.toggle("navbar__open");
  menubutton.classList.toggle("open")
  overlay.classList.toggle("show")
})