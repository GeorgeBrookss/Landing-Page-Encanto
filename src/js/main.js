document.addEventListener('DOMContentLoaded', function(){

    const heroSec = document.querySelector('.hero')
    const heroHeight = heroSec.clientHeight;

    window.addEventListener('scroll', function(){
        const position = window.scrollY;

        if(position > heroHeight){
            flex();
        }else{
            block();
        }
    })





    function flex (){
        const scroller = document.querySelector('.header');
        scroller.classList.add('header--is-active');


    }


    function block (){
        const scroller = document.querySelector('.header');
        scroller.classList.remove('header--is-active')
    }


})

