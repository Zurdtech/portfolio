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
  strings: ["A Web Developer.", "A Web Designer.", "A Technologist.", "A Freelancer.", 'An Analyst.'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// autoType end


//  intersection observer satrt

// const heroSection = document.querySelector('.home-sec')
// const aboutSection = document.querySelector('.about-sec')
// const resumeSection = document.querySelector('.resume-sec')
// const portfolioSection = document.querySelector('.portfolio-sec')
// const serviceSection = document.querySelector('.services-sec')
// const footerSection = document.querySelector('.contact-sec')


// const option ={
//   threshold: 0.7,
// }

// const observer = new IntersectionObserver(callBackFunction, option)

// function callBackFunction(enteries) {
//   enteries.forEach(entry => {
//     if (entry.isIntersecting){
      
//         if (entry.target.classList === 'home-sec'){
//           entry.classList.add('loaded')
//         }

//         if (entry.target.classList === 'about-sec'){
//           entry.target.classList.add('loaded')
//         }

//         if (entry.target.classList === 'resume-sec'){
//           entry.target.classList.add('fade-in')
//         }

//         if (entry.target.classList === 'portfolio-sec'){
//           entry.target.classList.add('fade-in')
//         }

//         if (entry.target.classList === 'services-sec'){
//           entry.target.classList.add('animate')
//         }
//         observer.unobserve(entry.target)       
//     }
//   })  
// }

// observer.observe(heroSection)
// observer.observe(aboutSection)
// observer.observe(resumeSection)
// observer.observe(portfolioSection)
// observer.observe(serviceSection)
// observer.observe(footerSection)


















// toTop start

window.addEventListener('scroll', (s) => {
  if(window.pageYOffset > 90){
    toTop.classList.add('active')
  } else{
    toTop.classList.remove('active')
  }
})

// toTop end



const heroSection = document.querySelector('.home-sec');
const aboutSection = document.querySelector('.about-sec');
const skillSection = document.querySelector('.skill-sec');
const resumeSection = document.querySelector('.resume-sec');
const portfolioSection = document.querySelector('.portfolio-sec');
const serviceSection = document.querySelector('.services-sec');
const footerSection = document.querySelector('.contact-sec');

const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver(callbackFunction, options);

function callbackFunction(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;

      if (target.classList.contains('home-sec')) {
        target.classList.add('loaded');
      }

      if (target.classList.contains('about-sec')) {
        target.classList.add('fade-in');
      }

      if (target.classList.contains('resume-sec')) {
        target.classList.add('fade-in');
      }

      if (target.classList.contains('skill-sec')) {
        target.classList.add('fade-in');
      }

      if (target.classList.contains('portfolio-sec')) {
        target.classList.add('fade-in');
      }

      if (target.classList.contains('services-sec')) {
        target.classList.add('animate');
      }

      if (target.classList.contains('contact-sec')) {
        target.classList.add('fade-in');
      }

      observer.unobserve(target); 
    }
  });
}

// Observe sections
[
  heroSection,
  aboutSection,
  skillSection,
  resumeSection,
  portfolioSection,
  serviceSection,
  footerSection
].forEach(section => {
  if (section) observer.observe(section);
});
