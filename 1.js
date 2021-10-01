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
document.addEventListener("DOMContentLoaded", function(){
    var nut = document.querySelectorAll('.nav-item');
    var line = document.querySelector('.line');
    nut.forEach((item,index) => {
        item.onclick = function(){
            document.querySelector('.nav-item.active').classList.remove('active');
            this.classList.add('active')
            line.style.width = this.offsetWidth + 'px';
            line.style.left = this.offsetLeft + 'px';
        }
    });
    
},false)
