
var respon_size = 767 - 17;
var md_size = 993 - 17;
var UXKM = 'UXKM';
var $html = $('html');
var $title = $('title');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');
var $ukSkip= $('.uk-skip');

//header
var $ukHeader = $('.uk_header');
var $ukLogo = $ukHeader.find('.uk_logo a');
var $hdNavArea = $ukHeader.find('.hd_nav_area');
var $hdNav= $hdNavArea.find('.nav');
var $search_btn = $hdNavArea.find('.search_btn');
var $search_area = $hdNavArea.find('.search_area');
var $assetsLink_btn = $hdNavArea.find('.assetsLink_btn');
var $assetsLink_area = $hdNavArea.find('.assetsLink_area');
var hd_progress = 'hd_progress';
var hd_assetsLink_on = 'hd_assetsLink_on';
var hd_search_on = 'hd_search_on';

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
var md_state = 'md_state';
var tg_on = 'tg_on';
var assets_page_move = 'assets_page_move';
var sub_black = 'sub_black';

var uk_link = 'uk_link';
var hash_link = 'hash_link';
var hash_move = 'hash_move';
var dp4 = 'dp4';
var ready_link = 'ready_link';
var toggle_link = 'toggle_link';
var html5_new = 'html5_new';
var loadStage = true;
var pageMove = false;

var loadingFirstStart = 1000;
var loadingStartTime = 300;
var loadingEndTime = 300;
var depth4_scrollSpeed = 0;
var pageTop_scrollSpeed = 0;
var sub_offsetTop = [];
var side_offsetTop = [];
var top_link_offsetTop = [];

var loading = $('.loading');
var hide_loading = 'hide_loading';
var hide_fix_loading = 'hide_fix_loading';


