
var respon_size = 767;
var $html = $('html');
var $title = $('title');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');

//header
var $ukHeader = $('.uk_header');
var $ukLogo = $ukHeader.find('.uk_logo a');
var $hdNavArea = $ukHeader.find('.hd_nav_area');
var $hdNav= $hdNavArea.find('.nav');
var $search_btn = $hdNavArea.find('.search_btn');
var $assetsLink_btn = $hdNavArea.find('.assetsLink_btn');
var $assetsLink_area = $hdNavArea.find('.assetsLink_area');
var hd_progress = 'hd_progress';
var hd_assetsLink_on = 'hd_assetsLink_on';

//footer
var $ukFooter = $('.uk_footer');
var $ftDepth1 = $ukFooter.find('.depth1');
var $ftDepth2 = $ukFooter.find('.depth2');

//container
var $ukContainer = $('.uk_container');
var top_link = 'top_link';
var common_info = 'common_info';
var top_info = 'top_info';
var sub_content = 'sub_content';
var side_menu_area = 'side_menu_area';
var side_menu = 'side_menu';
var content_area = 'content_area';
var uk_course = 'uk_course';

//class
var main_page = 'main_page';
var sub_page = 'sub_page';
var main_true = $html.is('.'+main_page);
var sub_true = $html.is('.'+sub_page);

var uk_link = 'uk_link';
var d4_first_link = 'd4_first_link';
var hash_link = 'hash_link';
var dp4 = 'dp4';
var ready_link = 'ready_link';
var toggle_link = 'toggle_link';
var html5_new = 'html5_new';
var sub_verticalMove = 'sub_verticalMove';
var loadStage = true;

var loadingStartTime = 400;
var loadingEndTime = 500;
var depth4_scrollSpeed = 0;
var sub_offsetTop = [];


