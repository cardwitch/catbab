//top기능 - 네임앵커
$(document).ready(function() {
	$('.topBtn').click(function() {
		$.mobile.silentScroll(0);
	});
});


//panel
$(document).ready(function() {
	var h = $('body').css('height');

	$('.panelBox, .panelWrap').css('height',h);

	//기계마다 width달라서 주는 변수
	var w = $('.panelBox').css('width');
	w = parseInt(w); //단위px가 붙어서 수학계산 안되므로 px빼기 위해 사용

	$('.panelBox').animate({
		left: -w  //각각 기계가 갖고 있는 width폭만큼 왼쪽으로 이동
	},0);

	//패널아이콘클릭시
	$('.panel').click(function(){
		$('.panelBox').animate({
			left: 0
		},'fast');
	});

	//X버튼 클릭시
	$('.closeBtn').click(function(){
		$('.panelBox').animate({
			left: -w
		},'fast');
	});
});

//mNav
$(document).ready(function() {
	$('.subNav').slideUp(0);

	$('.mainnav').click(function(){
		var is = $(this).parent().find('>.subNav').is(':hidden');

		if(is){
			$('.subNav').slideUp(0);
			$(this).parent().find('>.subNav').slideDown('fast');

			
		}

		
	});
});

//searchBox
$(document).ready(function() {
	$('.searchBox').slideUp(0);

	$('.search a').click(function(){
		$('.searchBox').slideDown('fast');
	});
	$('.searchBox .closeBtn2').click(function(){
		$('.searchBox').slideUp('fast');
	});
});