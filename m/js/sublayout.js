$(document).ready(function(){
	$('.tab01 li').first().addClass('on');
	$('.feedCon01 > div').first().css('display','block');

	$('.tab01 li a').click(function(){

		//tab
		$('.tab01 li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.feedCon01 > div').css('display','none');
		$('.feedCon01 > div').eq(index).css('display','block');
	});
});

$(document).ready(function(){
	$('.tab02 li').first().addClass('on');
	$('.feedCon02 > div').first().css('display','block');

	$('.tab02 li a').click(function(){

		//tab
		$('.tab02 li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.feedCon02 > div').css('display','none');
		$('.feedCon02 > div').eq(index).css('display','block');
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



 $(document).ready(function(){
	$('.tab01 li').first().addClass('on');
	$('.mapCon01 > div').first().css('display','block');

	$('.tab01 li a').click(function(){

		//tab
		$('.tab01 li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.mapCon01 > div').css('display','none');
		$('.mapCon01 > div').eq(index).css('display','block');
	});
});

 $(document).ready(function(){
	$('.tab li').first().addClass('on');
	$('.colorCon > div').first().css('display','block');

	$('.tab li a').click(function(){

		//tab
		$('.tab li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.colorCon > div').css('display','none');
		$('.colorCon > div').eq(index).css('display','block');
	});
});

$(document).ready(function(){
	$('.tab li').first().addClass('on');
	$('.faqCon > div').first().css('display','block');

	$('.tab li a').click(function(){

		//tab
		$('.tab li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.faqCon > div').css('display','none');
		$('.faqCon > div').eq(index).css('display','block');
	});
});