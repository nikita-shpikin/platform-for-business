const element=document.getElementById('my-select')
const choices=new Choices(element,{searchEnabled:!1,itemSelectText:'',})
const swiper=new Swiper('.swiper1',{loop:!0,speed:1200,spaceBetween:0,containerModifierClass:'banner-swiper',autoplay:{delay:3000,disableOnInteraction:!1,pauseOnMouseEnter:!0,},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},pagination:{el:'.swiper-pagination',bulletClass:'banner__pagination-bullet',bulletActiveClass:'banner__pagination-bullet--active',},})
const swiper2=new Swiper('.swiper2',{slidesPerView:1.5,slidesPerGroup:1,spaceBetween:24,speed:1000,navigation:{nextEl:'.business__next',prevEl:'.business__prev',},pagination:{el:'.business__pagination',bulletClass:'business__pagination-bullet',bulletActiveClass:'business__pagination-bullet--active',},breakpoints:{0:{slidesPerView:1.5},768:{slidesPerView:2},1200:{slidesPerView:3},},})
let hasChanged1=!1
swiper2.on('slideChange',()=>{if(window.innerWidth<=768&&!hasChanged1){hasChanged1=!0
setTimeout(()=>{swiper2.params.centeredSlides=!0
swiper2.update()},550)}})
const swiper3=new Swiper('.swiper3',{slidesPerView:1.5,spaceBetween:24,speed:700,breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3},},})
let hasChanged2=!1
swiper3.on('slideChange',()=>{if(window.innerWidth<=768&&!hasChanged2){hasChanged2=!0
setTimeout(()=>{swiper3.params.centeredSlides=!0
swiper3.update()},400)}})
const swiper4=new Swiper('.swiper4',{slidesPerView:1.5,spaceBetween:22,speed:1500,breakpoints:{768:{slidesPerView:3},1200:{slidesPerView:4},},})
let hasChanged3=!1
swiper4.on('slideChange',()=>{if(window.innerWidth<=768&&!hasChanged3){hasChanged3=!0
setTimeout(()=>{swiper4.params.centeredSlides=!0
swiper4.update()},700)}})
const burger=document.querySelector('.header__burger')
const menu=document.querySelector('.header__menu')
const menuItems=document.querySelectorAll('.header__menu-item')
const menuBtn=document.querySelector('.header__menu-btn')
menuItems.forEach(item=>{item.addEventListener('click',event=>{event.stopPropagation()
const submenu=item.querySelector('.header__submenu')
if(submenu){const isActive=submenu.classList.contains('header__submenu--active')
document.querySelectorAll('.header__submenu').forEach(sub=>{sub.classList.remove('header__submenu--active')
menuBtn.classList.remove('header__menu-btn--active')})
if(!isActive){submenu.classList.add('header__submenu--active')
menuBtn.classList.add('header__menu-btn--active')}}})})
document.addEventListener('click',()=>{document.querySelectorAll('.header__submenu').forEach(submenu=>{submenu.classList.remove('header__submenu--active')})})
burger.addEventListener('click',()=>{burger.classList.toggle('header__burger--active')
menu.classList.toggle('header__menu--active')})