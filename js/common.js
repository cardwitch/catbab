//mNav
$(document).ready(function(){
	//메인네비 전체 박스 
	var bg = $('<div></div>'); 
	bg.addClass('subNavBg');

	$('header').append(bg);

	//초기 설정
	$('.subNav').slideUp(0); 
	bg.slideUp(0); 
	

	//hover설정
	$('.mNav').hover(function(){
		$('.subNav').stop().slideDown('fast');
		bg.stop().slideDown('fast');
	},function(){
		$('.subNav').stop().slideUp('fast');
		bg.stop().slideUp('fast');
	});

	
	//웹접근성
	$('.mNav > ul > li > a').focus(function(){
		$('.subNav').stop().slideDown('fast');
		bg.stop().slideDown('fast');

		var index = $(this).parent().index()+1;
		mImg(index);
	});
	$('.mNav > ul > li:first > .subNav > li > a').blur(function(){
		$('.subNav').stop().slideUp('fast');
		bg.stop().slideUp('fast');
	});
	$('.mNav > ul > li:last > .subNav > li > a').blur(function(){
		$('.subNav').stop().slideUp('fast');
		bg.stop().slideUp('fast');
	});

	
	//color설정
	$('.subNav').hover(function(){
		$(this).parent().find('>a').addClass('on');
		var index = $(this).parent().index()+1;
		mImg(index);
	},function(){
		$('.mainnav').removeClass('on');
	});
	//color웹접근성
	$('.subNav > li:first-child > a').focus(function(){
		$(this).parent().parent().parent().find('>a').addClass('on');
	});
	$('.subNav > li:last-child > a').blur(function(){
		$(this).parent().parent().parent().find('>a').removeClass('on');
	});

	
});


//toTop
$(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });
			
});


//login, join, sitemap  - colorbox

$(document).ready(function(){
	$('.cLogin').colorbox({iframe:true, width:'500px', height:'550px'});
	$('.cJoin').colorbox({iframe:true, width:'840px', height:'975px'});
	$('.cSitemap').colorbox({iframe:true, width:'1000px', height:'800px'});
});

//family site

$(document).ready(function(){
	$('.fSite ul').slideUp(0);

	//click이벤트는 focus이벤트가 동시 발생
	//click이벤트에 toggle메서드를 주면 focus실행한 후이기 때문에
	//ul이 보이자 마자 안보임

	var cnt = 0; //0과 1을 번갈아 담아줄 스위치 변수

	$('.fSite button').click(function(){
		if(cnt == 0){
			$('.fSite ul').slideDown('fast');
			$('.fSite .icon').addClass('icon180');
			cnt = 1;
		}else{
			$('.fSite ul').slideUp('fast');
			$('.fSite .icon').removeClass('icon180');
			cnt = 0;
		};
	});

	//웹접근성
	$('.fSite button').focus(function(){
		$('.fSite ul').slideDown('fast');
		$('.fSite .icon').addClass('icon180');
	});
	$('.fSite li:last a').blur(function(){
		$('.fSite ul').slideUp('fast');
		$('.fSite .icon').removeClass('icon180');
	});
});

//google map
function initialize() {
              var myLatlng = new google.maps.LatLng(37.5077606,126.7478846,17);
			  //좌표는 구글 지도 공유로 찾기
              var myOptions = {
               zoom: 15,
               center: myLatlng
              };
              var map = new google.maps.Map(document.getElementById("map"), myOptions);

             
              var marker = new google.maps.Marker({
               position: myLatlng, 
               map: map, 
               title:'CATBAB'
              });   
              
             
              var infowindow = new google.maps.InfoWindow({
               content:'경기도 부천시 원미구 상동로 117번길 61 107호 CATBAB'
              });
             
              infowindow.open(map,marker);
             }
             
             
             window.onload=function(){
              initialize();
             } 