$(function(){
    // NAV
    $('.nav').mouseenter(function(){
        $('.subnav').stop().slideDown(200)
        $('.subnav-bg').stop().slideDown(200)
    })
    $('.nav').mouseleave(function(){
        $('.subnav').stop().slideUp(200)
        $('.subnav-bg').stop().slideUp(200)
    })
    // SLIDES
    $('.slide:gt(0)').hide();
    setInterval(function(){
        $('.slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slides');
    }, 3000)

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop().fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop().fadeOut(200)
    })
});