//mSlider
$(window).load(function() {
	$('.flexslider').flexslider();
});

//bestProduct moving slider
$(document).ready(function(){
	var wd = $('.bestProduct .lineWrap > div').width();
	var max = $('.bestProduct .lineWrap > div').size() * wd; 
	$('.bestProduct .lineWrap').css('width',max);

	$('.bestProduct .lineWrap').find('>div:last').prependTo('.bestProduct .lineWrap');
	$('.bestProduct .lineWrap').css('left',-wd);
	

	$('.bestProduct .prev').click(function(){
		var boxLeft = $('.bestProduct .lineWrap').css('left'); 

		$('.bestProduct .lineWrap').animate({
			left: parseInt(boxLeft)+wd
		},'fast',function(){
			$(this).find('>div:last').prependTo('.bestProduct .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});

	$('.bestProduct .next').click(function(){
		var boxLeft = $('.bestProduct .lineWrap').css('left'); 

		$('.bestProduct .lineWrap').animate({
			left: parseInt(boxLeft)-wd
		},'fast',function(){
			$(this).find('>div:first').appendTo('.bestProduct .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});
});

//newProduct moving slider
$(document).ready(function(){
	var wd = $('.newProduct .lineWrap > div').width();
	var max = $('.newProduct .lineWrap > div').size() * wd; 
	$('.newProduct .lineWrap').css('width',max);

	$('.newProduct .lineWrap').find('>div:last').prependTo('.newProduct .lineWrap');
	$('.newProduct .lineWrap').css('left',-wd);
	

	$('.newProduct .prev').click(function(){
		var boxLeft = $('.newProduct .lineWrap').css('left'); 

		$('.newProduct .lineWrap').animate({
			left: parseInt(boxLeft)+wd
		},'fast',function(){
			$(this).find('>div:last').prependTo('.newProduct .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});

	$('.newProduct .next').click(function(){
		var boxLeft = $('.newProduct .lineWrap').css('left'); 

		$('.newProduct .lineWrap').animate({
			left: parseInt(boxLeft)-wd
		},'fast',function(){
			$(this).find('>div:first').appendTo('.newProduct .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});
});

//newProduct moving slider
$(document).ready(function(){
	var wd = $('.MDschoice .lineWrap > div').width();
	var max = $('.MDschoice .lineWrap > div').size() * wd; 
	$('.MDschoice .lineWrap').css('width',max);

	$('.MDschoice .lineWrap').find('>div:last').prependTo('.MDschoice .lineWrap');
	$('.MDschoice .lineWrap').css('left',-wd);
	

	$('.MDschoice .prev').click(function(){
		var boxLeft = $('.MDschoice .lineWrap').css('left'); 

		$('.MDschoice .lineWrap').animate({
			left: parseInt(boxLeft)+wd
		},'fast',function(){
			$(this).find('>div:last').prependTo('.MDschoice .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});

	$('.MDschoice .next').click(function(){
		var boxLeft = $('.MDschoice .lineWrap').css('left'); 

		$('.MDschoice .lineWrap').animate({
			left: parseInt(boxLeft)-wd
		},'fast',function(){
			$(this).find('>div:first').appendTo('.MDschoice .lineWrap'); 
			$(this).css('left',-wd); 
		});
	});
});


//notice
$(document).ready(function() {
	setInterval(function(){
		$('.notice li').first().appendTo('.notice ul');
		$('.notice li').css('opacity',0);
		$('.notice li').animate({ opacity: 1 }, 'fast');
	},5000);
});

//review
$(document).ready(function() {
	setInterval(function(){
		$('.review li').first().appendTo('.review ul');
		$('.review li').css('opacity',0);
		$('.review li').animate({ opacity: 1 }, 'fast');
	},5000);
});

//freeEntry
$(document).ready(function() {
	setInterval(function(){
		$('.freeEntry li').first().appendTo('.freeEntry ul');
		$('.freeEntry li').css('opacity',0);
		$('.freeEntry li').animate({ opacity: 1 }, 'fast');
	},5000);
});
