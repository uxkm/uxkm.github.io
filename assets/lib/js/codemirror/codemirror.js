function qsa(sel){
	return Array.apply(null, document.querySelectorAll(sel));
}
window.onload = function(){};
qsa(".uk_editor").forEach(function(e){
	//타켓 class
	var wrapArr = ['code_wrap', 'result_wrap', 'btn_wrap', 'info_wrap'];
	var btnArr = ['Reset', 'Download', 'Result', 'Info'/*, 'InfoExit'*/];
	var browserBtnArr = [
		['minimize', '최소화'],
		['exitMinimize', '이전 크기로 복원'],
		['fixed', '브라우저 전체화면'],
		['exitFixed', '이전 크기로 복원'],
		['fullscreen', '모니터 전체화면'],
		['exitFullscreen', '이전 크기로 복원'],
		['closing', '닫기']
	];
	var infoArr = ['edite_info', 'browser_info'];
	var info_txtArr = [
		[
			'초기 코드로 되돌립니다.',
			'코드를 html 파일로 다운로드할 수 있습니다.',
			'코드의 결과물을 확인할 수 있으며, 우측 Result Area의 모든 창모드를 기본으로 되돌립니다.'
		],
		[
			'Result Area를 최소화 합니다.',
			'Result Area를 브라우저 기준 전체 화면으로 확대합니다.',
			'Result Area를 모니터 기준 전체 화면으로 확대합니다.',
			'Result Area를 닫습니다. Result button을 클릭하여 기본 모드로 되돌릴 수 있습니다.',
		]
	];
	/*
	var info_editorArr = [
		{
			'tit':btnArr[0],
			'con':'초기 코드로 되돌립니다.',
		},
		{
			'tit':btnArr[1],
			'con':'코드를 html 파일로 다운로드할 수 있습니다.',
		},
		{
			'tit':btnArr[2],
			'con':'수정 또는 테스트 한 코드의 결과물은 확일할 수 있습니다. 또한 우측 브라우져의 모든 창모드를 기본으로 되돌립니다.',
		}
	];
	var info_browserArr = [
		{
			'tit':browserBtnArr[0][1],
			'con':'Result box를 최소화 합니다.',
		},
		{
			'tit':browserBtnArr[1][1],
			'con':'Result box를 브라우져 기준 전체화면으로 확대합니다.',
		},
		{
			'tit':browserBtnArr[2][1],
			'con':'Result box를 모니터 기준 전체화면으로 확대합니다.',
		},
		{
			'tit':browserBtnArr[3][1],
			'con':'Result box를 닫습니다. Result button을 클릭하여 기본 모드로 되돌릴 수 있습니다.',
		}
	];
	*/
	var title_txt;
	var editor_info = 'editor_info';
	var browser_full = 'browser_full';
	var browser_hide = 'browser_hide';
	var browser_mini = 'browser_mini';
	var browser_fixed = 'browser_fixed';
	e.classList.add(device_check);

	//타켓 정의 및 reset_btn 생성
	var rs_wrap = document.createElement('div');
	e.appendChild(rs_wrap).classList.add(wrapArr[1]);
	var bt_wrap = document.createElement('div');
	e.appendChild(bt_wrap).classList.add(wrapArr[2]);
	var if_wrap = document.createElement('div');
	e.appendChild(if_wrap).classList.add(wrapArr[3]);
	for( i=0; i<e.children.length; i++ ){
		if( e.children[i].className === wrapArr[0] ) var el_codeWrap = e.children[i];
		if( e.children[i].className === wrapArr[1] ) var el_resultWrap = e.children[i];
		if( e.children[i].className === wrapArr[2] ) var el_btnWrap = e.children[i];
		if( e.children[i].className === wrapArr[3] ) var el_infoWrap = e.children[i];
	}

	//코드미러 적용
	var el_editor = el_codeWrap.firstElementChild;
	var beforeVal = el_editor.value;
	var code_editor = CodeMirror.fromTextArea(el_editor, {
		mode: e.getAttribute('data-mode'),
		theme: e.getAttribute('data-theme'),
		lineNumbers: true,
		styleActiveLine: true,
		//tabSize: 4,							//탭키 간격
		indentWithTabs: true,
		scrollbarStyle: "simple",		//스크롤바 스타일
		//lineWrapping: true,			//가로 스크롤바 숨김, 너비에 맞게 줄바꿈.
		//keyMap: "sublime",			//괄호강조
		//matchBrackets: true,			//괄호강조
		highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true}, // 같은단어강조
	});
	code_editor.on('change', function(){
		code_editor.save();
	});

	//버튼 생성 및 정의
	buttonSet();
	function buttonSet(){
		for( i=0; i<btnArr.length; i++ ){
			var addBtn = document.createElement('button');
			addBtn.setAttribute('type','button');
			addBtn.classList.add('fas');
			addBtn.classList.add('edit_btn');
			addBtn.classList.add(btnArr[i]+'_btn');
			el_btnWrap.appendChild(addBtn);
			var edit_btn = el_btnWrap.children[i];
			var btnTxt = document.createElement('i');
			btnTxt.innerHTML = btnArr[i];
			edit_btn.appendChild(btnTxt);

			//reset 버튼
			if( i === 0 ){
				edit_btn.addEventListener('click', function(){
					code_editor.setValue(beforeVal);	//에디터 리셋
					setTimeout(resultApp, 100);
					return false;
				});
			}
			//download 버튼
			else if( i === 1 ){
				if( browser_name === 'ie' || browser_name === 'edge' || browser_name === 'safari' || device_check === 'device' ) edit_btn.style.display = 'none';
				edit_btn.addEventListener('click', htmlDown);
			}
			//result 버튼
			else if( i === 2 ){
				edit_btn.addEventListener('click', function(){
					e.classList.remove(browser_hide);
					e.classList.remove(browser_mini);
					e.classList.remove(browser_fixed);
					resultApp();
				});
			}
			//info 버튼
			else if( i === 3 ){
				if( device_check === 'device' ) edit_btn.style.display = 'none';
				edit_btn.addEventListener('click', function(){
					e.classList.add(editor_info);
				});
			}
		}
	}

	//result button
	resultApp();
	function resultApp(){
		el_resultWrap.innerHTML = '';
		var code_value = el_editor.value;

		if(typeof(code_value) == "string" && code_value.length > 0) {
			//iframe 생성 및 코드 적용
			var ifr = document.createElement("iframe");
			ifr.setAttribute('frameborder','0');
			el_resultWrap.appendChild(ifr);
			var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
			ifrw.document.open();
			ifrw.document.write(code_value);
			ifrw.document.close();

			browserTitle();
			browserBtn();
			return false;
		}
	}

	//info wrap
	editorInfo();
	function editorInfo(){
		el_infoWrap.addEventListener('click', function(){
			e.classList.remove(editor_info);
		});

		el_infoWrap.setAttribute('data-left','Editor Box');
		el_infoWrap.setAttribute('data-right','Result Area');
		el_infoWrap.classList.add(browser_name);

		for( i=0; i<infoArr.length; i++){
			var info_ul = document.createElement('ul');
			info_ul.classList.add(infoArr[i]);
			el_infoWrap.appendChild(info_ul);

			for( j=0; j<info_txtArr[i].length; j++ ){
				var info_li = document.createElement('li');
				var if_wrap = document.createElement('div');
				var info_t = document.createElement('strong');
				var info_i = document.createElement('i');
				info_i.innerHTML = info_txtArr[i][j];

				if( i === 0 ){
					info_li.classList.add('info_'+btnArr[j]);
					info_t.innerHTML = btnArr[j];
				}
				else if( i === 1 ){
					var target_j = 0;
					if( j !== 0 ) target_j = j * 2;
					info_li.classList.add('info_'+browserBtnArr[target_j][0]);
					info_t.innerHTML = browserBtnArr[target_j][1];
				}

				if_wrap.appendChild(info_t);
				if_wrap.appendChild(info_i);
				info_li.appendChild(if_wrap);
				el_infoWrap.children[i].appendChild(info_li);
			}
		}

		var end_txt_p = document.createElement('p');
		end_txt_p.classList.add('info_end');
		end_txt_p.innerHTML = '클릭 시 설명 창이 닫힙니다.';
		el_infoWrap.appendChild(end_txt_p);
	}

	//browser title
	function browserTitle(){
		var el_bTitle;
		var browserTitle = 'browserTitle';
		title_txt = el_resultWrap.firstElementChild.contentWindow.document.title;
		var append_title = document.createElement('p');
		var append_icon = document.createElement('i');
		el_resultWrap.appendChild(append_title).classList.add(browserTitle);
		for( i=0; i<el_resultWrap.children.length; i++ ){
			if( el_resultWrap.children[i].className === browserTitle ) el_bTitle = el_resultWrap.children[i];
		}
		el_bTitle.classList.add(device_check);
		el_bTitle.setAttribute('data-tit',title_txt);
		var title_txtNode = document.createTextNode(title_txt);
		el_bTitle.appendChild(append_icon);
		el_bTitle.appendChild(title_txtNode);
		el_bTitle.firstElementChild.classList.add('fas', 'fa-globe-asia');

		//브라우저 로고 설정
		el_bTitle.classList.add(browser_name);

		//클릭시
		el_bTitle.addEventListener('click', exitMinimize);

		//favicon
		var favicon_target = el_resultWrap.firstElementChild.contentWindow.document.head.children;
		for( i=0; i<favicon_target.length; i++ ){
			if( favicon_target[i].getAttribute('rel') === 'icon' || favicon_target[i].getAttribute('rel') === 'shortcut icon' ){
				//favicon_target[i-1].remove();
				var favicon = 'favicon';
				el_bTitle.classList.add(favicon);

				var favicon_url = favicon_target[i].getAttribute('href');
				var favicon_add = document.createElement('span');
				favicon_add.classList.add('i_'+favicon, 'fas');
				if( favicon_url.indexOf('.ico') !== -1 ) favicon_add.style.zIndex = '9';

				var favicon_child = document.createElement('span');
				favicon_child.innerHTML = favicon;
				favicon_child.style.backgroundImage = 'url('+favicon_url+')';
				favicon_add.appendChild(favicon_child);
				el_bTitle.appendChild(favicon_add);
			}
		}
	}

	//browser button
	function browserBtn(){
		var el_browserBtn;
		var browserBtn = 'browserBtn';
		var createBwBtn = document.createElement("div");
		el_resultWrap.appendChild(createBwBtn).classList.add(browserBtn);
		el_resultWrap.classList.add(browser_name);
		for( i=0; i<el_resultWrap.children.length; i++ ){
			if( el_resultWrap.children[i].className === browserBtn ) el_browserBtn = el_resultWrap.children[i];
		}
		for( i=0; i<browserBtnArr.length; i++ ){
			var bwBtn = document.createElement("button");
			bwBtn.innerHTML = browserBtnArr[i][0];
			bwBtn.setAttribute('type','button');
			bwBtn.setAttribute('title',browserBtnArr[i][1]);
			bwBtn.classList.add(browserBtnArr[i][0]+'_btn');

			el_browserBtn.appendChild(bwBtn);
			var el_bwBtn = el_browserBtn.children[i];

			//minimize
			if( i === 0 ){
				el_bwBtn.addEventListener('click', function(){
					exitFullscreen();
					e.classList.add(browser_mini);
					e.classList.remove(browser_full);
					e.classList.remove(browser_fixed);
				});
			}
			//exitMinimize
			else if( i === 1 ){
				el_bwBtn.addEventListener('click', exitMinimize);
			}

			//fixed
			else if( i === 2 ){
				if( device_check === 'device' ) el_bwBtn.style.display = 'none';
				el_bwBtn.addEventListener('click', function(){
					exitFullscreen();
					e.classList.add(browser_fixed);
					e.classList.remove(browser_mini, browser_full);
				});
			}
			//exitFixed
			else if( i === 3 ){
				el_bwBtn.addEventListener('click', function(){
					e.classList.remove(browser_fixed);
				});
			}

			//fullscreen
			else if( i === 4 ){
				el_bwBtn.addEventListener('click', function(){
					e.classList.add(browser_full);
					e.classList.remove(browser_mini, browser_fixed);
					el_resultWrap.requestFullscreen();
				});
			}
			//exitFullscreen
			else if( i === 5 ){
				el_bwBtn.addEventListener('click', exitFullscreen);
			}

			//closing
			else if( i === 6 ){
				el_bwBtn.addEventListener('click', function(){
					exitFullscreen();
					e.classList.add(browser_hide);
					e.classList.remove(browser_mini, browser_full, browser_fixed);
				});
			}
		}
	}
	function exitMinimize(){
		e.classList.remove(browser_mini);
	}
	function exitFullscreen(){
		if( e.classList.contains(browser_full) ){
			e.classList.remove(browser_full);
			document.exitFullscreen();
		}
	}

	//browser mode
	browserMode();
	function browserMode(){
		var browser_mode = e.getAttribute('data-browser');
		if( browser_mode === 'mini' ) e.classList.add(browser_mini);
		else if( browser_mode === 'hidden' ) e.classList.add(browser_hide);
	}

	//download btn
	function htmlDown(){
		if( browser_name === 'ie' || browser_name === 'edge' ){
			alert('파일 다운로드는 크롬, 파이어폭스, 오페라, 사파리 등 상위 브라우져에서 가능합니다.');
		}
		else{
			var elHtml = el_editor.value;
			var link = document.createElement('a');
			link.setAttribute('download', title_txt + '.html');
			link.setAttribute('href', 'data:application/text; charset=utf-8,' + encodeURIComponent(elHtml));
			link.click();
		}
		return false;
	}
});