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
    var color  = document.querySelector('#color');
    var mau = ['red','blue','green','#cc6a24','#5525f8','#100e17']
    var teee1 = function teee(){
        var html = ''
        for(var i = 0; i< 6; i++){
            html += `<li class = "color-item" style = "background-color: ${mau[i]}" ></li>`
    }
    return html;
    }
    color.innerHTML = teee1()


    const setColor = document.querySelectorAll('.color-item')
    setColor.forEach((color,index)=>{
        color.onclick =function(){
            var body1  =document.querySelectorAll('.home, .about, .skills, .hoctap, .bosuutap, .pricing, .blog, .contact444');
            console.log(body1)
            body1.forEach((body,index)=>{
                body.style.backgroundColor = `${color.style.backgroundColor}` ;
            })
        }
    })

    const setting = document.querySelector('.icon');
    setting.onclick = function(){
        document.querySelector('.setting').classList.toggle('setting1');
    }
    document.querySelector('.nuthome').onclick = function(){
        document.querySelector('.menuto ul.navbar-nav.mr-auto.mt-1.mt-lg-1.float-xs-right').classList.toggle('mora');
    }
},false)
 