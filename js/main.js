$(document).ready(function() {
	// 슬라이더를 움직여주는 함수
	function moveSlider(index) { 
		//index매개변수는 이미지의 배열번호, 원버튼의 배열번호, 텍스트묶음의 배열번호
		
		//이미지 한개의 폭 찾기 - 해상도마다 다르므로
		var w = $('.mSlider_panel img').width();

		var willMoveLeft = -(index * w); //사진각각의 x좌표
		$('.mSlider_panel').animate({ left: willMoveLeft }, 'slow');

		// control_button에 on클래스를 부여/제거
		$('.control_button').removeClass('on');
		$('.control_button').eq(index).addClass('on');
	};

	//초기값 지정
	var num = $('.mSlider_panel img').size()-1; //문서객체 선택자의 개수를 찾는 메서드
	var basic = Math.round(Math.random() * num); //0~4사이의 랜덤한 숫자로 처리
	moveSlider(basic);

	//원버튼 클릭시
	$('.control_button').click(function(){
		var i = $(this).index(); //클릭당한 원버튼의 배열번호를 찾아주는 메서드
		moveSlider(i);
		clearInterval(auto); //버튼클릭시 자동실행이 정지
		$('.play_btn').css('display','block');
		$('.pause_btn').css('display','none');
	});


	//5초마다 자동변경
	var auto = setInterval(function(){
		if(basic == 4){
			basic = 0;
		}else{
			basic++;
		}
		moveSlider(basic);
	},5000);

	// next버튼처리
	$('.next_btn').click(function() {
		var i = $('.control_panel .on').index();
		if(i == 4){
			i = 0;
		}else{
			i++;
		}
		moveSlider(i);
		clearInterval(auto);
		$('.play_btn').css('display','block');
		$('.pause_btn').css('display','none');
	});

	// prev버튼처리
	$('.prev_btn').click(function() {
		var i = $('.control_panel .on').index();
		if(i == 0){
			i = 4;
		}else{
			i--;
		}
		moveSlider(i);
		clearInterval(auto);
		$('.play_btn').css('display','block');
		$('.pause_btn').css('display','none');
	});

	
	//play와 pause - 초기에는 play버튼은 보이지 않음
	$('.play_btn').css('display','none');

	$('.pause_btn').click(function(){
		clearInterval(auto);
		$(this).css('display','none');
		$('.play_btn').css('display','block');
	});

	$('.play_btn').click(function(){
		basic = $('.control_panel .on').index();
		auto = setInterval(function(){
			if(basic == 4){
				basic = 0;
			}else{
				basic++;
			}
			moveSlider(basic);
		},5000);
		$(this).css('display','none');
		$('.pause_btn').css('display','block');
	});
});
	
