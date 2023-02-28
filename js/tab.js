$(document).ready(function(){
	$('.tab li').first().addClass('on');
	$('.conWrap > div').first().css('display','block');

	$('.tab li a').click(function(){

		//tab
		$('.tab li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.conWrap > div').css('display','none');
		$('.conWrap > div').eq(index).css('display','block');
	});
});

$(document).ready(function(){
	$('.snsTab li').first().addClass('on');
	$('.snsWrap > div').first().css('display','block');

	$('.snsTab li a').click(function(){

		//tab
		$('.snsTab li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.snsWrap > div').css('display','none');
		$('.snsWrap > div').eq(index).css('display','block');
	});
});

$(document).ready(function(){
	$('.dcTap li').first().addClass('on');
	$('.dcPd > div').first().css('display','block');

	$('.dcTap li a').click(function(){

		//tab
		$('.dcTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.dcPd > div').css('display','none');
		$('.dcPd > div').eq(index).css('display','block');
	});
});
//dc food slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.dcfLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .dcfLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.dcProduct .dcfLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.dcProduct .dcfLine').find('>div:last').prependTo('.dcfLine');
	$('.dcProduct .dcfLine').css('left',-wd);
	

	//이전버튼
	$('.dcProduct .prevBtn').click(function(){
		var boxLeft = $('.dcProduct .dcfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dcfLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.dcfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.dcProduct .nextBtn').click(function(){
		var boxLeft = $('.dcProduct .dcfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dcfLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.dcfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});
//dc Poop slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.dcpLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .dcpLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.dcProduct .dcpLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.dcProduct .dcpLine').find('>div:last').prependTo('.dcpLine');
	$('.dcProduct .dcpLine').css('left',-wd);
	

	//이전버튼
	$('.dcProduct .prevBtn').click(function(){
		var boxLeft = $('.dcProduct .dcpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dcpLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.dcpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.dcProduct .nextBtn').click(function(){
		var boxLeft = $('.dcProduct .dcpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dcpLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.dcpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});
//dc foot slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.dctLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .dctLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.dcProduct .dctLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.dcProduct .dctLine').find('>div:last').prependTo('.dctLine');
	$('.dcProduct .dctLine').css('left',-wd);
	

	//이전버튼
	$('.dcProduct .prevBtn').click(function(){
		var boxLeft = $('.dcProduct .dctLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dctLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.dctLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.dcProduct .nextBtn').click(function(){
		var boxLeft = $('.dcProduct .dctLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dctLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.dctLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

//dc home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.dchLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .dchLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.dcProduct .dchLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.dcProduct .dchLine').find('>div:last').prependTo('.dchLine');
	$('.dcProduct .dchLine').css('left',-wd);
	

	//이전버튼
	$('.dcProduct .prevBtn').click(function(){
		var boxLeft = $('.dcProduct .dchLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dchLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.dchLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.dcProduct .nextBtn').click(function(){
		var boxLeft = $('.dcProduct .dchLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dchLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.dchLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});
//dc etc slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.dceLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .dceLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.dcProduct .dceLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.dcProduct .dceLine').find('>div:last').prependTo('.dceLine');
	$('.dcProduct .dceLine').css('left',-wd);
	

	//이전버튼
	$('.dcProduct .prevBtn').click(function(){
		var boxLeft = $('.dcProduct .dceLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dceLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.dceLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.dcProduct .nextBtn').click(function(){
		var boxLeft = $('.dcProduct .dceLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.dcProduct .dceLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.dceLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});


$(document).ready(function(){
	$('.giftTap li').first().addClass('on');
	$('.giftPd > div').first().css('display','block');

	$('.giftTap li a').click(function(){

		//tab
		$('.giftTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.giftPd > div').css('display','none');
		$('.giftPd > div').eq(index).css('display','block');
	});
});



//gift food slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.gfLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .gfLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.gift .gfLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.gift .gfLine').find('>div:last').prependTo('.gfLine');
	$('.gift .gfLine').css('left',-wd);
	

	//이전버튼
	$('.gift .prevBtn').click(function(){
		var boxLeft = $('.gift .gfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gfLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.gfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
	
	//다음버튼
	$('.gift .nextBtn').click(function(){
		var boxLeft = $('.gift .gfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gfLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.gfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});
	//gift poop slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.gpLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .gpLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.gift .gpLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.gift .gpLine').find('>div:last').prependTo('.gpLine');
	$('.gift .gpLine').css('left',-wd);
	

	//이전버튼
	$('.gift .prevBtn').click(function(){
		var boxLeft = $('.gift .gpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gpLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.gpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.gift .nextBtn').click(function(){
		var boxLeft = $('.gift .gpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gpLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.gpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//gift foot slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.gtLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .gtLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.gift .gtLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.gift .gtLine').find('>div:last').prependTo('.gtLine');
	$('.gift .gtLine').css('left',-wd);
	

	//이전버튼
	$('.gift .prevBtn').click(function(){
		var boxLeft = $('.gift .gtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gtLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.gtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.gift .nextBtn').click(function(){
		var boxLeft = $('.gift .gtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .gtLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.gtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//gift home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.ghLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .ghLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.gift .ghLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.gift .ghLine').find('>div:last').prependTo('.ghLine');
	$('.gift .ghLine').css('left',-wd);
	

	//이전버튼
	$('.gift .prevBtn').click(function(){
		var boxLeft = $('.gift .ghLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .ghLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.ghLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.gift .nextBtn').click(function(){
		var boxLeft = $('.gift .ghLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .ghLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.ghLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//gift etc slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.geLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .geLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.gift .geLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.gift .geLine').find('>div:last').prependTo('.geLine');
	$('.gift .geLine').css('left',-wd);
	

	//이전버튼
	$('.gift .prevBtn').click(function(){
		var boxLeft = $('.gift .geLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .geLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.geLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.gift .nextBtn').click(function(){
		var boxLeft = $('.gift .geLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.gift .geLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.geLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

$(document).ready(function(){
	$('.mdTap li').first().addClass('on');
	$('.mdPd > div').first().css('display','block');

	$('.mdTap li a').click(function(){

		//tab
		$('.mdTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.mdPd > div').css('display','none');
		$('.mdPd > div').eq(index).css('display','block');
	});
});

	//md's choice food slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.mfLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .mfLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.mdChoice .mfLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.mdChoice .mfLine').find('>div:last').prependTo('.mfLine');
	$('.mdChoice .mfLine').css('left',-wd);
	

	//이전버튼
	$('.mdChoice .prevBtn').click(function(){
		var boxLeft = $('.mdChoice .mfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mfLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.mfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.mdChoice .nextBtn').click(function(){
		var boxLeft = $('.mdChoice .mfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mfLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.mfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//md's choice poop slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.mpLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .mpLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.mdChoice .mpLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.mdChoice .mpLine').find('>div:last').prependTo('.mpLine');
	$('.mdChoice .mpLine').css('left',-wd);
	

	//이전버튼
	$('.mdChoice .prevBtn').click(function(){
		var boxLeft = $('.mdChoice .mpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mpLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.mpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.mdChoice .nextBtn').click(function(){
		var boxLeft = $('.mdChoice .mpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mpLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.mpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//md's choice foot slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.mtLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .mtLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.mdChoice .mtLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.mdChoice .mtLine').find('>div:last').prependTo('.mtLine');
	$('.mdChoice .mtLine').css('left',-wd);
	

	//이전버튼
	$('.mdChoice .prevBtn').click(function(){
		var boxLeft = $('.mdChoice .mtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mtLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.mtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.mdChoice .nextBtn').click(function(){
		var boxLeft = $('.mdChoice .mtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mtLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.mtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//md's choice home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.mhLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .mhLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.mdChoice .mhLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.mdChoice .mhLine').find('>div:last').prependTo('.mhLine');
	$('.mdChoice .mhLine').css('left',-wd);
	

	//이전버튼
	$('.mdChoice .prevBtn').click(function(){
		var boxLeft = $('.mdChoice .mhLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mhLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.mhLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.mdChoice .nextBtn').click(function(){
		var boxLeft = $('.mdChoice .mhLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .mhLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.mhLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//md's choice etc slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.meLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .meLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.mdChoice .meLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.mdChoice .meLine').find('>div:last').prependTo('.meLine');
	$('.mdChoice .meLine').css('left',-wd);
	

	//이전버튼
	$('.mdChoice .prevBtn').click(function(){
		var boxLeft = $('.mdChoice .meLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .meLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.meLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.mdChoice .nextBtn').click(function(){
		var boxLeft = $('.mdChoice .meLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.mdChoice .meLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.meLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});


$(document).ready(function(){
	$('.brandTap li').first().addClass('on');
	$('.brandPd > div').first().css('display','block');

	$('.brandTap li a').click(function(){

		//tab
		$('.brandTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.brandPd > div').css('display','none');
		$('.brandPd > div').eq(index).css('display','block');
	});
});

	//brand product food slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.brfLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .brfLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.brandProduct .brfLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.brandProduct .brfLine').find('>div:last').prependTo('.brfLine');
	$('.brandProduct .brfLine').css('left',-wd);
	

	//이전버튼
	$('.brandProduct .prevBtn').click(function(){
		var boxLeft = $('.brandProduct .brfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brfLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.brfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.brandProduct .nextBtn').click(function(){
		var boxLeft = $('.brandProduct .brfLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brfLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.brfLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//brand product poop slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.brpLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .brpLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.brandProduct .brpLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.brandProduct .brpLine').find('>div:last').prependTo('.brpLine');
	$('.brandProduct .brpLine').css('left',-wd);
	

	//이전버튼
	$('.brandProduct .prevBtn').click(function(){
		var boxLeft = $('.brandProduct .brpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brpLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.brpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.brandProduct .nextBtn').click(function(){
		var boxLeft = $('.brandProduct .brpLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brpLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.brpLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//brand product foot slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.brtLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .brtLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.brandProduct .brtLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.brandProduct .brtLine').find('>div:last').prependTo('.brtLine');
	$('.brandProduct .brtLine').css('left',-wd);
	

	//이전버튼
	$('.brandProduct .prevBtn').click(function(){
		var boxLeft = $('.brandProduct .brtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brtLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.brtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.brandProduct .nextBtn').click(function(){
		var boxLeft = $('.brandProduct .brtLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brtLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.brtLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//brand product home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.brhLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .brhLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.brandProduct .brhLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.brandProduct .brhLine').find('>div:last').prependTo('.brhLine');
	$('.brandProduct .brhLine').css('left',-wd);
	

	//이전버튼
	$('.brandProduct .prevBtn').click(function(){
		var boxLeft = $('.brandProduct .brhLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brhLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.brhLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.brandProduct .nextBtn').click(function(){
		var boxLeft = $('.brandProduct .brhLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .brhLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.brhLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//brand product etc slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.breLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .breLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.brandProduct .breLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.brandProduct .breLine').find('>div:last').prependTo('.breLine');
	$('.brandProduct .breLine').css('left',-wd);
	

	//이전버튼
	$('.brandProduct .prevBtn').click(function(){
		var boxLeft = $('.brandProduct .breLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .breLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.breLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.brandProduct .nextBtn').click(function(){
		var boxLeft = $('.brandProduct .breLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.brandProduct .breLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.breLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});


$(document).ready(function(){
	$('.bestTap li').first().addClass('on');
	$('.bestPd > div').first().css('display','block');

	$('.bestTap li a').click(function(){

		//tab
		$('.bestTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.bestPd > div').css('display','none');
		$('.bestPd > div').eq(index).css('display','block');
	});
});

	//best product food slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.befLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .befLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.bestProduct .befLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.bestProduct .befLine').find('>div:last').prependTo('.befLine');
	$('.bestProduct .befLine').css('left',-wd);
	

	//이전버튼
	$('.bestProduct .prevBtn').click(function(){
		var boxLeft = $('.bestProduct .befLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .befLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.befLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.bestProduct .nextBtn').click(function(){
		var boxLeft = $('.bestProduct .befLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .befLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.befLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//best product pood slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.bepLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .bepLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.bestProduct .bepLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.bestProduct .bepLine').find('>div:last').prependTo('.bepLine');
	$('.bestProduct .bepLine').css('left',-wd);
	

	//이전버튼
	$('.bestProduct .prevBtn').click(function(){
		var boxLeft = $('.bestProduct .bepLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .bepLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.bepLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.bestProduct .nextBtn').click(function(){
		var boxLeft = $('.bestProduct .bepLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .bepLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.bepLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//best product foot slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.betLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .betLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.bestProduct .betLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.bestProduct .betLine').find('>div:last').prependTo('.betLine');
	$('.bestProduct .betLine').css('left',-wd);
	

	//이전버튼
	$('.bestProduct .prevBtn').click(function(){
		var boxLeft = $('.bestProduct .betLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .betLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.betLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.bestProduct .nextBtn').click(function(){
		var boxLeft = $('.bestProduct .betLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .betLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.betLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//best product home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.behLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .behLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.bestProduct .behLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.bestProduct .behLine').find('>div:last').prependTo('.behLine');
	$('.bestProduct .behLine').css('left',-wd);
	

	//이전버튼
	$('.bestProduct .prevBtn').click(function(){
		var boxLeft = $('.bestProduct .behLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .behLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.behLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.bestProduct .nextBtn').click(function(){
		var boxLeft = $('.bestProduct .behLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .behLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.behLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

	//best product home slider//
$(document).ready(function(){
	//이미지 담은 박스의 width를 담는 변수
	var wd = $('.beeLine > div').width();

	//이미지 담은 박스를 한줄로 처리하기 위해 묶은 박스의 전체 크기 담는 변수
	var max = $(' .beeLine > div').size() * wd; //size()선택자의 개수를 구하는 메서드
	$('.bestProduct .beeLine').css('width',max);

	//다음버튼의 오류때문에 처음부터 마지막 이미지가 처음으로 와야함
	$('.bestProduct .beeLine').find('>div:last').prependTo('.beeLine');
	$('.bestProduct .beeLine').css('left',-wd);
	

	//이전버튼
	$('.bestProduct .prevBtn').click(function(){
		var boxLeft = $('.bestProduct .beeLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .beeLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.beeLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});

	//다음버튼
	$('.bestProduct .nextBtn').click(function(){
		var boxLeft = $('.bestProduct .beeLine').css('left'); //클릭할때의 lineWrap의 left위치

		$('.bestProduct .beeLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.beeLine'); //마지막이미지가 맨앞으로
			$(this).css('left',-wd); //lineWrap의 원래 위치로 돌아가란 뜻
		});
	});
});

$(document).ready(function(){
	$('.hitTap li').first().addClass('on');
	$('.hitPd > div').first().css('display','block');

	$('.hitTap li a').click(function(){

		//tab
		$('.hitTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.hitPd > div').css('display','none');
		$('.hitPd > div').eq(index).css('display','block');
	});
});

	//hit product food slider//
$(document).ready(function(){
	var wd = $('.hitfLine > div').width();

	var max = $(' .hitfLine > div').size() * wd; 
	$('.hitProduct .hitfLine').css('width',max);

	$('.hitProduct .hitfLine').find('>div:last').prependTo('.hitfLine');
	$('.hitProduct .hitfLine').css('left',-wd);

	$('.hitProduct .prevBtn').click(function(){
		var boxLeft = $('.hitProduct .hitfLine').css('left'); 

		$('.hitProduct .hitfLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.hitfLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.hitProduct .nextBtn').click(function(){
		var boxLeft = $('.hitProduct .hitfLine').css('left'); 

		$('.hitProduct .hitfLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.hitfLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product poop slider//
$(document).ready(function(){
	var wd = $('.hitpLine > div').width();

	var max = $(' .hitpLine > div').size() * wd; 
	$('.hitProduct .hitpLine').css('width',max);

	$('.hitProduct .hitpLine').find('>div:last').prependTo('.hitpLine');
	$('.hitProduct .hitpLine').css('left',-wd);

	$('.hitProduct .prevBtn').click(function(){
		var boxLeft = $('.hitProduct .hitpLine').css('left'); 

		$('.hitProduct .hitpLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.hitpLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.hitProduct .nextBtn').click(function(){
		var boxLeft = $('.hitProduct .hitpLine').css('left'); 

		$('.hitProduct .hitpLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.hitpLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product foot slider//
$(document).ready(function(){
	var wd = $('.hittLine > div').width();

	var max = $(' .hittLine > div').size() * wd; 
	$('.hitProduct .hittLine').css('width',max);

	$('.hitProduct .hittLine').find('>div:last').prependTo('.hittLine');
	$('.hitProduct .hittLine').css('left',-wd);

	$('.hitProduct .prevBtn').click(function(){
		var boxLeft = $('.hitProduct .hittLine').css('left'); 

		$('.hitProduct .hittLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.hittLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.hitProduct .nextBtn').click(function(){
		var boxLeft = $('.hitProduct .hittLine').css('left'); 

		$('.hitProduct .hittLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.hittLine'); 
			$(this).css('left',-wd); 
		});
	});
});

 	//hit product home slider//
$(document).ready(function(){
	var wd = $('.hithLine > div').width();

	var max = $(' .hithLine > div').size() * wd; 
	$('.hitProduct .hithLine').css('width',max);

	$('.hitProduct .hithLine').find('>div:last').prependTo('.hithLine');
	$('.hitProduct .hithLine').css('left',-wd);

	$('.hitProduct .prevBtn').click(function(){
		var boxLeft = $('.hitProduct .hithLine').css('left'); 

		$('.hitProduct .hithLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.hithLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.hitProduct .nextBtn').click(function(){
		var boxLeft = $('.hitProduct .hithLine').css('left'); 

		$('.hitProduct .hithLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.hithLine'); 
			$(this).css('left',-wd); 
		});
	});
});

 	//hit product etc slider//
$(document).ready(function(){
	var wd = $('.hiteLine > div').width();

	var max = $(' .hiteLine > div').size() * wd; 
	$('.hitProduct .hiteLine').css('width',max);

	$('.hitProduct .hiteLine').find('>div:last').prependTo('.hiteLine');
	$('.hitProduct .hiteLine').css('left',-wd);

	$('.hitProduct .prevBtn').click(function(){
		var boxLeft = $('.hitProduct .hiteLine').css('left'); 

		$('.hitProduct .hiteLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.hiteLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.hitProduct .nextBtn').click(function(){
		var boxLeft = $('.hitProduct .hiteLine').css('left'); 

		$('.hitProduct .hiteLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.hiteLine'); 
			$(this).css('left',-wd); 
		});
	});
});


$(document).ready(function(){
	$('.newTap li').first().addClass('on');
	$('.newPd > div').first().css('display','block');

	$('.newTap li a').click(function(){

		//tab
		$('.newTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.newPd > div').css('display','none');
		$('.newPd > div').eq(index).css('display','block');
	});
});

	//hit product food slider//
$(document).ready(function(){
	var wd = $('.nefLine > div').width();

	var max = $(' .nefLine > div').size() * wd; 
	$('.newProduct .nefLine').css('width',max);

	$('.newProduct .nefLine').find('>div:last').prependTo('.nefLine');
	$('.newProduct .nefLine').css('left',-wd);

	$('.newProduct .prevBtn').click(function(){
		var boxLeft = $('.newProduct .nefLine').css('left'); 

		$('.newProduct .nefLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.nefLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .nextBtn').click(function(){
		var boxLeft = $('.newProduct .nefLine').css('left'); 

		$('.newProduct .nefLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.nefLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product poop slider//
$(document).ready(function(){
	var wd = $('.nepLine > div').width();

	var max = $(' .nepLine > div').size() * wd; 
	$('.newProduct .nepLine').css('width',max);

	$('.newProduct .nepLine').find('>div:last').prependTo('.nepLine');
	$('.newProduct .nepLine').css('left',-wd);

	$('.newProduct .prevBtn').click(function(){
		var boxLeft = $('.newProduct .nepLine').css('left'); 

		$('.newProduct .nepLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.nepLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .nextBtn').click(function(){
		var boxLeft = $('.newProduct .nepLine').css('left'); 

		$('.newProduct .nepLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.nepLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product foot slider//
$(document).ready(function(){
	var wd = $('.netLine > div').width();

	var max = $(' .netLine > div').size() * wd; 
	$('.newProduct .netLine').css('width',max);

	$('.newProduct .netLine').find('>div:last').prependTo('.netLine');
	$('.newProduct .netLine').css('left',-wd);

	$('.newProduct .prevBtn').click(function(){
		var boxLeft = $('.newProduct .netLine').css('left'); 

		$('.newProduct .netLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.netLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .nextBtn').click(function(){
		var boxLeft = $('.newProduct .netLine').css('left'); 

		$('.newProduct .netLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.netLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product home slider//
$(document).ready(function(){
	var wd = $('.nehLine > div').width();

	var max = $(' .nehLine > div').size() * wd; 
	$('.newProduct .nehLine').css('width',max);

	$('.newProduct .nehLine').find('>div:last').prependTo('.nehLine');
	$('.newProduct .nehLine').css('left',-wd);

	$('.newProduct .prevBtn').click(function(){
		var boxLeft = $('.newProduct .nehLine').css('left'); 

		$('.newProduct .nehLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.nehLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .nextBtn').click(function(){
		var boxLeft = $('.newProduct .nehLine').css('left'); 

		$('.newProduct .nehLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.nehLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//hit product etc slider//
$(document).ready(function(){
	var wd = $('.neeLine > div').width();

	var max = $(' .neeLine > div').size() * wd; 
	$('.newProduct .neeLine').css('width',max);

	$('.newProduct .neeLine').find('>div:last').prependTo('.neeLine');
	$('.newProduct .neeLine').css('left',-wd);

	$('.newProduct .prevBtn').click(function(){
		var boxLeft = $('.newProduct .neeLine').css('left'); 

		$('.newProduct .neeLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.neeLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .nextBtn').click(function(){
		var boxLeft = $('.newProduct .neeLine').css('left'); 

		$('.newProduct .neeLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.neeLine'); 
			$(this).css('left',-wd); 
		});
	});
});


$(document).ready(function(){
	$('.restockTap li').first().addClass('on');
	$('.restockPd > div').first().css('display','block');

	$('.restockTap li a').click(function(){

		//tab
		$('.restockTap li').removeClass('on'); //어디에 클래스가 있을지 모르므로 전부 없앰
		$(this).parent().addClass('on'); //클릭당한 대상의 부모에만 클래스 처리

		//content
		var index = $(this).parent().index(); //index() - 문서객체에 배열번호 받음

		$('.restockPd > div').css('display','none');
		$('.restockPd > div').eq(index).css('display','block');
	});
});

	//restocked product food slider//
$(document).ready(function(){
	var wd = $('.refLine > div').width();

	var max = $(' .refLine > div').size() * wd; 
	$('.reProduct .refLine').css('width',max);

	$('.reProduct .refLine').find('>div:last').prependTo('.refLine');
	$('.reProduct .refLine').css('left',-wd);

	$('.reProduct .prevBtn').click(function(){
		var boxLeft = $('.reProduct .refLine').css('left'); 

		$('.reProduct .refLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.refLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.reProduct .nextBtn').click(function(){
		var boxLeft = $('.reProduct .refLine').css('left'); 

		$('.reProduct .refLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.refLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//restocked product poop slider//
$(document).ready(function(){
	var wd = $('.repLine > div').width();

	var max = $(' .repLine > div').size() * wd; 
	$('.reProduct .repLine').css('width',max);

	$('.reProduct .repLine').find('>div:last').prependTo('.repLine');
	$('.reProduct .repLine').css('left',-wd);

	$('.reProduct .prevBtn').click(function(){
		var boxLeft = $('.reProduct .repLine').css('left'); 

		$('.reProduct .repLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.repLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.reProduct .nextBtn').click(function(){
		var boxLeft = $('.reProduct .repLine').css('left'); 

		$('.reProduct .repLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.repLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//restocked product foot slider//
$(document).ready(function(){
	var wd = $('.retLine > div').width();

	var max = $(' .retLine > div').size() * wd; 
	$('.reProduct .retLine').css('width',max);

	$('.reProduct .retLine').find('>div:last').prependTo('.retLine');
	$('.reProduct .retLine').css('left',-wd);

	$('.reProduct .prevBtn').click(function(){
		var boxLeft = $('.reProduct .retLine').css('left'); 

		$('.reProduct .retLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.retLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.reProduct .nextBtn').click(function(){
		var boxLeft = $('.reProduct .retLine').css('left'); 

		$('.reProduct .retLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.retLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//restocked product home slider//
$(document).ready(function(){
	var wd = $('.rehLine > div').width();

	var max = $(' .rehLine > div').size() * wd; 
	$('.reProduct .rehLine').css('width',max);

	$('.reProduct .rehLine').find('>div:last').prependTo('.rehLine');
	$('.reProduct .rehLine').css('left',-wd);

	$('.reProduct .prevBtn').click(function(){
		var boxLeft = $('.reProduct .rehLine').css('left'); 

		$('.reProduct .rehLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.rehLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.reProduct .nextBtn').click(function(){
		var boxLeft = $('.reProduct .rehLine').css('left'); 

		$('.reProduct .rehLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.rehLine'); 
			$(this).css('left',-wd); 
		});
	});
});

	//restocked product home slider//
$(document).ready(function(){
	var wd = $('.reeLine > div').width();

	var max = $(' .reeLine > div').size() * wd; 
	$('.reProduct .reeLine').css('width',max);

	$('.reProduct .reeLine').find('>div:last').prependTo('.reeLine');
	$('.reProduct .reeLine').css('left',-wd);

	$('.reProduct .prevBtn').click(function(){
		var boxLeft = $('.reProduct .reeLine').css('left'); 

		$('.reProduct .reeLine').animate({
			left: parseInt(boxLeft)+wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:last').prependTo('.reeLine'); 
			$(this).css('left',-wd); 
		});
	});

	$('.reProduct .nextBtn').click(function(){
		var boxLeft = $('.reProduct .reeLine').css('left'); 

		$('.reProduct .reeLine').animate({
			left: parseInt(boxLeft)-wd
		},'fast','easeInOutElastic',function(){
			$(this).find('>div:first').appendTo('.reeLine'); 
			$(this).css('left',-wd); 
		});
	});
});
