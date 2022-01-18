/*--------------------------------------------------
# 변수 선언
--------------------------------------------------*/
let winWidth = $(window).width();
let canvasDiv = document.getElementById('particle-canvas');
let options = {particleColor: '#e37575', interactive: false, speed: 'slow', density: 'medium'};
let particleCanvas = new ParticleNetwork(canvasDiv, options);
let i = [];

/*--------------------------------------------------
# 함수 선언
--------------------------------------------------*/
function preset(){
  i = [];
  $('section').each(function(){
    i.push($(this).offset().top);
  });
  i.push($('section').last().offset().top + $('section').last().height());
  i[0] = 0;
}

/*--------------------------------------------------
# 로드 이벤트
--------------------------------------------------*/
$(window).on('load', function(){
  $('.loading-wrap').delay(150).fadeOut();
  $('section').removeAttr('class'); 
  $('#visual').addClass('on');
});

/*--------------------------------------------------
# 리프레시 스크롤 최상단
--------------------------------------------------*/
history.scrollRestoration = 'manual';
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

/*--------------------------------------------------
# 헤더 스크롤 이벤트
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
# 섹션 스크롤 이벤트
--------------------------------------------------*/
$(window).on('resize', function(){
  preset();
});
preset();

$(window).on('scroll', function(){
  let scrolls = $(this).scrollTop() + $(window).height();
  $('section').each(function(ins){
    if(scrolls >= i[ins] + 200 && scrolls <= i[ins+1]){
      $('section').eq(ins).addClass('on')
    }
  });
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