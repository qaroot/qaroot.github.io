$(document).ready(function () {

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-xmark');
        $('.navbar').toggleClass('nav-toggle');
    });


    $(window).on('load scroll' , function (){
        $('.fa-bars').removeClass('fa-xmark');
        $('.navbar').removeClass('nav-toggle');
    });
    $(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('.header').css({'background' : '#6c5ce7' , 'box-shadow' : '0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
        $('.header').css({'background' : 'none' , 'box-shadow' : 'none'});

    }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
      });
    

});



