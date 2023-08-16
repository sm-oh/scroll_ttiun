//layout.js

$(document).ready(function(){

  //세로스크롤 값 구하기
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos>=836){
      $('header').addClass('act');//1. 배경색변경
      //2. 로고변경
      $('header h1 img').attr('src','./images/lg_logo.svg');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#333');

      //header에 마우스 아웃시 색상 어둡게
      $('header').mouseenter(function(){
        $('header').addClass('act');//1. 배경색변경
        //2. 로고변경
        $('header h1 img').attr('src','./images/lg_logo.svg');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fas').css('color','#333');
      });

    }else{
      $('header').removeClass('act'); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/lg_logo.svg');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#fff');
    }
  });

  //화면스크롤 내리지 않고 헤더에 마우스 오버시 색상 변경
  $('header').hover(function(){
    $('header').addClass('act');//1. 배경색변경
    //2. 로고변경
    $('header h1 img').attr('src','./images/lg_logo.svg');
    //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
    $('header .gnb > li > a, header i.fas').css('color','#333');
  }, function(){ //마우스 아웃시 다시 원래대로 색상 변경
    $('header').removeClass('act'); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/lg_logo.svg');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fas').css('color','#fff');
  });

  
  // 내비게이션 변수선언
  let gnb = $('.gnb li');

  gnb.click(function(){
    let i = $(this).index()+1;
    console.log(i);//0,1,2,3,4...

    $('html,body').animate({scrollTop:$('main section').eq(i).offset().top-70},400,'easeOutCubic');
    return false;
  });

  
// 배너
  let banner = ['banner01', 'banner02', 'banner03', 'banner04', 'banner05'];
  let n = Math.floor(Math.random()*5);
  document.getElementById('banner').innerHTML=`<a href="#" title="banner"><img src="./images/${banner[n]}.jpg" alt=""></a>`;

// 모달
  const modal=`
    <div class="modal">
      <div class="inner">
        <a href="#" title=""><img src="./images/modal.jpg" alt=""></a>
        <p>
          <input type="checkbox" id="ch">
          <label for="ch">오늘 하루 열지 않음</label>  
          <input type="button" value="닫기" id="c_btn">
        </p>
      </div>
    </div>
  `;
  $('body').append(modal);
  let ch = $('.modal #ch');
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }
  function closeModal(){
    if(ch.is(":checked")){
      $.cookie('popup','none',{expires:1, path:'/'});
    }
    $('.modal').hide();
  }
  $('.modal #c_btn').click(function(){
    closeModal();
  });
});
