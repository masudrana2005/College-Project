$(document).ready(function(){
    $('.my-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true, 
        // arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            },  
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
});


// Back to Top 
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 300){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
    

// Mobile Menu
function menuOpen(){
    document.querySelector('.mobile-menu').classList.add('show');
    document.querySelector('.menu-open').style.display='none';
    document.querySelector('.menu-close').style.display='block';
}

function menuClose(){
    document.querySelector('.mobile-menu').classList.remove('show');
    document.querySelector('.menu-open').style.display='block';
    document.querySelector('.menu-close').style.display='none';
}

// double
// Second Menu
// function menuOpen2(){
//     document.querySelector('.mobile-menu2').classList.add('show');
//     document.querySelector('.menu-open2').style.display='none';
//     document.querySelector('.menu-close2').style.display='block';
// }

// function menuClose2(){
//     document.querySelector('.mobile-menu2').classList.remove('show');
//     document.querySelector('.menu-open2').style.display='block';
//     document.querySelector('.menu-close2').style.display='none';
// }
