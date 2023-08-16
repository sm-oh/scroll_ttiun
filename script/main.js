//main.js

$(document).ready(function(){
  
  // 인트로
  // 변수선언
  const l_btn = $('#intro i.fa-arrow-left-long');
  const r_btn = $('#intro i.fa-arrow-right-long');

  $('.slideshow-container li:last-child').insertBefore('.slideshow-container li:first-child');

  $('.slideshow-container').css('margin-left','-1380px');


  function moveLeft(){
    $('.slideshow-container').animate({'margin-left':'-2760px'},500,function(){
      $('.slideshow-container li:first-child').insertAfter('.slideshow-container li:last-child');
      $('.slideshow-container').css('margin-left','-1380px');
    });
    
  }

  r_btn.click(function(){
    clearInterval(Timer);
    moveLeft();
  });


  function moveRight(){
    $('.slideshow-container').animate({'margin-left':'0px'},500,function(){
      $('.slideshow-container li:last-child').insertBefore('.slideshow-container li:first-child');
      $('.slideshow-container').css('margin-left','-1380px');
    });
  }

  l_btn.click(function(){
    clearInterval(Timer);
    moveRight();
  });

  let Timer = setInterval(moveLeft, 3000);

  $('#intro i.fas').mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(moveLeft, 3000);
  });

  // detail
  // 변수선언
  let shine = $('.shine li');
  shine.hover(function(){
    $(this).animate({'width':'630px'},300).siblings().animate({'width':'250px'},100);
    clearInterval(Timer);
    },function(){

  });
  
  // 틔운라이프
  let mLeft = 0;
  let ctrl_btn = $('.ctrl_btn > li');

  let i =$('.ctrl_btn > li').index();
  console.log(i);
  ctrl_btn.click(function(){
    i = $(this).index();
    console.log(i);
    i =-(i*650);
    console.log(i);
    $('.s_wrap').animate({'left':i},650);
    $('.ctrl_btn li').removeClass('on');
    $(this).addClass('on');
  });

  //플랜테리어
  let c_btn = $('.c_btn > li');
  let j =$('.c_btn > li').index();
  c_btn.click(function(){
    j = $(this).index();
    console.log(j);
    j =-(j*650);
    console.log();
    $('.slide_wrap').animate({'left':j},650);
    $('.c_btn li').removeClass('on1');
    $(this).addClass('on1');
  });
});
