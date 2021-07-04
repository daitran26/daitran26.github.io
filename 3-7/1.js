 $(function(){
    $(".so1").click(function(){
        $("body,html").animate({scrollTop:$('#so1').offset().top},700)
    })
    $(".so2").click(function(){
        $("body,html").animate({scrollTop:$('#so2').offset().top},700)
    })
    $(".so3").click(function(){
        $("body,html").animate({scrollTop:$('#so3').offset().top-100},700)
    })
    $(".so4").click(function(){
        $("body,html").animate({scrollTop:$('#so4').offset().top-100},700)
    })
    $(".so5").click(function(){
        $("body,html").animate({scrollTop:$('#so5').offset().top-100},700)
    })
    $(".so6").click(function(){
        $("body,html").animate({scrollTop:$('#so6').offset().top-100},700)
    })
    $(".so7").click(function(){
        $("body,html").animate({scrollTop:$('#so7').offset().top},700)
    })
})  
document.addEventListener("DOMContentLoaded", function(){
    var icon = document.querySelectorAll('.nav-link');
    for(var i = 0; i< icon.length; i++){
        icon[i].onclick = function(){
            if(this.classList[1] == 'active'){
                this.classList.remove('active');
                hien.classList.remove('active');
            }
            else{
            for(var k = 0; k<icon .length; k++){
                icon[k].classList.remove('active');
            }
            this.classList.add('active');
        }
        }
    }
},false)
 