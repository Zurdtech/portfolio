  "use strict";

// const toggle = document
//   .querySelector(".menu-box")
//   .addEventListener("click", function (e) {
//     document.querySelector(".body").classList.toggle("toggle");
//   });


const aside = document.querySelector(".toggle");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const asideList = document.querySelectorAll(".name");

open.addEventListener("click", function (e) {
  document.body.classList.toggle("toggle");
});

close.addEventListener("click", function (e) {
  document.body.classList.toggle("toggle");
});
 
function asideAction(){
  asideList.forEach(s => s.classList.remove('active2'))
  this.classList.add('active2')
  document.body.classList.toggle('toggle')
}

asideList.forEach(s => s.addEventListener('click', asideAction))
