const navBtn = document.querySelector('.nav-box');
const navbox = document.querySelector('.c-nav-btn');
const menu = document.querySelector('.menu');
const accItem = document.querySelector('.accordion-item');
const accTitle = document.querySelector('.accordion-title');
const accCo = document.querySelector('.accordion-content');
const menuLi = document.querySelector('.menuList li');

navBtn.addEventListener("click", function(){
  navbox.classList.toggle("is-active"),menu.classList.toggle("is-active"),navBtn.classList.toggle("is-active")
});


accItem.addEventListener("click", function(){
  accTitle.classList.toggle("open"),accCo.classList.toggle("open"),menuLi.classList.toggle("open")
});