$( document ).ready(function() {
    $(".navbar_menuIcon__Y3zul").click(function(){
        $("body").toggleClass("slider_open")
    });
    
    $(".sideMenu_closeIcon__JKBrv").click(function(){
        $("body").removeClass("slider_open")
    });
});

let mybutton = document.getElementById("HomePageComponents_moveToTop__E7SDo");
mybutton.addEventListener("click", 
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
}) 



$(".css-1fx8m19").click(function() {
    $(this).parent().siblings('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').slideToggle(250);
    $(this).next('.submenu').children('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').children('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
    });




  


