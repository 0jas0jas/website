const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navbar = document.querySelector('.navbar')
const card = document.querySelector('.card')
burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
const tl = new TimelineMax();
tl.fromTo(card,1,{opacity:0,x:-40},{opacity:1,x:0,ease:Power3.easeInOut})
.fromTo(navbar,0.4,{opacity:0,x:-30},{opacity:1,x:0,ease:Power3.easeIn})