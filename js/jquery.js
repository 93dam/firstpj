$(function () {
  $('.hambutton').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#sideNav').toggleClass('on');
  });
  // 햄버거버튼 
  $('#sideNav li:eq(2)').on('click',function(e){
    e.preventDefault();
    if ($('#sideNav ul').children(this).is(':visible')){
      $('#sideNav ul').children(this).slideUp('slow');
    }else{
      $('#sideNav ul').children(this).slideDown('slow');
    }
  });
  // 사이드메뉴 클릭시 메뉴 슬라이드
  $('#mainNav li:eq(2)').on('click',function(e){
    e.preventDefault();
    if ($('#mainNav li ul').children(this).is(':visible')) {
      $('#mainNav li ul').children(this).slideUp('slow');
    }else {
      $('#mainNav li ul').children(this).slideDown('slow');
    }
  });
  // 메인메뉴 클릭시 메뉴 슬라이드
  $('#popUp').on('click',function(e){
    e.preventDefault();
    $('#pop').fadeOut('slow');
  });
  $('#mainNav li:eq(0)').on('click',function(e){
    e.preventDefault();
    $('#pop').fadeIn('slow');
    $('html,body').stop().animate({scrollTop:0},'slow');
  });
  // 팝업창
  $('#draw').roundabout({
  shape: 'square'
  });
  // 드로우 선택형 슬라이드 : 라이브러리사용
  $('#slide1 ul li').each(function (index) {
    $(this).css('left', index * 1200);
  });
  $('#slide1 ul li:last').css('left', -1200);
  $('#nextBtn').on('click',function () {
    $('#slide1 ul li').each(function () {
      var left = parseInt($(this).css('left'));
      var movePos = left - 1200;
      $(this)
        .stop()
        .animate({ left: movePos }, 1000, function () {
          if (movePos < -1200) {
            $(this).css('left', 1200); 
          }
        });
    });
  });
  $('#prevBtn').on('click',function () {
    $('#slide1 ul li').each(function () {
      var left = parseInt($(this).css('left'));
      var movePos = left + 1200;
      $(this)
        .stop()
        .animate({ left: movePos }, 1000, function () {
          if (movePos > 1200) {
            $(this).css('left', -1200);
          }
        });
    });
  });
  // 버튼형 슬라이드
    var indexNum1 = 0;
    setInterval(function () {
    $('#a4 ul li').eq(indexNum1).fadeOut(1000);
    if (indexNum1 == 2) {
      indexNum1 = 0; 
    } else {
      indexNum1++;
    }
      $('#a4 ul li').eq(indexNum1).fadeIn(1000);
    }, 3000);
    // 페이드인 페이드아웃
    var $menu = $('#mainNav>li:gt(0)'),
        $contents = $('#mainSec > figure');
    $menu.on('click',function(e){
      e.preventDefault()
      var idx = ($(this).index()-1);
      var section=$contents.eq(idx)
      var sectionDistance = section.offset().top;
      $('html').stop().animate({scrollTop:sectionDistance},1000);
    }) 
    //스크롤이벤트   
  });