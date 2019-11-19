

$(function(){
	nav_area();

	//resize
	$(window).resize(function(){
		//uk_logo();
	}).trigger('resize');


	//scroll
	$(window).scroll(function(){
	}).trigger('scroll');

});



function uk_logo(){
	var $uxkm_logo = $('.uk_logo');
	$uxkm_logo.each(function(i, e){
		var uxkm_color = $(e).attr('data-color');
		$(e).css('color',uxkm_color).append('<span style="background:'+uxkm_color+';">');
		var fSize = $(e).width() * 0.1;
		$(e).css({'font-size':fSize, 'opacity':1});
	});
}

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