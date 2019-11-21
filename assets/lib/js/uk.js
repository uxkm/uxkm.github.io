
var respon_size = 767;
var $html = $('html');
var $body = $('body');
var $htmlbody = $('html, body');

var $ukHeader = $('.uk_header');
var $ukFooter = $('.uk_footer');
var $ukContainer = $('.uk_container');

var mainHeightArr = [];
var $main_content = $('.main_content');
var $main_intro = $main_content.find('.main_intro');
var $main_info = $main_content.find('.main_info');
var mainInfoStep1 = $main_info.find('.step1');
var mainInfoStep2 = $main_info.find('.step2');
var mainInfoStep3 = $main_info.find('.step3');
var mainInfoStep4 = $main_info.find('.step4');
var mainInfoStep5 = $main_info.find('.step5');


//$(document).ready(function(){
$(function(){

	nav_area();


	//resize
	$(window).resize(function(){
		var win_w = $(window).width();
		var win_h = $(window).height();

		//반응형 pc
		if( win_w > respon_size ){
			$html.addClass('pc').removeClass('mb');
		}
		//반응형 mobile
		else if( win_w <= respon_size ){
			$html.addClass('mb').removeClass('pc');
		}

		//main intro height
		if( device_check === 'device' ) $main_intro.css('height',win_h);
		//$main_info.css('height',win_h - $ukHeader.height());


		//scroll
		$(window).scroll(function(){
			var sct = $(window).scrollTop();

			//uk_header fixed css
			if( sct > 10 ) $ukHeader.addClass('fixed');
			else $ukHeader.removeClass('fixed');

			//main info scroll
			var info_top = $main_intro.height() - $ukHeader.height();
			if( sct >= info_top ) $main_info.addClass('info_scroll');
			//keyboard 페럴렉스
			var f_sct = sct - info_top;
			mainInfoStep1.css('transform','translateY('+ (f_sct*-0.8) +'px)');
			mainInfoStep2.css('transform','translateY('+ (f_sct*-0.6) +'px)');
			mainInfoStep3.css('transform','translateY('+ (f_sct*-0.4) +'px)');
			mainInfoStep4.css('transform','translateY('+ (f_sct*-0.2) +'px)');
			mainInfoStep5.css('transform','translateY('+ (f_sct*-0.1) +'px)');


		}).trigger('scroll');
	}).trigger('resize');





	//main_action
	main_action();







});




//nav_area()
function nav_area(){
	var el_navArea = $('.nav_area');
	el_navArea.find('button').click(function(){
		if( !$(this).is('.active') ){
			$(this).addClass('active').removeClass('after');
		}else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
		}
		return false;
	});
}

function main_action(){
	$('.next_content').click(function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 800, 'easeInOutExpo');
		console.log('aaa');
		return false;
	});
}



function uk_logo(){
	var $uxkm_logo = $('.uk_logo');
	$uxkm_logo.each(function(i, e){
		var uxkm_color = $(e).attr('data-color');
		$(e).css('color',uxkm_color).append('<span style="background:'+uxkm_color+';">');
		var fSize = $(e).width() * 0.1;
		$(e).css({'font-size':fSize, 'opacity':1});
	});
}