$(document).ready(function(){
	//ajax start --------------------------------------------------------------------------------------------------------------//
	var al_depth1, al_depth2, al_depth3;
	var d1_on, d2_on, d3_on, d4_on;
	var d4_true = false;


	//loading ---------------------------------------------------------------------------------//
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
		$wrap.removeClass(hide_loading);
	}


	//로딩 시mina sub class 부여 -----------------------------------------------------------//
	mainSubClass();
	function mainSubClass(){
		if( location.href.match(data) ){
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
			$title.text('UXKM');
			$ukLogo.removeAttr('data_tit');
			$assetsLink_area.find('li').removeClass('on');	//assets메뉴 활성 초기화
			al_depth1.find('>li').eq(0).addClass('on');			//assets메뉴 html텝 활성화
			$hdNav.find('a').removeClass('on');					//상단 메뉴 활성 초기화
			$ftDepth1.children().removeClass('on');			//하단 메뉴 depth1 활성 초기화
			$ftDepth2.children().removeClass('on');			//하단 메뉴 depth2 활성 초기화

			$('.item').find('li:first a').addClass(d4_first_link);	//4차메뉴의 첫번째 li a에 클래스 부여
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
			$ukLogo.attr('data-tit', menu[d1_on].d1_nm);

			var file_url;
			//assets 메뉴 활성화 시 || assets 메뉴 파일 경로
			if( d1_on === 0 ){
				file_url = menu[d1_on].d2[d2_on].d3[d3_on].d3_file;
			}
			//Project GUIDE, Web Trends 외 메뉴 활성화 시 || Project GUIDE, Web Trends 메뉴 파일 경로
			else {
				file_url = menu[d1_on].d1_file;
				$ftDepth2.children().removeClass('on'); 			//푸터 2뎁스 on클래스 제거
				al_depth1.find('li').removeClass('on');
				al_depth1.find('>li').eq(0).addClass('on');			//assets메뉴 html텝 활성화
			}

			$('.item').find('li:first a').addClass(d4_first_link);	//4차메뉴의 첫번째 li a에 클래스 부여
			$html.removeClass(main_page).addClass(sub_page);
			$ukContainer.children().remove();
			//$(window).off('resize');
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
					//$ukContainer.html(data);
					subPage_html(data, target_url, d1_on, d2_on, d3_on, d4_on)
					uk_editor();
					sub_action(d1_on, d2_on, d3_on, d4_on);
					depth4_scroll(target_url, depth4_scrollSpeed);
					setTimeout(function(){
						//$(window).on('resize').trigger('resize');
						$(window).trigger('resize');
						$(window).trigger('scroll');
						loadScrollTop();
					}, loadingEndTime/3);
					setTimeout(loadingEnd, loadingEndTime);
				}
			});
		}, time);
	}


	//assets link 생성(assets의 하위메뉴만 생성) ------------------------------------------//
	$assetsLink_area.children().append('<ul class="al_depth1"></ul>');
	al_depth1 = $assetsLink_area.find('.al_depth1');
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
							al_depth3.append('<li class="'+dp4+'"><a href="'+ d4[g].d4_url +'" class="'+hash_link+'">'+ d4[g].d4_nm + '</a></li>');
							//if( c === d2_on && e === d3_on && g === d4_on && d4_true ) al_depth3.find('>li').eq(g).addClass('on');

							//element 텍스트 색상 분기 처리
							if( d4[g].d4_nm.match('element') ){
								var txt_split = d4[g].d4_nm.split(' ');
								var element_txt = txt_split[txt_split.length-1];
								var tag_txt;
								if( txt_split.length <= 2 ) tag_txt = txt_split[0];
								else tag_txt = txt_split[0] + ' ' + txt_split[1];
								$(f).find('li a').eq(g).html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
							}

							//html5에서 새로 생성된 태그 표시
							if( d4[g].html5 === true ){
								$(f).find('li a').eq(g).addClass(html5_new).append('<p class="html5 fab fa-html5">HTML5에서 새롭게 추가</p>');
							}
						}
					}
					$(f).find('li:first a').addClass(d4_first_link);
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


	//상단 nav / 하단 nav 생성 --------------------------------------------------------------//
	for( i=0; i<menu.length; i++ ){
		 if( menu[i].d1_url === '#' ){
			 $hdNav.append('<a href="'+menu[i].d1_url+'" class="'+ready_link+'"><i>'+menu[i].d1_nm+'</i></a>');
			 $ftDepth1.append('<a href="'+menu[i].d1_url+'" class="'+ready_link+'"><i>'+menu[i].d1_nm+'</i></a>');
		 }
		 else{
			 $hdNav.append('<a href="'+menu[i].d1_url+'" class="'+uk_link+'"><i>'+menu[i].d1_nm+'</i></a>');
			 $ftDepth1.append('<a href="'+menu[i].d1_url+'" class="'+uk_link+'"><i>'+menu[i].d1_nm+'</i></a>');
		 }

	}
	var ft_depth2 = menu[0].d2;
	for( i=0; i<ft_depth2.length; i++ ){
		if( ft_depth2[i].d2_url === '#' ){
			$ftDepth2.append('<a href="'+ft_depth2[i].d2_url+'" class="'+ready_link+'"><i>'+ft_depth2[i].d2_nm+'</i></a>');
		}
		else{
			$ftDepth2.append('<a href="'+ft_depth2[i].d2_url+'" class="'+uk_link+'"><i>'+ft_depth2[i].d2_nm+'</i></a>');
		}
	}


	//로딩 시 페이지 ajax 로드 ---------------------------------------------------------------//
	//main 로드
	if( $html.is('.'+main_page) ){
		mainSet( 0 );
	}
	//sub 로드
	else{
		var t_url = basic_url.split('?')[1];
		subSet( 0, t_url );
	}


	//uk_link 클릭 ----------------------------------------------------------------------------//
	$(document).on('click', '.'+uk_link, function(){
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

			//메인 이동
			if( this_link_url === '/' ){
				mainSet(loadingStartTime);
				setTimeout(function(){
					$htmlbody.stop().animate({'scrollTop':0},0);
				}, loadingStartTime);
			}
			//서브 이동
			else {
				var before;
				if( location.href.match(data) ) before = this_local_url.split('&')[2];
				else before = '/';
				var after = this_link_url.split('&')[ this_link_url.split('&').length-1 ];

				//서브 같은 페이지
				if( before === after ){
					$htmlbody.stop().animate({'scrollTop':0}, 300);
					$(this).siblings().find('li').removeClass('on');
				}
				//서브 이동
				else{
					subSet( loadingStartTime, this_link_url );
					setTimeout(function(){
						$htmlbody.stop().animate({'scrollTop':0},0);
					}, loadingStartTime);
				}
			}
		}

		history.pushState(this_link_url, null, this_link_url);
		//assets link 닫기
		setTimeout(function(){
			if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
		}, loadingStartTime);
		return false;
	});


	//hash_link 클릭(페이지 내 링크) -------------------------------------------------------//
	$(document).on('click', '.'+hash_link, function(){
		var this_local_url;
		if( !location.href.match('data') ) this_local_url = '/';
		else this_local_url = location.href.split('?')[1].split('&');

		var this_link_url = $(this).attr('href');
		var this_link_split = this_link_url.split('?')[1].split('&');

		//페이지 내 링크
		if( this_local_url[2] === this_link_split[2] ){
			/*
			var this_idx = $(this).parent().index();
			$(this).parent().addClass('on').siblings().removeClass('on');
			$assetsLink_area.find('li.'+dp4+'.on').removeClass('on');
			$assetsLink_area.find('li.item.on li').eq(this_idx).addClass('on');
			$('.'+side_menu).find('li.'+dp4+'.on').removeClass('on');
			$('.'+side_menu).find('li.item.on li').eq(this_idx).addClass('on');
			*/

			depth4_scroll(this_link_url, depth4_scrollSpeed);
			history.replaceState(this_link_url, null, this_link_url);
			$(window).trigger('scroll');
			//loadingStartTime = depth4_scrollSpeed;
			console.log('aaaa');
		}
		//페이지 이동
		else{
			subSet( loadingStartTime, this_link_url );
			history.pushState(this_link_url, null, this_link_url);
		}

		//assets link 닫기
		setTimeout(function(){
			if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
		}, loadingStartTime);
		return false;
	});


	//사이드메뉴 toggle_link 클릭 ----------------------------------------------------------//
	$(document).on('click', '.'+toggle_link, function(){
		$(this).parent().toggleClass('tg_on').siblings().removeClass('tg_on');
		$(this).next().slideToggle(200).parent().siblings()/*.not('.on')*/.find('ol').slideUp(200);
		return false;
	});


	//4뎁스 첫번째 메뉴 클릭 시 스크롤 컨트롤 ---------------------------------------------//
	$(document).on('click','.'+d4_first_link, function(){
		if( !$(this).parent().is('.on') ){
			setTimeout(function(){
				var scrollTarget = $ukContainer.find('.sub_content').offset().top - $ukHeader.height();
				$htmlbody.stop().animate({'scrollTop':scrollTarget}, 0);
			}, loadingStartTime+200);
		}
	});


	//준비중 페이지 클릭 ---------------------------------------------------------------------//
	$(document).on('click', '.'+ready_link, function(){
		alert('준비중 입니다^^');
		console.log('준비중 입니다^^');
		return false;
	});


	//on index & browser tit --------------------------------------------------------------//
	if( sub_true ) onindex( basic_url );
	function onindex( edit_url ){
		if( edit_url.match('#') ) edit_url = edit_url.split('#')[0];
		var this_link_split = edit_url.split('=')[1].split('&');
		if( this_link_split.length === 4 ) d4_true = true;

		for( i=0; i<menu.length; i++ ){
			if( menu[i].d1_nm.match( this_link_split[0] ) ) d1_on = i;
		}
		if( d1_on === 0 ){
			//depth2 on index
			var menuFileArrD2 = menu[d1_on].d2;
			if( typeof menuFileArrD2 !== 'undefined' ){
				for( i=0; i<menuFileArrD2.length; i++ ){
					if( menuFileArrD2[i].d2_nm.match( this_link_split[1] ) ) d2_on = i;
				}
			}
			//depth3 on index
			var menuFileArrD3 = menuFileArrD2[d2_on].d3;
			if( typeof menuFileArrD3 !== 'undefined' ){
				for( i=0; i<menuFileArrD3.length; i++ ){
					if( menuFileArrD3[i].d3_url.match( this_link_split[2] ) ) d3_on = i;
				}
			}
			//depth4 on index
			if( d4_true ){
				var menuFileArrD4 = menuFileArrD3[d3_on].d4;
				if( typeof menuFileArrD4 !== 'undefined' ){
					for( i=0; i<menuFileArrD4.length; i++ ){
						var before_split = menuFileArrD4[i].d4_url.split('&');
						var before = before_split[before_split.length-1];
						//if( menuFileArrD4[i].d4_url.match( this_link_split[3] ) ) d4_on = i;
						if( before === this_link_split[3] ) d4_on = i;
					}
				}
			}

			//assets 링크 활성화
			al_depth1.find('li').removeClass('on');
			var al_dp1_on = al_depth1.find('>li').eq(d2_on);
			al_dp1_on.addClass('on');

			var al_dp2_on = al_dp1_on.find('.al_depth2>li').eq(d3_on);
			al_dp2_on.addClass('on');

			//console.log(d4_true, this_link_split.length);
			if( d4_true && this_link_split.length > 3 ){
				var al_dp3_on = al_dp2_on.find('.al_depth3>li').eq(d4_on);
				al_dp3_on.addClass('on');
			}
		}

		//상단, 하단 링크 활성화
		$hdNav.find('a').removeClass('on').eq(d1_on).addClass('on');
		$ftDepth1.children().removeClass('on').eq(d1_on).addClass('on');
		if( d1_on === 0 ) $ftDepth2.children().removeClass('on').eq(d2_on).addClass('on');

		//browser tit
		var browser_tit;
		//UI/UX Assets메뉴가 아닐 경우
		if( d1_on !== 0 ){
			browser_tit = menu[d1_on].d1_nm;
		}
		//UI/UX Assets의 하위메뉴
		else{
			if( this_link_split.length > 3 ) browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on].d4_nm;
			else browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;
		}
		$title.text(browser_tit+' | UXKM');
	}


	//4차메뉴 스크롤 이동 -------------------------------------------------------------------//
	function depth4_scroll(target_url, scrollSpeed){
		var this_link_split = target_url.split('=')[1].split('&');

		if( this_link_split.length > 3 ){
			var this_id = this_link_split[this_link_split.length-1];
			var ba_id = menu[d1_on].d2[d2_on].d3[d3_on].d4[0].d4_url;
			var ba_split = ba_id.split('&')[ba_id.split('&').length-1];

			var scrollTarget;
			if( ba_split === this_id ){
				var sc_padding = Number($('.'+sub_content).css('paddingTop').slice(0, -2));
				scrollTarget = ($('.'+content_area).offset().top - sc_padding) - $ukHeader.height();
			}
			else{
				scrollTarget = $ukContainer.find('#'+this_id).offset().top - $ukHeader.height();
			}
			$htmlbody.stop().animate({'scrollTop':scrollTarget}, scrollSpeed);

		}
	}


	//브라우저 뒤로/앞으로 클릭 -------------------------------------------------------------//
	window.onpopstate = function(){
	//window.onpopstate = function(event){
		loadStage = false;
		$body.addClass(hide_fix_loading);

		if( history.state === null )history.back(+1);

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
				sessionStorage.setItem('scrollTop', someVarName);
			});
			$htmlbody.animate({'scrollTop':sessionStorage.scrollTop}, 0);
		}
		else {
			//$htmlbody.animate({'scrollTop':0}, 0);
		}
	}
	//ajax end --------------------------------------------------------------------------------------------------------------------//


	//-------------------------------------------------------------------------------------------------------------------------------//


	//common function start --------------------------------------------------------------------------------------------------//
	//header progress bar 생성
	$ukHeader.addClass(device_check);
	$ukHeader.append('<span class="'+hd_progress+'">스크롤 진행상태</span>');

	//assetsLink open btn
	$assetsLink_btn.click(function(){
		if( !$(this).is('.active') ){
			$(this).addClass('active').removeClass('after');
			$html.css('overflow','hidden').addClass(hd_assetsLink_on);
			setTimeout(function(){
				al_depth1.find('> li').each(function(i, e){
					$(e).find('.al_depth2').masonry('layout');
				});
			}, loadingEndTime);
		}
		else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
			$html.removeAttr('style').removeClass(hd_assetsLink_on);
		}
		return false;
	});

	//assets link tab
	$assetsLink_area.find('.d1_link').click(function(){
		if( $(this).attr('href') !== '#' ){
			$(this).parent().addClass('on').siblings().removeClass('on');
		}
		else{
			alert('준비중 입니다^^');
		}
		return false;
	});

	//준비중 페이지 클릭
	$('.'+ready_link).click(function(){
		alert('준비중 입니다^^');
		console.log('준비중 입니다^^');
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
	//common function end -----------------------------------------------------------------------------------------------//
});



