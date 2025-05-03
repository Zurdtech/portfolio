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
const toTop = document.querySelector(".toTop");

// menu start

open.addEventListener("click", function (e) {
  document.body.classList.toggle("toggle");
});

close.addEventListener("click", function (e) {
  document.body.classList.toggle("toggle");
});

// menu end

// navList start

function asideAction() {
  asideList.forEach((s) => s.classList.remove("active2"));
  this.classList.add("active2");
  document.body.classList.toggle("toggle");
}

asideList.forEach((s) => s.addEventListener("click", asideAction));

// navList end

// autoType start

let typed = new Typed(".movingText", {
  strings: ["Web Developer.", "Web Designer.", "Technologist.", "Freelancer.", 'Analyst.'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// autoType end

// toTop start

window.addEventListener('scroll', (s) => {
  if(window.pageYOffset > 100){
    toTop.classList.add('active')
  } else{
    toTop.classList.remove('active')
  }
})

// toTop end
