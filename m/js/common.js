//top��� - ���Ӿ�Ŀ
$(document).ready(function() {
	$('.topBtn').click(function() {
		$.mobile.silentScroll(0);
	});
});


//panel
$(document).ready(function() {
	var h = $('body').css('height');

	$('.panelBox, .panelWrap').css('height',h);

	//��踶�� width�޶� �ִ� ����
	var w = $('.panelBox').css('width');
	w = parseInt(w); //����px�� �پ ���а�� �ȵǹǷ� px���� ���� ���

	$('.panelBox').animate({
		left: -w  //���� ��谡 ���� �ִ� width����ŭ �������� �̵�
	},0);

	//�гξ�����Ŭ����
	$('.panel').click(function(){
		$('.panelBox').animate({
			left: 0
		},'fast');
	});

	//X��ư Ŭ����
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