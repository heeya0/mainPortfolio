$(window).on('load', function(){
  $('.loading-wrap').delay(150).fadeOut();
});

$(function(){
  /*--------------------------------------------------
  # 변수 선언
  --------------------------------------------------*/
  let winWidth = $(window).width();

  /*--------------------------------------------------
  # 스크롤 이벤트
  --------------------------------------------------*/
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 1) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  /*--------------------------------------------------
  # 헤더 - 메뉴
  --------------------------------------------------*/
  $(window).on('resize', function(){
    winWidth = $(window).width();
    if(winWidth > 960){
      $('#header .menu-btn').removeClass('on');
      $('#header, #main, #footer').css({'transform':'none', 'transition':'.3s'});
    }
  });

  $('#header .menu-btn').on('click', function(){
    $('#header .menu-btn').toggleClass('on');
    if($('#header .menu-btn').hasClass('on')){
      $('#header, #main, #footer').css({'transform':'translateX(-250px)', 'transition':'.3s'});
    } else {
      $('#header, #main, #footer').css({'transform':'none', 'transition':'.3s'});
    }
  });

  $('#header .menu>li>a').click(function(e){         
    e.preventDefault();
    $('#header .menu-btn').removeClass('on');
    $('#header, #main, #footer').css({'transform':'none', 'transition':'.3s'});
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });


});

// particle.min.js hosted on GitHub (https://github.com/JulianLaval/canvas-particle-network)
let canvasDiv = document.getElementById('particle-canvas');
let options = {particleColor: '#e37575', interactive: false, speed: 'slow', density: 'medium'};
let particleCanvas = new ParticleNetwork(canvasDiv, options);

