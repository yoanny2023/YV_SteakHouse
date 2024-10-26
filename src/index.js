const open_menu = document.getElementById("open-menu");
const side_menu = document.getElementsByClassName("side-bar")[0];
const item_sidebar = document.querySelectorAll(".side-bar > li");
const data = document.getElementById("year");

const year = new Date().getFullYear();
data.innerText = `${year}`

open_menu.addEventListener("click",()=>{
  side_menu.style.display ="flex";
})

console.log(item_sidebar);
item_sidebar.forEach((item)=>{
  item.addEventListener("click",()=>{
    side_menu.style.display="none";
    }) 
})


