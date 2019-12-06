
var respon_size = 767;
var $html = $('html');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');

var $ukHeader = $('.uk_header');
var hd_progress = 'hd_progress';
var $hdNavArea = $ukHeader.find('.hd_nav_area');
var $hdNav= $hdNavArea.find('.nav');

var $search_btn = $hdNavArea.find('.search_btn');
var $assetsLink_btn = $hdNavArea.find('.assetsLink_btn');
var $assetsLinka_area= $hdNavArea.find('.assetsLink_area');
var hd_assetsLink_on = 'hd_assetsLink_on';

var $ukContainer = $('.uk_container');

var main_page = 'main_page';
var sub_page = 'sub_page';
var main_true = $html.is('.'+main_page);
var sub_true = $html.is('.'+sub_page);

var uk_link = 'uk_link';
var hash_link = 'hash_link';


$(document).ready(function(){
	//ajax start --------------------------------------------------------------------------------------------------------------//
	var loadStage = true;
	var loadingStartTime = 400;
	var loadingEndTime = 400;
	var al_depth1, al_depth2, al_depth3;
	var d1_on, d2_on, d3_on, d4_on;
	var d4_true = false;


	//loading
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

	//mainSet ajax
	function mainSet( time ){
		loadingStart();
		setTimeout(function(){
			$assetsLinka_area.find('li').removeClass('on');	//assets메뉴 활성화 초기화
			al_depth1.find('>li').eq(0).addClass('on');			//assets메뉴 html텝 활성화

			$html.removeClass(sub_page).addClass(main_page);
			$ukContainer.children().remove();
			$.ajax({
				url:'main.html',
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					console.log("데이터 불러오기 실패");
					setTimeout(function(){
						loadingEnd();
					}, loadingEndTime);
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
	//subSet ajax
	function subSet( time, target_url ){
		loadingStart();
		setTimeout(function(){
			onindex( target_url );
			var file_url = menu[d1_on].d2[d2_on].d3[d3_on].d3_file;

			$html.removeClass(main_page).addClass(sub_page);
			$ukContainer.children().remove();
			$.ajax({
				url:file_url,
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					$ukContainer.html('데이타가 없어요^^');
					setTimeout(function(){
						loadingEnd();
					}, loadingEndTime);
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


	//assets link 생성(assets의 하위메뉴만 생성)
	$assetsLinka_area.children().append('<ul class="al_depth1"></ul>');
	al_depth1 = $assetsLinka_area.find('.al_depth1');
	var d2 = menu[0].d2;
	if( typeof d2 !== 'undefined' ){
		//al_depth1 생성
		for( c=0; c<d2.length; c++ ){
			al_depth1.append('<li><a href="'+ d2[c].d2_url +'" class="d1_link link_0'+(c+1)+'"><i>'+ d2[c].d2_nm +'</i></a></li>');
			//al_depth1.find('>li').eq(d2_on).addClass('on');
		}
		al_depth1.find('li').each(function(c, d){
			var d3 = d2[c].d3;
			if( typeof d3 !== 'undefined' ){
				$(d).append('<div class="al_depth2_wrap"><ol class="al_depth2"></ol></div>');
				al_depth2 = $(d).find('.al_depth2');

				//al_depth2 생성
				for( e=0; e<d3.length; e++ ){
					al_depth2.append('<li class="item"><a href="'+ d3[e].d3_url +'" class="'+uk_link+'">'+ d3[e].d3_nm + '</a></li>');
					//if( c === d2_on && e === d3_on ) al_depth2.find('>li').eq(e).addClass('on');
				}
				al_depth2.find('li').each(function(e, f){
					var d4 = d3[e].d4;
					if( typeof d4 !== 'undefined' ){
						$(f).append('<ol class="al_depth3"></ol>');
						al_depth3 = $(f).find('.al_depth3');

						//al_depth3 생성
						for( g=0; g<d4.length; g++ ){
							al_depth3.append('<li><a href="'+ d4[g].d4_url +'" class="'+hash_link+'">'+ d4[g].d4_nm + '</a></li>');
							//if( c === d2_on && e === d3_on && g === d4_on && d4_true ) al_depth3.find('>li').eq(g).addClass('on');
						}
					}
				});
			}
		});
	}

	//assets link masonry 적용
	al_depth1.find('> li').each(function(i, e){
		$(e).find('.al_depth2').masonry({
			itemSelector: '.item',
			percentPosition: true
		});
	});
	al_depth1.find('> li').eq(al_depth1).trigger('click');


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
		setTimeout(function(){
			if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
		}, loadingStartTime/2);
		return false;
	});


	//hash_link 클릭(페이지 내 링크) - (후에 sub_action으로 이동 예정)
	$('.'+hash_link).click(function(){
		console.log('hash_link 클릭!');
		return false;
	});


	//on index
	if( sub_true ) onindex( basic_url );
	function onindex( edit_url ){
		var first_split = edit_url.split('=')[1].split('&');
		if( first_split.length === 4 ) d4_true = true;

		for( i=0; i<menu.length; i++ ){
			if( menu[i].d1_nm.match( first_split[0] ) ) d1_on = i;
		}
		//depth2 on index
		var menuFileArrD2 = menu[d1_on].d2;
		if( typeof menuFileArrD2 !== 'undefined' ){
			for( i=0; i<menuFileArrD2.length; i++ ){
				if( menuFileArrD2[i].d2_nm.match( first_split[1] ) ) d2_on = i;
			}
		}
		//depth3 on index
		var menuFileArrD3 = menuFileArrD2[d2_on].d3;
		if( typeof menuFileArrD3 !== 'undefined' ){
			for( i=0; i<menuFileArrD3.length; i++ ){
				if( menuFileArrD3[i].d3_url.match( first_split[2] ) ) d3_on = i;
			}
		}
		//depth4 on index
		if( d4_true ){
			var menuFileArrD4 = menuFileArrD3[d3_on].d4;
			if( typeof menuFileArrD4 !== 'undefined' ){
				for( i=0; i<menuFileArrD4.length; i++ ){
					if( menuFileArrD4[i].d4_url.match( first_split[3] ) ) d4_on = i;
				}
			}
		}

		//assets 링크 활성화
		al_depth1.find('li').removeClass('on');
		var al_dp1_on = al_depth1.find('>li').eq(d2_on);
		al_dp1_on.addClass('on');

		var al_dp2_on = al_dp1_on.find('.al_depth2>li').eq(d3_on);
		al_dp2_on.addClass('on');

		console.log(d4_true);
		if( d4_true ){
			var al_dp3_on = al_dp2_on.find('.al_depth3>li').eq(d4_on);
			al_dp3_on.addClass('on');
		}
	}


	//브라우저 뒤로/앞으로 클릭
	window.onpopstate = function(event){
		loadStage = false;
		$body.addClass(hide_fix_loading);
		//var change_url = history.state;
		//console.log(change_url)
		//if( history.state.match('#') ) history.state = history.state.split('#')[0];

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

	//assets link tab
	$('.d1_link ').click(function(){
		if( $(this).parent().index() < 2 ){
			$(this).parent().addClass('on').siblings().removeClass('on');
		}
		else{
			alert('준비중 입니다^^');
		}
		return false;
	});





	//common function start --------------------------------------------------------------------------------------------//
	//header progress bar 생성
	$ukHeader.addClass(device_check);
	$ukHeader.append('<span class="'+hd_progress+'">스크롤 진행상태</span>');

	//header nav
	$assetsLink_btn.click(function(){
		if( !$(this).is('.active') ){
			$(this).addClass('active').removeClass('after');
			$html.css('overflow','hidden').addClass(hd_assetsLink_on);
		}
		else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
			$html.removeAttr('style').removeClass(hd_assetsLink_on);
		}
		return false;
	});


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



//main_action
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
		$htmlbody.stop().animate({'scrollTop':topSize}, 1000, 'easeInOutQuint');
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


//sub_action
function sub_action(){
	//console.log('sub_action');
}










//전체메뉴 생성 백업
/*
var depth1, depth2, depth3, depth4;
$assetsLinka_area.children().append('<ul class="depth1"></ul>');
depth1 = $assetsLinka_area.find('.depth1');
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
			depth2.append('<li><a href="'+ d2[c].d2_url +'" class="'+uk_link+'">'+ d2[c].d2_nm +'</a></li>'); //<span> ' +d2[c].d2_url+'</span>
		}
		depth2.find('li').each(function(c, d){
			var d3 = menu[a].d2[c].d3;
			if( typeof d3 !== 'undefined' ){
				$(d).append('<ul class="depth3"></ul>');
				depth3 = $(d).find('.depth3');

				//depth3 생성
				for( e=0; e<d3.length; e++ ){
					depth3.append('<li><a href="'+ d3[e].d3_url +'" class="'+uk_link+'">'+ d3[e].d3_nm + '</a></li>'); //<span> ' +d3[e].d3_url+'</span>
				}
				depth3.find('li').each(function(e, f){
					var d4 = menu[a].d2[c].d3[e].d4;
					if( typeof d4 !== 'undefined' ){
						$(f).append('<ul class="depth4"></ul>');
						depth4 = $(f).find('.depth4');

						//depth4 생성
						for( g=0; g<d4.length; g++ ){
							depth4.append('<li><a href="'+ d4[g].d4_url +'" class="'+hash_link+'">'+ d4[g].d4_nm + '</a></li>'); //<span> ' +d3[e].d3_url+'</span>
						}
					}
				});
			}
		});
	}
});
*/