//main action
function main_action(){
	var $main_intro = $ukContainer.find('.main_intro');
	var $main_info = $ukContainer.find('.main_info');
	var mainInfoStep1 = $main_info.find('.step1');
	var mainInfoStep2 = $main_info.find('.step2');
	var mainInfoStep3 = $main_info.find('.step3');
	var mainInfoStep4 = $main_info.find('.step4');
	var mainInfoStep5 = $main_info.find('.step5');

	//메인 인트로
	$(document).on('click', '.next_content', function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 1000, 'easeInOutQuint');
		return false;
	});

	var intro_link = menu[0].d2;
	var intro_banner = $main_intro.find('.banner');
	for( i=0; i<intro_link.length; i++ ){
		if( intro_link[i].d2_url === '#' ){
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+ready_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}
		else{
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+uk_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}

		if( i === 2 ) $ukContainer.find('.main_intro').find('.banner a').eq(i).text('js');
	}


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


//sub page html 생성
function subPage_html(data, target_url, d1_on, d2_on, d3_on, d4_on){
	//assets 링크
	if( d1_on === 0 ){
		var d2_target = menu[0].d2[d2_on];
		var d3_target = d2_target.d3[d3_on];
		$ukContainer.append(
			'<section class="sub_top">' +
				'<h1 class="tit">'+d2_target.d2_nm+'</h1>' +
				'<nav class="'+top_link+'"><ul></ul></nav>' +
				'<div class="inner">' +
					'<div class="'+common_info+'"></div>' +
					'<ul class="'+top_info+'"></ul>' +
				'</div>' +
			'</section>' +
			'<div class="sub_content inner">' +
				'<aside class="'+side_menu_area+'">' +
					'<h1 class="tit"><b>'+d2_target.d2_nm+'</b> <i>Table of Contents</i></h1>' +
					//'<h1 class="tit"><b>ACCESSIBILITY</b> <i>Table of Contents</i></h1>' +
					'<nav class="'+side_menu+'"><ol></ol></nav>' +
				'</aside>' +
				'<main class="'+content_area+'" role="main"></main>' +
			'</div>'
		);

		//상단 생성
		conAjax( $('.'+common_info), file+'common_info.html' );	//상단 공통 info 생성
		conAjax( $('.'+top_info), d2_target.d2_info );						//상단 개별 info 생성
		function conAjax(el, target){
			$.get(target, function(content){
				el.append(content);
			});
		}

		//상단 메뉴 생성
		var assets_d2 = menu[0].d2;
		for( i=0; i<assets_d2.length; i++ ){
			if( assets_d2[i].d2_url === '#' ){
				$('.'+top_link+' ul').append('<li><a href="'+assets_d2[i].d2_url+'" class="'+ready_link+'"><i>'+assets_d2[i].d2_nm+'</i></a></li>');
			}
			else{
				$('.'+top_link+' ul').append('<li><a href="'+assets_d2[i].d2_url+'" class="'+uk_link+'"><i>'+assets_d2[i].d2_nm+'</i></a></li>');
			}
			if( i === d2_on ) $('.'+top_link+' li').eq(i).addClass('on');
		}

		//컨텐츠 생성
		$ukContainer.find('.'+content_area).html(data);
		$ukContainer.find('.'+content_area).prepend('<h1>'+d3_target.d3_nm+'</h1>');
		
		//컨텐츠 사이드 메뉴 생성
		var side_d3 = d2_target.d3;
		for( i=0; i<side_d3.length; i++ ){
			/*$('.'+side_menu+'>ol').append(
				'<li class="item"><a href="'+side_d3[i].d3_url+'" class="'+uk_link+' '+d4_first_link+'">'+side_d3[i].d3_nm+'</a></li>'
			);*/
			$('.'+side_menu+'>ol').append(
				'<li class="item"><a href="'+side_d3[i].d3_url+'">'+side_d3[i].d3_nm+'</a></li>'
			);
			if( i === d3_on ) $('.'+side_menu+'>ol>li').eq(i).addClass('on tg_on');
		}
		$('.'+side_menu+'>ol>li').each(function(i, e){
			var side_d4 = side_d3[i].d4;
			if( typeof side_d4 !== 'undefined' ){
				$(e).append('<ol class="side_d2"></ol>');
				$(e).find('>a').addClass(toggle_link);

				//4차메뉴 생성
				for( a=0; a<side_d4.length; a++ ){
					$(e).find('>ol').append('<li class="'+dp4+'"><a href="'+side_d4[a].d4_url+'" class="'+hash_link+'">'+side_d4[a].d4_nm+'</a></li>');
					if( i === d3_on && a === d4_on && target_url.split('&').length > 3  ){
						$(e).find('li').eq(a).addClass('on');
					}

					//element 텍스트 색상 분기 처리
					if( side_d4[a].d4_nm.match('element') ){
						var txt_split = side_d4[a].d4_nm.split(' ');
						var element_txt = txt_split[txt_split.length-1];
						var tag_txt;
						if( txt_split.length <= 2 ) tag_txt = txt_split[0];
						else tag_txt = txt_split[0] + ' ' + txt_split[1];
						$(e).find('li a').eq(a).html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
					}

					//html5에서 새로 생성된 태그 표시
					if( side_d4[a].html5 === true ){
						$(e).find('li a').eq(a).addClass(html5_new).append('<p class="html5 fab fa-html5">HTML5에서 새롭게 추가</p>');
					}

					//if(  ){}
				}
			}
			$(e).find('li:first a').addClass(d4_first_link);

			setTimeout(function(){
				$('.item.on').find('li:first a').removeClass(d4_first_link);
			}, loadingEndTime);
		});

	}

	///Project GUIDE, Web Trends 링크
	else{
		$ukContainer.html(data);
	}


	//스크롤 이동 시 메뉴 on 컨트롤

	/*
	*/
	var test_state = false;
	$(window).resize(function(){
		sub_offsetTop = [];
		$('.'+content_area).find('.'+uk_course).each(function(i, e){
			var of_top;
			if( i === 0 ){
				var sc_padding = Number($('.'+sub_content).css('paddingTop').slice(0, -2));
				of_top = ($('.'+content_area).offset().top - sc_padding);
			}
			else{
				of_top = $(e).offset().top;
			}
			sub_offsetTop.push( of_top );

			$(window).scroll(function(){
				var sct = $(window).scrollTop();
				if( sub_offsetTop[i] - $ukHeader.height() <= sct ){
					if( !test_state ){
						test_state = true;
						$assetsLink_area.find('li.'+dp4+'.on').removeClass('on');
						$assetsLink_area.find('li.item.on li').eq(i).addClass('on');
						$('.'+side_menu).find('li.'+dp4+'.on').removeClass('on');
						$('.'+side_menu).find('li.item.on li').eq(i).addClass('on');
						test_state = false;
					}
				}
			});
		});
	});

}



