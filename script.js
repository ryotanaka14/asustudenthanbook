let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
let inputBox = document.querySelector(".input-box"),
searchIcon = document.querySelector(".icon"),
closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));