$(document).ready(function(){
	//ajax start --------------------------------------------------------------------------------------------------------------//
	var al_depth1, al_depth2, al_depth3;
	var d1_on, d2_on, d3_on, d4_on;
	var d4_true = false;
	$ukSkip.attr('tabindex','-1');


	//loading ---------------------------------------------------------------------------------//
	loading.css('height',window.innerHeight).find('.tit').addClass(device_check);
	function loadingEnd(){
		if( loading.is('.uxkm_start') ){
			setTimeout(function(){
				loading.addClass(hide_loading);
				$wrap.addClass(hide_loading);
				$body.removeClass(hide_fix_loading);
				setTimeout(function(){
					loading.removeClass('uxkm_start');
				}, 800);
			}, loadingFirstStart);
		}
		else{
			setTimeout(function(){
				loading.addClass(hide_loading);
				$wrap.addClass(hide_loading);
				$body.removeClass(hide_fix_loading);
			}, 300);
		}
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
		loadingStart();														//로딩 시작
		$(window).off('scroll resize');								//scroll, resize 초기화
		setTimeout(function(){
			$title.text(UXKM);											//타이틀 변경
			$ukSkip.trigger('focus');									//포커스 초기화
			$ukLogo.removeAttr('data_tit');						//로고 data_tit 삭제
			$assetsLink_area.find('li').removeClass('on');	//assets메뉴 활성 초기화
			al_depth1.find('>li').eq(0).addClass('on');			//assets메뉴 html텝 활성화
			$hdNav.find('a').removeClass('on');					//상단 메뉴 활성 초기화
			$ftDepth1.children().removeClass('on');			//하단 메뉴 depth1 활성 초기화
			$ftDepth2.children().removeClass('on');			//하단 메뉴 depth2 활성 초기화

			$html.removeClass(sub_page).addClass(main_page);
			$ukContainer.children().remove();
			$assetsLink_area.removeClass(assets_page_move);

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
					setTimeout(loadScrollTop, loadingEndTime/3);
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
		loadingStart();														//로딩 시작
		$(window).off('scroll resize');								//scroll, resize 초기화
		setTimeout(function(){
			onindex( target_url );										//현재 페이지 활성화
			$ukSkip.trigger('focus');									//포커스 초기화
			$ukLogo.attr('data-tit', menu[d1_on].d1_nm);	//로고에 1뎁스 메뉴명 적용

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

			$html.removeClass(main_page).addClass(sub_page);
			$ukContainer.children().remove();
			$assetsLink_area.removeClass(assets_page_move);

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
					sub_action(data, target_url, d1_on, d2_on, d3_on, d4_on)
					uk_editor();
					setTimeout(loadScrollTop, loadingEndTime/3);
					if( pageMove ){
						setTimeout(function(){
							depth4_scroll(target_url, 0);
							pageMove = false;
						}, loadingStartTime + 50);
					}
					setTimeout(function(){
						$(window).on('load', loadingEnd());
						$(window).trigger('resize');
					}, loadingEndTime);
				}
			});
		}, time);
	}


	//assets link 생성(assets의 하위메뉴만 생성) ------------------------------------------//
	$assetsLink_area.attr('tabindex','0').find('.assetsLink_in').append('<ul class="al_depth1"></ul>');
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

		var this_local = this_local_url;
		var this_local_split;
		if( location.href.match(data) ){
			this_local_split = this_local_url.split('&');
			if( this_local_split.length > 3 ){
				this_local = '';
				for( i=0; i<this_local_split.length-1; i++ ){
					if( i === 0 ) this_local += this_local_split[i];
					else this_local += '&'+this_local_split[i];
				}
			}
		}

		//클릭 시 같은 페이지 일 경우
		if( this_local === this_link_split ){
			loadStage = true;
			$htmlbody.stop().animate({'scrollTop':0}, pageTop_scrollSpeed, 'easeInOutCubic');
			if( location.href.match(data) ){
				$('.dp4').removeClass('on');
				var browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;
				$title.text(browser_tit+' | '+UXKM);
				if( $(this).siblings('.al_depth3').is(':visible') && device_check === 'device' ){
					$assetsLink_area.addClass(hash_move);
				}
			}
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
					$htmlbody.stop().animate({'scrollTop':0}, pageTop_scrollSpeed);
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

			//hd_progress 초기화
			setTimeout(function(){
				$('.'+hd_progress).removeAttr('style');
			}, loadingStartTime);

			$assetsLink_area.addClass(assets_page_move);
		}

		history.pushState(this_link_url, null, this_link_url);

		//assets link 닫기
		setTimeout(function(){
			if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
		}, 0); //loadingStartTime
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
			var idx = $(this).parent().index();
			depth4_scroll(this_link_url, depth4_scrollSpeed);

			var browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d4[$(this).parent().index()].d4_nm;
			var side_target = $('.'+side_menu+' .item.on > a');
			$title.text(browser_tit+' | '+UXKM);
			side_target.attr('data-tit',(d3_on+1)+'.'+(idx+1)+'. '+browser_tit);
			history.replaceState(this_link_url, null, this_link_url);

			//side menu click
			if( $html.is('.'+md_state) && $(this).parents('.side_d2').is(':visible') ){
				side_target.trigger('click');
			}

			//assets menu click
			if( $(this).parents('.al_depth3').is(':visible') ){
				if( device_check === 'device' ){
					$assetsLink_area.addClass(hash_move);
				}else{
					offsetTopControl();
				}
			}

			//assets link 닫기
			setTimeout(function(){
				if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
			}, depth4_scrollSpeed);
		}
		//페이지 이동
		else{
			subSet( loadingStartTime, this_link_url );
			history.pushState(this_link_url, null, this_link_url);
			pageMove = true;

			//assets link 닫기
			setTimeout(function(){
				if( $html.is('.'+hd_assetsLink_on) ){
					$assetsLink_btn.trigger('click');
					$assetsLink_area.addClass(assets_page_move);
				}
			}, 0);//loadingStartTime
		}

		return false;
	});


	//사이드메뉴 toggle_link 클릭 ----------------------------------------------------------//
	$(document).on('click', '.'+toggle_link, function(){
		$(this).parent().toggleClass(tg_on).siblings().removeClass(tg_on);
		$(this).next().slideToggle(200).parent().siblings()/*.not('.on')*/.find('ol').slideUp(200);
		return false;
	});


	//준비중 페이지 클릭 ---------------------------------------------------------------------//
	$(document).on('click', '.'+ready_link, function(){
		var txt = $(this).text();
		if( txt === 'js' ) txt = 'JAVASCRIPT';
		alert(txt+' 컨텐츠 준비 중입니다.');
		//console.log('준비중 입니다^^');
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
		$title.text(browser_tit+' | '+UXKM);
	}


	//4차메뉴 스크롤 이동 -------------------------------------------------------------------//
	function depth4_scroll(target_url, scrollSpeed){
		var this_link_split = target_url.split('=')[1].split('&');

		if( this_link_split.length > 3 ){
			var this_id = this_link_split[this_link_split.length-1];
			var ba_id = menu[d1_on].d2[d2_on].d3[d3_on].d4[0].d4_url;
			var ba_split = ba_id.split('&')[ba_id.split('&').length-1];

			var scrollTarget;
			if( ba_split === this_id ) scrollTarget = $('.'+sub_content).offset().top - $ukHeader.height();
			else scrollTarget = $ukContainer.find('#'+this_id).offset().top - $ukHeader.height();

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
			$html.css('overflow','hidden').addClass(hd_assetsLink_on+' '+sub_black);
			$assetsLink_area.trigger('focus').removeClass(hash_move);
			offsetTopControl();

			setTimeout(function(){
				al_depth1.find('> li').each(function(i, e){
					$(e).find('.al_depth2').masonry('layout');
				});
			}, loadingEndTime);
		}
		else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
			$html.removeAttr('style').removeClass(hd_assetsLink_on);
			setTimeout(function(){
				$html.removeClass(sub_black);
			}, 300);
			setTimeout(function(){
				$('.'+top_link+' ul').removeAttr('style');
				$('.'+side_menu).removeAttr('style');
			}, 600);
		}
		return false;
	});
	
	//assets link tab
	al_depth1.children().each(function(i, e){
		var link = $(e).find('> a');
		if( link.attr('href') !== '#' ){
			link.on('click focus', function(){
				$(this).parent().addClass('on').siblings().removeClass('on');
				return false;
			});
		}
		else{
			link.on('click', function(){
				alert('준비중 입니다^^');
				return false;
			});
		}
	});

	//search open
	$search_btn.click(function(){
		if( !$html.is('.'+hd_search_on) ){
			$html.css('overflow','hidden').addClass(hd_search_on);
			$assetsLink_btn.addClass('active');
			$('.search_area input[type="text"]').trigger('focus');
			offsetTopControl();
			//setTimeout(function(){}, 600);
		}
		return false;
	});

	//search close
	$('.search_close').click(function(){
		$html.css('overflow','scroll').removeClass(hd_search_on);
		$assetsLink_btn.removeClass('active').addClass('after');

		setTimeout(function(){
			$('.'+top_link+' ul').removeAttr('style');
			$('.'+side_menu).removeAttr('style');
		}, 600);
		return false;
	});

	//uk-skip click
	$('.uk-skip a').on({
		focusin:function(){
			$(document).find('#content').attr('tabindex','0');
		},
		click:function(){
			$(document).find('#content').trigger('focus');
			if( $html.is('.sub_page') ){
				$htmlbody.stop().animate({'scrollTop':$('.'+sub_content).offset().top - $ukHeader.height()}, 0);
			}
			return false;
		}
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

	//ukContainer 아이디 생성
	$ukContainer.attr('id','content');

	//메인 인트로 next클릯
	$(document).on('click', '.next_content', function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 1000, 'easeInOutQuint');
		return false;
	});

	//메인 인트로 링크 생성
	var intro_link = menu[0].d2;
	var intro_banner = $main_intro.find('.banner');
	for( i=0; i<intro_link.length; i++ ){
		if( intro_link[i].d2_url === '#' ){
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+ready_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}
		else{
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+uk_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}
		if( i === 2 ) $ukContainer.find('.main_intro').find('.banner a').eq(i).text('JS');
	}

	//resize
	$(window).on('resize', function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		pc_mb_class(win_w);

		//main intro height
		if( device_check === 'device' ) $main_intro.css('height',win_h);
	}).trigger('resize');

	//scroll
	$(window).on('scroll', function(){
		var sct = $(window).scrollTop();
		hd_common(sct);

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

	//common
	removeTabindex();	//remove tabindex
	focusControl();			//focus controll
}


//sub action
function sub_action(data, target_url, d1_on, d2_on, d3_on, d4_on){
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
				'<main id="content" class="'+content_area+'" role="main"></main>' + //tabindex="-1"
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
		$ukContainer.find('.'+content_area).prepend('<h1 data-number="'+(d3_on+1)+'. ">'+d3_target.d3_nm+'</h1>');
		$ukContainer.find('.'+uk_course).each(function(i, e){
			$(e).find('h2').attr('data-number', (d3_on+1)+'.'+(i+1)+'. ');
			$(e).find('h2').next().addClass('both');
		});
		
		//컨텐츠 사이드 메뉴 생성
		var side_d3 = d2_target.d3;
		for( i=0; i<side_d3.length; i++ ){
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
				}
			}
			else{
				$(e).find('>a').addClass(uk_link);
			}
		});
	}

	///Project GUIDE, Web Trends 링크
	else{
		$ukContainer.html(data);
	}

	//resize
	var side_state = false;
	top_link_offsetTop = [];
	$(window).on('resize', function(){
		var win_w = $(window).width();
		var hd_h = $ukHeader.height();
		pc_mb_class(win_w);

		sub_offsetTop = [];
		$('.'+content_area).find('.'+uk_course).each(function(i, e){
			var of_top;
			if( i === 0 ) of_top = $('.'+sub_content).offset().top - hd_h;
			//if( i === 0 ) of_top = $(e).offset().top - hd_h;
			else of_top = $(e).offset().top - hd_h;
			sub_offsetTop.push( of_top );
			//console.log(sub_offsetTop);
		});

		side_offsetTop = [];
		side_offsetTop.push( $('.'+side_menu_area).offset().top - hd_h );

		top_link_offsetTop.push( $('.'+top_link+' ul').offset().top - hd_h );
		top_link_offsetTop.sort(function(a, b) {
			return a - b;
		});

		//md-max 사이즈일 때 side menu 컨트롤
		var side_target = $('.'+side_menu+' .item.on');
		if( win_w < md_size ){
			$html.addClass(md_state);
			if( side_target.is('.'+tg_on) && !side_state ){
				side_target.removeClass(tg_on).find('ol').hide();
				side_state = true;
			}
		}
		else{
			$html.removeClass(md_state);
			if( side_state ){
				side_target.siblings().removeClass(tg_on).find('ol').removeAttr('style');
				side_target.addClass(tg_on).find('ol').show();
				side_state = false;
			}
		}
	//});
	}).trigger('resize');

	//scroll
	$(window).on('scroll', function(){
		var sct = $(window).scrollTop();
		hd_common(sct);

		if( sct > side_offsetTop )$('.'+side_menu_area).addClass('fixed');
		else $('.'+side_menu_area).removeClass('fixed');

		if( sct > top_link_offsetTop[0] )$('.'+top_link+' ul').addClass('fixed');
		else $('.'+top_link+' ul').removeClass('fixed');

		var remove_class = 'li.'+dp4+'.on';
		var add_class = 'li.item.on li';

		//스크롤 이동 시 on 클래스
		$('.'+content_area).find('.'+uk_course).each(function(i, e){
			if( sub_offsetTop[i] <= sct ){
				$assetsLink_area.find(remove_class).removeClass('on');
				$assetsLink_area.find(add_class).eq(i).addClass('on');
				$('.'+side_menu).find(remove_class).removeClass('on');
				$('.'+side_menu).find(add_class).eq(i).addClass('on');
			}
		});

		//스크롤 이동 시 주소 변경
		var change_target = $('.'+side_menu).find('li.item.on');
		var change_idx = change_target.find('li.on').index();
		var change_url = change_target.find('li.on a').attr('href');
		var parent_url = change_target.find('> a').attr('href');
		var local_url = location.href.split('/')[location.href.split('/').length-1];

		//스크롤 위치에 따른 브라우져 타이틀 및 주소 변경
		var browser_tit;
		if( change_idx !== -1 ){
			browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d4[change_idx].d4_nm;
			change_target.find('>a').attr('data-tit',(d3_on+1)+'.'+(change_idx+1)+'. '+browser_tit);
			if( local_url !== change_url ){ //한번만 실행
				$title.text(browser_tit+' | '+UXKM);
				history.replaceState(change_url, null, change_url);
			}
		}
		else{
			browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;
			change_target.find('>a').attr('data-tit',(d3_on+1)+'. '+browser_tit);
			if( local_url !== parent_url ){ //한번만 실행
				$title.text(browser_tit+' | '+UXKM);
				history.replaceState(parent_url, null, parent_url);
			}
		}

		//스크롤 높이가 sub content보다 작을 때 4뎁스 on클래스 제거
		if( sct < sub_offsetTop[0] ){
			$assetsLink_area.find(add_class).eq(0).removeClass('on');
			$('.'+side_menu).find(add_class).eq(0).removeClass('on');
			browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;
			change_target.find('>a').attr('data-tit',(d3_on+1)+'. '+browser_tit);
		}
	});

	//스크롤값이 0일때 3뎁스 .on에 data-tit
	if( $(window).scrollTop === 0 || $(window).scrollTop() < $('.'+sub_content).offset().top - $ukHeader.height() ){
		var browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;
		$('.'+side_menu).find('li.item.on >a').attr('data-tit',(d3_on+1)+'. '+browser_tit);
	}

	//common
	removeTabindex();	//remove tabindex
	focusControl();			//focus controll
}


