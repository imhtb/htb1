//MENU
function openMenu(){
    document.getElementById('menubar').style.width="100%";
}
function closeMenu(){
    document.getElementById('menubar').style.width="0";
}
//SMOOTH SCROLL
$('.logo a,#menubar ul li a,.arrow-icon a').on('click', function(){
    $('html,body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    },1000);
    return false
});
// Animated Headline
$(function() {
    $('.main-content').animatedHeadline({
        animationType: 'clip'
    });
})
// MIXITUP
var mixer = mixitup('.work-grid');

// AOS JS
AOS.init({
    offset: 45,
    delay: 300,
    duration: 300,
    easing: 'ease-in-out',
});
