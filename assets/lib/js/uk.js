
var respon_size = 767;
var $html = $('html');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');

var $ukHeader = $('.uk_header');
var $ukContainer = $('.uk_container');
var hd_progress = 'hd_progress';

var main_page = 'main_page';
var sub_page = 'sub_page';
var main_true = $html.is('.'+main_page);
var sub_true = $html.is('.'+sub_page);


$(document).ready(function(){
//$(window).load(function(){
//$(function(){


	//ajax start --------------------------------------------------------------------------------------------------------------//
	var loadStage = true;
	var loadingStartTime = 200;
	var loadingEndTime = 300;

	//loading
	//$body.append('<div class="loading"><i>페이지 로딩 중</i></div>');
	var loading = $('.loading');
	var hide_loading = 'hide_loading';
	var hide_fix_loading = 'hide_fix_loading';
	loading.css('height',window.innerHeight);
	$(window).load(function(){
		setTimeout(function(){
			loadingEnd();
		}, loadingEndTime);
	});
	function loadingEnd(){
		loading.addClass(hide_loading);
		$wrap.addClass(hide_loading);
		$body.removeClass(hide_fix_loading);
	}
	function loadingStart(){
		loading.removeClass(hide_loading);
		//loading.removeClass(hide_fix_loading);
		$wrap.removeClass(hide_loading);
	}


	//sitemap 생성
	/*
	var test_nav = $('.test_nav');
	var depth1, depth2, depth3, depth4;

	test_nav.append('<ul class="depth1"></ul>');
	depth1 = test_nav.find('.depth1');

	//1depth 생성
	for( a=0; a<menu.length; a++ ){
		depth1.append('<li><a href="'+ menu[a].d1_url +'" class="'+uk_link+'">'+ menu[a].d1_nm +'</a></li>');
	}
	depth1.find('li').each(function(a, b){
		var d2 = menu[a].d2;
		if( typeof d2 !== 'undefined' ){
			$(b).append('<ul class="depth2"></ul>');
			depth2 = $(b).find('.depth2');

			//depth2 생성
			for( c=0; c<d2.length; c++ ){
				depth2.append('<li><a href="'+ d2[c].d2_url +'" class="'+uk_link+'">'+ d2[c].d2_nm +'<span> ' +d2[c].d2_url+'</span></a></li>');
			}
			depth2.find('li').each(function(c, d){
				var d3 = menu[a].d2[c].d3;
				if( typeof d3 !== 'undefined' ){
					$(d).append('<ul class="depth3"></ul>');
					depth3 = $(d).find('.depth3');

					//depth3 생성
					for( e=0; e<d3.length; e++ ){
						depth3.append('<li><a href="'+ d3[e].d3_url +'" class="'+uk_link+'">'+ d3[e].d3_nm + ' <span> ' +d3[e].d3_url+'</span></a></li>');
					}
				}
			});
		}
	});
	*/



	//로딩 시mina sub class 부여
	mainSubClass();
	function mainSubClass(){
		var re_url = basic_url.split('/');
		if( re_url[re_url.length-1].match(data) ){
			$html.removeClass(main_page).addClass(sub_page);
		}
		else{
			$html.removeClass(sub_page).addClass(main_page);
		}
	}

	//main / sub ajax
	//mainSet
	function mainSet(time){
		loadingStart();
		setTimeout(function(){
			$html.removeClass(sub_page).addClass(main_page);
			$ukContainer.children().remove();
			$.ajax({
				url:'main.html',
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					console.log("데이터 불러오기 실패");
				},
				success:function(data){
					$ukContainer.html(data);
					uk_editor();
					main_action();
					setTimeout(function(){
						$(window).trigger('resize');
						$(window).trigger('scroll');
						loadScrollTop();
					}, loadingEndTime/3);
					setTimeout(function(){
						loadingEnd();
						$('.main_intro').addClass('start');
					}, loadingEndTime);
				}
			});
		}, time);
	}
	//subSet
	function subSet( time, target_url ){
		loadingStart();
		var first_split = target_url.split('=')[1].split('&');
		var idx1, idx2, idx3;
		for( i=0; i<menu.length; i++ ){
			if( menu[i].d1_nm.match( first_split[0] ) ) idx1 = i;
		}
		var menuFileArrD2 = menu[idx1].d2;
		if( typeof menuFileArrD2 !== 'undefined' ){
			for( i=0; i<menuFileArrD2.length; i++ ){
				if( menuFileArrD2[i].d2_nm.match( first_split[1] ) ) idx2 = i;
			}
		}
		var menuFileArrD3 = menuFileArrD2[idx2].d3;
		if( typeof menuFileArrD3 !== 'undefined' ){
			for( i=0; i<menuFileArrD3.length; i++ ){
				if( menuFileArrD3[i].d3_url.match( first_split[2] ) ) idx3 = i;
			}
		}
		var file_url = menu[idx1].d2[idx2].d3[idx3].d3_file;

		setTimeout(function(){
			$html.removeClass(main_page).addClass(sub_page);
			$ukContainer.children().remove();
			$.ajax({
				url:file_url,
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					console.log("데이터 불러오기 실패");
					$ukContainer.html('데이타가 없어요^^');
				},
				success:function(data){
					$ukContainer.html(data);
					uk_editor();
					sub_action();
					setTimeout(function(){
						$(window).trigger('resize');
						$(window).trigger('scroll');
						loadScrollTop();
					}, loadingEndTime/3);
					setTimeout(loadingEnd, loadingEndTime);
				}
			});
		}, time);
	}


	//로딩 시 페이지 ajax 로드
	//main 로드
	if( $html.is('.'+main_page) ){
		mainSet( 0 );
	}
	//sub 로드
	else{
		var t_url = basic_url.split('?')[1];
		subSet( 0, t_url );
	}

	//uk_link 클릭
	$('.'+uk_link).click(function(){
		var this_local_url = location.href.split('?')[1];
		var this_link_url = $(this).attr('href');
		var this_link_split = this_link_url.split('?')[1];

		//클릭 시 같은 페이지 일 경우
		if( this_local_url === this_link_split ){
			loadStage = true;
			$htmlbody.stop().animate({'scrollTop':0}, 500, 'easeInOutCubic');
		}
		//클릭 시 페이지 이동
		else{
			loadStage = false;
			if( this_link_url === '/' ) mainSet(loadingStartTime);	//메인 이동
			else subSet( loadingStartTime, this_link_url );				//서브 이동
		}

		history.pushState(this_link_url, null, this_link_url);
		return false;
	});

	//브라우저 뒤로/앞으로 클릭
	window.onpopstate = function(event){
		//history.back();   //pushState로 인하여 페이지가 하나 더 생성되기 떄문에 한번에 뒤로가기 위해서 뒤로가기를 한번 더 해줍니다.
		loadStage = false;
		$body.addClass(hide_fix_loading);
		if( history.state === '/' ){
			mainSet( loadingStartTime );
		}
		else{
			var t_url = history.state;
			subSet( loadingStartTime, t_url );
		}
	};

	//새로고침 후 스크롤 높이 유지
	function loadScrollTop(){
		if( loadStage ){
			var someVarName;
			$(window).scroll(function(){
				someVarName = $(window).scrollTop();
				sessionStorage .setItem('scrollTop', someVarName);
			});
			$htmlbody.animate({'scrollTop':sessionStorage.scrollTop}, 0);
		}
		else {
			$htmlbody.animate({'scrollTop':0}, 0);
		}
	}
	//ajax end --------------------------------------------------------------------------------------------------------------//




	//common function start --------------------------------------------------------------------------------------------//
	//header progress bar 생성
	$ukHeader.addClass(device_check);
	$ukHeader.append('<span class="'+hd_progress+'">스크롤 진행상태</span>');


	//resize
	$(window).resize(function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		var document_h = $(document).height();


		//반응형 pc
		if( win_w > respon_size ){
			$html.addClass('pc').removeClass('mb');
		}
		//반응형 mobile
		else if( win_w <= respon_size ){
			$html.addClass('mb').removeClass('pc');
		}


		//scroll -------------------------------------------------------------------------------//
		$(window).scroll(function(){
			var sct = $(window).scrollTop();

			//uk_header ---------------------------//
			//uk_header fixed css
			if( sct > 10 ) $ukHeader.addClass('fixed');
			else $ukHeader.removeClass('fixed');

			//uk_header progress
			var docHeight = document_h - window.innerHeight;
			var hd_proW = (sct/docHeight)*100;  //Math.ceil();
			$('.'+hd_progress).css('width',hd_proW+'%');
		});
		//end scroll --------------------------------------------------------------------------//
	});
	//common function end --------------------------------------------------------------------------------------------//
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
	var $main_intro = $ukContainer.find('.main_intro');
	var $main_info = $ukContainer.find('.main_info');
	var mainInfoStep1 = $main_info.find('.step1');
	var mainInfoStep2 = $main_info.find('.step2');
	var mainInfoStep3 = $main_info.find('.step3');
	var mainInfoStep4 = $main_info.find('.step4');
	var mainInfoStep5 = $main_info.find('.step5');

	$(document).on('click', '.next_content', function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 900, 'easeInOutExpo');
		return false;
	});

	//resize
	$(window).resize(function(){
		var win_h = $(window).height();

		//main intro height
		if( device_check === 'device' ) $main_intro.css('height',win_h);

		//scroll -------------------------------------------------------------------------------//
		$(window).scroll(function(){
			var sct = $(window).scrollTop();

			//main info scroll ---------------------------//
			var info_top = $main_intro.height() - $ukHeader.height();
			if( sct >= info_top ) $main_info.addClass('info_scroll');
			//keyboard 페럴렉스
			var f_sct = sct - info_top;
			if( $html.is('.pc') ){
				mainInfoStep1.css('transform','translateY('+ (f_sct*-0.8) +'px)');
				mainInfoStep2.css('transform','translateY('+ (f_sct*-0.6) +'px)');
				mainInfoStep3.css('transform','translateY('+ (f_sct*-0.4) +'px)');
				mainInfoStep4.css('transform','translateY('+ (f_sct*-0.2) +'px)');
				mainInfoStep5.css('transform','translateY('+ (f_sct*-0.1) +'px)');
			}
			else if( $html.is('.mb') ){
				mainInfoStep1.css('transform','translateY('+ (f_sct*-0.4) +'px)');
				mainInfoStep2.css('transform','translateY('+ (f_sct*-0.3) +'px)');
				mainInfoStep3.css('transform','translateY('+ (f_sct*-0.2) +'px)');
				mainInfoStep4.css('transform','translateY('+ (f_sct*-0.1) +'px)');
				mainInfoStep5.css('transform','translateY('+ (f_sct*-0.05) +'px)');
			}

		});
		//end scroll --------------------------------------------------------------------------//
	});
}

function sub_action(){
	console.log('sub_action');
}