//pc&mb class
function pc_mb_class(win_w){
	var sroll_state = false;
	//반응형 pc
	if( win_w > respon_size ){
		$html.addClass('pc').removeClass('mb');
		if( !sroll_state ){
			//$(window).trigger('scroll');
			//sroll_state = true;
		}
	}
	//반응형 mobile
	else if( win_w <= respon_size ){
		$html.addClass('mb').removeClass('pc');
		if( sroll_state ){
			//$(window).trigger('scroll');
			//sroll_state = false;
		}
	}
}


//header common
function hd_common(sct){
	//uk_header ---------------------------//
	if( sct > 10 ) $ukHeader.addClass('fixed');
	else $ukHeader.removeClass('fixed');

	//uk_header progress
	var docHeight = $(document).height() - window.innerHeight;
	var hd_proW = (sct/docHeight)*100;  //Math.ceil();
	$('.'+hd_progress).css('width',hd_proW+'%');
}


//#content remove tabindex
function removeTabindex(){
	$(document).find('#content').on('focusout', function(){
		$(this).removeAttr('tabindex');
	});
}


//focus 컨트롤
function focusControl(){
	$assetsLink_btn.on({
		keydown:function(e){
			if( !$(this).is('.active') ){
				if( e.keyCode == 9 && !e.shiftKey ){
					setTimeout(function(){
						$ukContainer.find('a').first().trigger('focus');
					}, 10);
				}
				if( e.keyCode == 9 && e.shiftKey ){
					setTimeout(function(){
						$search_btn.trigger('focus');
					}, 10);
				}
			}
		}
	});
	$ukContainer.find('a').first().on({
		keydown:function(e){
			if( e.keyCode == 9 && e.shiftKey ){
				setTimeout(function(){
					$assetsLink_btn.trigger('focus');
				}, 10);
			}
		}
	});
	$assetsLink_area.find('a').last().on({
		keydown:function(e){
			console.log('down');
			if( e.keyCode == 9 && !e.shiftKey){
				setTimeout(function(){
					$assetsLink_btn.trigger('focus').trigger('click');
				}, 10);
			}
		}
	});

	$search_btn.on({
		keydown:function(e){
			if( !$html.is('.'+hd_search_on) ){
				if (e.keyCode == 9 && !e.shiftKey){
					setTimeout(function(){
						$assetsLink_btn.trigger('focus');
					}, 10);
				}
			}
		}
	});
	$('.search_close').on({
		focus:function(){
			$(this).trigger('click');
		}
		/*
		keydown:function(e){
			if( e.keyCode == 9 && !e.shiftKey && $html.is('.'+hd_search_on) ){
				setTimeout(function(){
					$('.search_close').trigger('click');
				}, 10);
			}
		}
		*/
	});
}


//top_link, side_menu offset().top 컨트롤
function offsetTopControl(){
	if( !$html.is('.'+md_state) ){
		$('.'+top_link+' ul').css('top',$(window).scrollTop() + $ukHeader.height());
	}
	else{
		$('.'+side_menu).css('top',$(window).scrollTop() + $ukHeader.height());
	}
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
