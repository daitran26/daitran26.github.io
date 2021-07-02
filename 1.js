 $(function(){
     vitri = $('#khoisp').offset().top;
    $(".chuot,.kn").click(function(){
        $("body,html").animate({scrollTop:700},700)
    })
    $(".sp").click(function(){
        $("body,html").animate({scrollTop:vitri},700)
    })
    $(".home").click(function(){
        $("body,html").animate({scrollTop:0},700)
    })
    $(".lienhe").click(function(){
        $("body,html").animate({scrollTop:$('#lien').offset().top},700)
    })
})  
 