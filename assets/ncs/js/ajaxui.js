(function ($) { 
	$(document).ready(function () {

		var $doc = $(document),
			$win = $(window),
			$html = $('html'),
			$body = $('body'),
			responSize = 1024,
			$header = $('.header'),
			$logo = $header.find('h1 a'),
			$container = $('.container'),
			$page_action = $('.page_action'),
			$navi = $('.nav'),
			$mb_navBtn = $header.find('.nav_open'),
			$nav = $page_action.find('li'),
			cBefore = 'cBefore',
			colorArr = [
			'#1a2432',
			'#444',
			'#ff9000',
			'#f16529',
			'#0f509a',
			'#f8db3d',
			'#4e5a92',
			'#00986b',
			'#809CC9',
			'#ff0066',
			'#1d365d',
			'#B82934',
			],
			ofsArr = [],
			pageArr = [],
			aniSpeed = 100,
			loadingTime = 0,
			loading_each = 50,
			headerOffTop = $header.offset().top,
			navOffTop = $header.offset().top,
			isFixed = false
			;

		//dot 생성
		$nav.parent().after('<div class="dot"></div>');
		var $dot = $('.dot');
		var $loading = $dot.find('.loading');

		//nav 각각의 링크를 배열에 담기
		$nav.each(function(i, e){
			var urlData = $(e).find('a').attr('href');
			pageArr.push(urlData);
		});

		//새로고침시 새로고침 전페이지 로드
		$(window).ready(function(){
			var p_url = location.href;
			var p_urlPage = p_url.split('#')[1];

			//파라미터 주소가 있을 경우
			$.each(pageArr, function(i, e){
				if( e.split('.')[0] == p_urlPage ) pageRefresh(pageArr[i], i);
			});

			//파라미터 주소가 없을 경우
			if( p_urlPage == undefined || p_urlPage == '' ) pageRefresh(pageArr[0], 0);
		});

		//새로고침시 함수
		function pageRefresh(target, idx){
			$nav.eq(idx).addClass('on');
			pageAjax(target);
		}

		//page ajax함수
		function pageAjax(target){
			$.get(target, function(data){
				$container.append(data);
			});
		}

		//도트 위치 설정 및 반응형
		$(window).on('load', function(){
			$header.addClass('dot_visible');
			$(window).resize(function(){
				var win_w = $(window).width();

				//pc
				if( win_w > responSize - 17 ){
					$body.addClass('pc').removeClass('mb');
					aniSpeed = 0;		//도트 확장 및 축소 시간

					$page_action.removeClass('on').removeAttr('style');
					$mb_navBtn.removeClass('on');

					//도트 위치 설정
					var on_idx = $nav.siblings('li.on').index();
					ofsArr = [];
					$nav.each(function(i, e){
						var ofsLeft = Math.ceil($(e).offset().left) + $(e).width()/2;
						ofsArr.push(ofsLeft);
					});
					if( !$dot.is('.'+cBefore) ){
						$dot.css({'left': ofsArr[on_idx], 'backgroundColor': colorArr[on_idx], 'transition-duration': aniSpeed+'ms'});
					}
				}

				//mobile
				else {
					$body.addClass('mb').removeClass('pc');
					aniSpeed = 0;		//도트 확장 및 축소 시간

					//도트 위치 초기화
					$dot.removeAttr('style');
				}
				$header.css({'backgroundColor': colorArr[on_idx], 'transition-duration': aniSpeed+'ms'});

			}).trigger('resize');
			$('h1 strong').text($('.nav ul li.on a').text());
		});

		//클릭시 도트 애니 및 컨텐츠 전환
		$nav.on('click', function(){
			if( !$(this).is('.on') ){
				var on_idx = $(this).siblings('li.on').index();
				var idx = $(this).index();
				var page_txt = $(this).text();
				var html = $(this).find('a').attr('href');

				if( $body.is('.pc') ){
					$dot.removeAttr('style').addClass(cBefore).css({'backgorundColor':colorArr[on_idx], 'transition-duration': aniSpeed+'ms'})
					.animate({'backgroundColor':colorArr[idx]}, aniSpeed/3);
					//$loading.addClass('on');
				}
				else {
					$dot.fadeIn(200);
					//$loading.addClass('on');
				}
				$header.css({'backgorundColor':colorArr[on_idx], 'transition-duration': aniSpeed+'ms'}).animate({'backgroundColor':colorArr[idx]}, aniSpeed/3);

				//화면 전환
				var beforeDel = setInterval(function(){
					$nav.removeClass('on').eq(idx).addClass('on');
					if( $body.is('.pc') ) $dot.removeClass(cBefore).css('left',ofsArr[idx]);
					if( $body.is('.mb') ) $dot.fadeOut(200);
					clearInterval(beforeDel);
				} , aniSpeed + loadingTime);

				//컨텐츠 ajax
				var contentAjax = setInterval(function(){
					$container.empty();
					pageAjax(html);
					var url = location.href.split('#')[0];
					window.location.replace( url+'#'+page_txt );
					clearInterval(contentAjax);
				}, aniSpeed);

				$('h1 strong').text($(this).text());
			}
			return false;
		});


		//모바일 네비 오픈
		$mb_navBtn.click(function(){
			$(this).toggleClass('on')
			if( !$page_action.is('.on') ){
				$page_action.fadeIn(200).addClass('on');
			}else{
				$page_action.fadeOut(200).removeClass('on');
			}
		});
		
		/* ui style */
		function scFix() {
			if ( $win.scrollTop() <= navOffTop ) {
				if ( !isFixed ) {
					isFixed = true;
					$header.removeClass('affix');
				}
			} else if ( isFixed ) {
				isFixed = false;
				$header.addClass('affix');
			}
		}
		$win.on('scroll', scFix);
		scFix();

	});
	$('.txt').html(function(i, html) {
		var chars = $.trim(html).split("");
		return '<span>' + chars.join('</span><span>') + '</span>';
	});

	$('[target="_blank"]').attr('title','새창열림');
})(jQuery);