//sub action
function sub_action(d1_on, d2_on, d3_on, d4_on){
}















//각 메뉴의 element 텍스트 감싸기
/*
setTimeout(function(){
	$('.'+side_menu+' a').each(function(i, e){
		if( $(e).text().match('element') ){
			var txt_split = $(e).text().split(' ');
			var element_txt = txt_split[txt_split.length-1];
			var tag_txt;
			if( txt_split.length <= 2 ) tag_txt = txt_split[0];
			else tag_txt = txt_split[0] + ' ' + txt_split[1];
			$(e).html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
		}
	});
}, loadingStartTime+50);
*/

//touchFlow
/*
$('.'+side_menu).touchFlow({
	axis : "y",
	page : "li.on",
	speed: 100,
	scrollbar: true,
	scrollbarAutoHide:false,
});
*/
//swiper
/*
var side_swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	direction: 'vertical',
	spaceBetween: 0,
	speed: 200,
	mousewheel: {
		forceToAxis: true,
		invert: true,
		sensitivity: 0.5,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		//draggable: true,
		//snapOnRelease:false,
	},
	initialSlide : d3_on,
});
console.log(d3_on);
*/

//전체메뉴 생성 백업
/*
var depth1, depth2, depth3, depth4;
$assetsLink_area.children().append('<ul class="depth1"></ul>');
depth1 = $assetsLink_area.find('.depth1');
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
