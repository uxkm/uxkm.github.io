
var respon_size = 767;
var $html = $('html');
var $body = $('body');
var $htmlbody = $('html, body');

var $ukHeader = $('.uk_header');
var $ukFooter = $('.uk_footer');
var $ukContainer = $('.uk_container');

var $main_content = $('.main_content');
var $main_intro = $main_content.find('.main_intro');
var $main_info = $main_content.find('.main_info');

$(function(){
	var mainHeightArr = [];

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
		$main_intro.css('height',win_h);
		$main_info.css('height',win_h - $ukHeader.height());
	}).trigger('resize');


	//scroll
	$(window).scroll(function(){
		var sct = $(window).scrollTop();

		//uk_header fixed css
		if( sct > 10 ) $ukHeader.addClass('fixed');
		else $ukHeader.removeClass('fixed');

		//main info scroll(보류)
		//if( sct >= $main_intro.height() - $ukHeader.height() ) $main_content.addClass('info_scroll');
		//else $main_content.removeClass('info_scroll');
		if( sct >= $main_intro.height() - $ukHeader.height() ){
			$main_info.addClass('info_scroll');
		}
	}).trigger('scroll');


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
		$html.stop().animate({'scrollTop':$main_intro.height() - $ukHeader.height()}, 300, 'easeInOutCirc');
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















