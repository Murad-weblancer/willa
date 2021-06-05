const burger = document.querySelector('.burger');
const navbar__list = document.querySelector('.navbar__list');
const body =  document.body;
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    navbar__list.classList.toggle('active');
    body.classList.toggle('disable')
})
const modal = document.querySelector('.modal');
const content = document.querySelector('.modal__content');
const close = document.querySelector('.close');
const btnModal = document.querySelector('.navbar__cart');
btnModal.addEventListener('click', function(){
  
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
    setTimeout(() => {
        content.style.transform = 'translate(0)';
        content.style.opacity = 1;
    }, 300);
})
close.addEventListener('click', function(){
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
})
$(function (){
    $('.slider__wrraper').slick({
        dots: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ],
        autoplay: true

    })
})
const anchors = document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

