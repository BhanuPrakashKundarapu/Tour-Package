let ty=document.querySelector('.fa-bars');
let tx=document.querySelector('.fa-x');
let tz=document.querySelector('#nav');
let ti=document.querySelector('.item-8');
let tk=document.querySelector('.bi-box-arrow-right').addEventListener('click',Mcl);
let carouselItems = document.querySelectorAll('.carousel-item');
let buttons = document.querySelectorAll('.carousel-button');
let tb=document.querySelector('#body');

let to=document.querySelector('#about');
to.addEventListener('click',Mop);




ty.addEventListener('click',op)
tx.addEventListener('click',cl)

function op(){
    tz.style.display='block'
    tx.style.display='block'
    ty.style.display='none'
    console.log('hello')
}
 function cl(){
    tz.style.display='none'
    tx.style.display='none'
    ty.style.display='block'
}

function Mop(){
  ti.style.display='block';
  tb.style.position='fixed';
}
function Mcl(){
  ti.style.display='none';
  tb.style.position='static';

} 


let currentSlide = 0;

function showSlide(n) {
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (n + carouselItems.length) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.slide === 'prev') {
      showSlide(currentSlide - 1);
    } else if (button.dataset.slide === 'next') {
      showSlide(currentSlide + 1);
    }
  });
});

showSlide(currentSlide);
