
var basic_url = location.href;

var data = 'data'
var url_html =				'?'+data+'=Assets&HTML&';
var url_css =					'?'+data+'=Assets&CSS&';
var url_javascript =		'?'+data+'=Assets&JAVASCRIPT&';
var url_accessibility =	'?'+data+'=Assets&ACCESSIBILITY&';
var url_ncs =				'?'+data+'=Assets&NCS&';

var file = '/assets/';
var file_html = file+'01-html';
var file_css = file+'02-css';
var file_javascript = file+'03-javascript';
var file_accessibility = file+'04-accessibility';
var file_ncs = file+'05-ncs';

var menu = [
	{
		d1_nm:	'UI/UX Assets',
		d1_url:		url_html+'htmlStart',
		d2:[
			//HTML ------------------------------------------------//
			{
				d2_nm:	'HTML',
				d2_url:		url_html+ 'htmlStart',
				d3:[
					//HTML 시작
					{
						d3_nm:	'HTML 시작',
						d3_url:		url_html+ 'htmlStart',
						d3_file:		file_html+ '/01-htmlStart/htmlStart.html',
						d4:[
							{
								d4_nm:	'HTML이란?',
								d4_url:		url_html+ 'htmlStart&html_start',
								html5:		false,
							},
							{
								d4_nm:	'HTML 기본구조',
								d4_url:		url_html+ 'htmlStart&html_basic',
								html5:		false,
							},
							{
								d4_nm:	'HTML 요소',
								d4_url:		url_html+ 'htmlStart&html_element',
								html5:		false,
							},
						]
					},

					//블록 레벨 요소 vs 인라인 요소
					{
						d3_nm:	'블록 레벨 요소 vs 인라인 요소',
						d3_url:		url_html+'blockInline',
						d3_file:		file_html+'/02-blockInline/blockInline.html',
						d4:[
							{
								d4_nm:	'블록 레벨 요소',
								d4_url:		url_html+'blockInline&block_element',
								html5:		false,
							},
							{
								d4_nm:		'대표적인 블록 요소 - div',
								d4_url:		url_html+'blockInline&div_block',
								html5:	false,
							},
							{
								d4_nm:	'인라인 요소',
								d4_url:		url_html+'blockInline&inline_element',
								html5:		false,
							},
							{
								d4_nm:	'대표적인 인라인 요소 - span',
								d4_url:		url_html+'blockInline&span_inline',
								html5:		false,
							},
							{
								d4_nm:	'요소 중첩',
								d4_url:		url_html+'blockInline&element_nesting',
								html5:		false,
							},
							{
								d4_nm:	'단일 요소 또는 빈 요소',
								d4_url:		url_html+'blockInline&only_empty',
								html5:		false,
							},
						]
					},

					//섹션 콘텐츠(Section Conetnt)
					{
						d3_nm:	'섹션 콘텐츠(Section Conetnt)',
						d3_url:		url_html+'sections',
						d3_file:		file_html+'/03-sections/sections.html',
						d4:[
							{
								d4_nm:	'header element',
								d4_url:		url_html+ 'sections&header_element',
								html5:		true,
							},
							{
								d4_nm:	'heading(h1,h2,h3,h4,h5,h6) element',
								d4_url:		url_html+ 'sections&heading_element',
								html5:		false,
							},
							{
								d4_nm:	'section element',
								d4_url:		url_html+ 'sections&section_element',
								html5:		true,
							},
							{
								d4_nm:	'nav element',
								d4_url:		url_html+ 'sections&nav_element',
								html5:		true,
							},
							{
								d4_nm:	'article element',
								d4_url:		url_html+ 'sections&article_element',
								html5:		true,
							},
							{
								d4_nm:	'footer element',
								d4_url:		url_html+ 'sections&footer_element',
								html5:		true,
							},
							{
								d4_nm:	'aside element',
								d4_url:		url_html+ 'sections&aside_element',
								html5:		true,
							},
							{
								d4_nm:	'hgroup element',
								d4_url:		url_html+ 'sections&hgroup_element',
								html5:		true,
							},
						]
					},

					//콘텐츠 그룹화(Grouping content)
					{
						d3_nm:	'콘텐츠 그룹화(Grouping content)',
						d3_url:		url_html+'grouping',
						d3_file:		file_html+'/04-grouping/grouping.html',
						d4:[
							{
								d4_nm:	'main element',
								d4_url:		url_html+'grouping&main_element',
								html5:		true,
							},
							{
								d4_nm:	'p element',
								d4_url:		url_html+'grouping&p_element',
								html5:		false,
							},
							{
								d4_nm:	'ol element',
								d4_url:		url_html+'grouping&ol_element',
								html5:		false,
							},
							{
								d4_nm:	'ul element',
								d4_url:		url_html+'grouping&ul_element',
								html5:		false,
							},
							{
								d4_nm:	'li element',
								d4_url:		url_html+'grouping&li_element',
								html5:		false,
							},
							{
								d4_nm:	'dl element',
								d4_url:		url_html+'grouping&dl_element',
								html5:		false,
							},
							{
								d4_nm:	'dt element',
								d4_url:		url_html+'grouping&dt_element',
								html5:		false,
							},
							{
								d4_nm:	'dd element',
								d4_url:		url_html+'grouping&dd_element',
								html5:		false,
							},
							{
								d4_nm:	'address element',
								d4_url:		url_html+'grouping&address_element',
								html5:		true,
							},
							{
								d4_nm:	'figure element',
								d4_url:		url_html+'grouping&figure_element',
								html5:		true,
							},
							{
								d4_nm:	'figcaption element',
								d4_url:		url_html+'grouping&figcaption_element',
								html5:		true,
							},
							{
								d4_nm:	'pre element',
								d4_url:		url_html+'grouping&pre_element',
								html5:		false,
							},
							{
								d4_nm:	'blockquote element',
								d4_url:		url_html+'grouping&blockquote_element',
								html5:		false,
							},
						]
					},

					//문자 컨텐츠(Text-level semantics)
					{
						d3_nm:	'문자 컨텐츠(Text-level semantics)',
						d3_url:		url_html+'textLevel',
						d3_file:		file_html+'/05-textLevel/textLevel.html',
						d4:[
							{
								d4_nm:	'a element',
								d4_url:		url_html+'textLevel&a_element',
								html5:		false,
							},
							{
								d4_nm:	'em element',
								d4_url:		url_html+'textLevel&em_element',
								html5:		false,
							},
							{
								d4_nm:	'i element',
								d4_url:		url_html+'textLevel&i_element',
								html5:		false,
							},
							{
								d4_nm:	'strong element',
								d4_url:		url_html+'textLevel&strong_element',
								html5:		false,
							},
							{
								d4_nm:	'b element',
								d4_url:		url_html+'textLevel&b_element',
								html5:		false,
							},
							{
								d4_nm:	'br element',
								d4_url:		url_html+'textLevel&br_element',
								html5:		false,
							},
							{
								d4_nm:	'small element',
								d4_url:		url_html+'textLevel&small_element',
								html5:		false,
							},
							{
								d4_nm:	's element',
								d4_url:		url_html+'textLevel&s_element',
								html5:		false,
							},
							{
								d4_nm:	'cite element',
								d4_url:		url_html+'textLevel&cite_element',
								html5:		false,
							},
							{
								d4_nm:	'sub element',
								d4_url:		url_html+'textLevel&sub_element',
								html5:		false,
							},
							{
								d4_nm:	'sup element',
								d4_url:		url_html+'textLevel&sup_element',
								html5:		false,
							},
							{
								d4_nm:	'mark element',
								d4_url:		url_html+'textLevel&mark_element',
								html5:		false,
							},
							{
								d4_nm:	'q element',
								d4_url:		url_html+'textLevel&q_element',
								html5:		false,
							},
							{
								d4_nm:	'code element',
								d4_url:		url_html+'textLevel&code_element',
								html5:		false,
							},
							{
								d4_nm:	'var element',
								d4_url:		url_html+'textLevel&000000000',
								html5:		false,
							},
							{
								d4_nm:	'abbr element',
								d4_url:		url_html+'textLevel&var_element',
								html5:		false,
							},
							{
								d4_nm:	'data element',
								d4_url:		url_html+'textLevel&abbr_element',
								html5:		false,
							},
							{
								d4_nm:	'time element',
								d4_url:		url_html+'textLevel&data_element',
								html5:		false,
							},
							{
								d4_nm:	'samp element',
								d4_url:		url_html+'textLevel&time_element',
								html5:		false,
							},
							{
								d4_nm:	'kbd element',
								d4_url:		url_html+'textLevel&samp_element',
								html5:		false,
							},
							{
								d4_nm:	'bdi element',
								d4_url:		url_html+'textLevel&kbd_element',
								html5:		false,
							},
							{
								d4_nm:	'bdo element',
								d4_url:		url_html+'textLevel&bdi_element',
								html5:		false,
							},
							{
								d4_nm:	'wbr element',
								d4_url:		url_html+'textLevel&wbr_element',
								html5:		false,
							},
							{
								d4_nm:	'ruby element',
								d4_url:		url_html+'textLevel&ruby_element',
								html5:		false,
							},
						]
					},

					//내장 컨텐츠(Embedded content)
					{
						d3_nm:	'내장 컨텐츠(Embedded content)',
						d3_url:		url_html+'embedded',
						d3_file:		file_html+'/06-embedded/embedded.html',
						d4:[
							{
								d4_nm:	'iframe element',
								d4_url:		url_html+'embedded&iframe_element',
								html5:		false,
							},
							{
								d4_nm:	'img element',
								d4_url:		url_html+'embedded&img_element',
								html5:		false,
							},
							{
								d4_nm:	'map element',
								d4_url:		url_html+'embedded&map_element',
								html5:		false,
							},
							{
								d4_nm:	'area element',
								d4_url:		url_html+'embedded&area_element',
								html5:		false,
							},
							{
								d4_nm:	'video element',
								d4_url:		url_html+'embedded&video_element',
								html5:		true
							},
							{
								d4_nm:	'audio element',
								d4_url:		url_html+'embedded&audio_element',
								html5:		true,
							},
							{
								d4_nm:	'track element',
								d4_url:		url_html+'embedded&track_element',
								html5:		true,
							},
							{
								d4_nm:	'picture element',
								d4_url:		url_html+'embedded&picture_element',
								html5:		true,
							},
							{
								d4_nm:	'source element',
								d4_url:		url_html+'embedded&source_element',
								html5:		true,
							},
							{
								d4_nm:	'svg element',
								d4_url:		url_html+'embedded&svg_element',
								html5:		false,
							},
							{
								d4_nm:	'embed element',
								d4_url:		url_html+'embedded&embed_element',
								html5:		false,
							},
							{
								d4_nm:	'object element',
								d4_url:		url_html+'embedded&object_element',
								html5:		false,
							},
							{
								d4_nm:	'param element',
								d4_url:		url_html+'embedded&param_element',
								html5:		false,
							},
						]
					},

					//수정(edits)
					{
						d3_nm:	'수정(edits)',
						d3_url:		url_html+'edits',
						d3_file:		file_html+'/07-edits/edits.html',
						d4:[
							{
								d4_nm:	'del(Deleted Text) element',
								d4_url:		url_html+'edits&del_element',
								html5:		false,
							},
							{
								d4_nm:	'ins(insert) element',
								d4_url:		url_html+'edits&ins_element',
								html5:		false,
							},
						]
					},

					//표 데이터(Tabular data)
					{
						d3_nm:	'표 데이터(Tabular data)',
						d3_url:		url_html+'table',
						d3_file:		file_html+'/08-table/table.html',
						d4:[
							{
								d4_nm:	'table element',
								d4_url:		url_html+'table&table_element',
								html5:		false,
							},
							{
								d4_nm:	'caption element',
								d4_url:		url_html+'table&caption_element',
								html5:		false,
							},
							{
								d4_nm:	'colgroup element',
								d4_url:		url_html+'table&colgroup_element',
								html5:		false,
							},
							{
								d4_nm:	'col element',
								d4_url:		url_html+'table&col_element',
								html5:		false,
							},
							{
								d4_nm:	'thead element',
								d4_url:		url_html+'table&thead_element',
								html5:		false,
							},
							{
								d4_nm:	'tbody element',
								d4_url:		url_html+'table&tbody_element',
								html5:		false,
							},
							{
								d4_nm:	'tfoot element',
								d4_url:		url_html+'table&tfoot_element',
								html5:		false,
							},
							{
								d4_nm:	'tr element',
								d4_url:		url_html+'table&tr_element',
								html5:		false,
							},
							{
								d4_nm:	'th element',
								d4_url:		url_html+'table&th_element',
								html5:		false,
							},
							{
								d4_nm:	'td element',
								d4_url:		url_html+'table&td_element',
								html5:		false,
							},
						]
					},

					//폼(forms)
					{
						d3_nm:	'폼(forms)',
						d3_url:		url_html+'forms',
						d3_file:		file_html+'/09-forms/forms.html',
						d4:[
							{
								d4_nm:	'form element',
								d4_url:		url_html+'forms&form_element',
								html5:		false,
							},
							{
								d4_nm:	'label element',
								d4_url:		url_html+'forms&label_element',
								html5:		false,
							},
							{
								d4_nm:	'input element',
								d4_url:		url_html+'forms&input_element',
								html5:		false,
							},
							{
								d4_nm:	'button element',
								d4_url:		url_html+'forms&button_element',
								html5:		false,
							},
							{
								d4_nm:	'select element',
								d4_url:		url_html+'forms&select_element',
								html5:		false,
							},
							{
								d4_nm:	'optgroup element',
								d4_url:		url_html+'forms&optgroup_element',
								html5:		false,
							},
							{
								d4_nm:	'option element',
								d4_url:		url_html+'forms&option_element',
								html5:		false,
							},
							{
								d4_nm:	'datalist element',
								d4_url:		url_html+'forms&datalist_element',
								html5:		false,
							},
							{
								d4_nm:	'textarea element',
								d4_url:		url_html+'forms&textarea_element',
								html5:		false,
							},
							{
								d4_nm:	'output element',
								d4_url:		url_html+'forms&output_element',
								html5:		false,
							},
							{
								d4_nm:	'progress element',
								d4_url:		url_html+'forms&progress_element',
								html5:		false,
							},
							{
								d4_nm:	'meter element',
								d4_url:		url_html+'forms&meter_element',
								html5:		false,
							},
							{
								d4_nm:	'fieldset element',
								d4_url:		url_html+'forms&fieldset_element',
								html5:		false,
							},
							{
								d4_nm:	'legend element',
								d4_url:		url_html+'forms&legend_element',
								html5:		false,
							},
						]
					},

					//HTML 문서구조
					{
						d3_nm:	'HTML 문서구조',
						d3_url:		url_html+'structure',
						d3_file:		file_html+'/10-structure/structure.html',
						d4:[
							{
								d4_nm:	'HTML4에서의 문서 구조',
								d4_url:		url_html+'structure&html4_document',
								html5:		false,
							},
							{
								d4_nm:	'HTML5에서의 문서 구조',
								d4_url:		url_html+'structure&html5_document',
								html5:		false,
							},
						]
					},

					//컨텐츠 모델(Content models)
					{
						d3_nm:	'컨텐츠 모델(Content models)',
						d3_url:		url_html+'models',
						d3_file:		file_html+'/11-models/models.html',
					},

					//참조 사이트
					{
						d3_nm:	'참조 사이트',
						d3_url:		url_html+'bookmark',
						d3_file:		file_html+'/12-bookmark/bookmark.html',
					},
				]
			},

			//CSS --------------------------------------------------//
			{
				d2_nm:	'CSS',
				d2_url:		url_css+'cssStart',
				d3:[
					//CSS 시작하기
					{
						d3_nm:	'CSS 시작',
						d3_url:		url_css+'cssStart',
						d3_file:		file_css+'/01-cssStart/cssStart.html',
						d4:[
							{
								d4_nm:	'CSS란?',
								d4_url:		url_css+'cssStart&css_intro',
								html5:		false,
							},
							{
								d4_nm:	'CSS를 사용하는 이유?',
								d4_url:		url_css+'cssStart&css_reason',
								html5:		false,
							},
							{
								d4_nm:	'CSS의 발전',
								d4_url:		url_css+'cssStart&css_history',
								html5:		false,
							},
							{
								d4_nm:	'CSS 모듈과 표준화 과정',
								d4_url:		url_css+'cssStart&css_modules',
								html5:		false,
							},
							{
								d4_nm:	'CSS의 문법',
								d4_url:		url_css+'cssStart&css_syntax',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선언방식',
								d4_url:		url_css+'cssStart&css_apply',
								html5:		false,
							},
							{
								d4_nm:	'CSS 상속과 캐스케이딩',
								d4_url:		url_css+'cssStart&css_cascading',
								html5:		false,
							},
						]
					},

					//CSS 초급
					{
						d3_nm:	'CSS 초급',
						d3_url:		url_css+'cssBeginner',
						d3_file:		file_css+'/02-cssBeginner/cssBeginner.html',
						d4:[
							{
								d4_nm:	'CSS 단위',
								d4_url:		url_css+'cssBeginner&css_units',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선택자 level 1,2',
								d4_url:		url_css+'cssBeginner&css_selectors_level1',
								html5:		false,
							},
							{
								d4_nm:	'Color 속성',
								d4_url:		url_css+'cssBeginner&css_color',
								html5:		false,
							},
							{
								d4_nm:	'Font 속성',
								d4_url:		url_css+'cssBeginner&css_font',
								html5:		false,
							},
							{
								d4_nm:	'Text 속성',
								d4_url:		url_css+'cssBeginner&css_text',
								html5:		false,
							},
							{
								d4_nm:	'Background 속성',
								d4_url:		url_css+'cssBeginner&css_background',
								html5:		false,
							},
							{
								d4_nm:	'List 속성',
								d4_url:		url_css+'cssBeginner&css_list',
								html5:		false,
							},
							{
								d4_nm:	'Table 속성',
								d4_url:		url_css+'cssBeginner&css_table',
								html5:		false,
							},
							{
								d4_nm:	'박스 모델 속성',
								d4_url:		url_css+'cssBeginner&css_boxmodel',
								html5:		false,
							},
							{
								d4_nm:	'시각적인 속성',
								d4_url:		url_css+'cssBeginner&css_effects',
								html5:		false,
							},
							{
								d4_nm:	'위치 속성',
								d4_url:		url_css+'cssBeginner&css_formatting',
								html5:		false,
							},
							{
								d4_nm:	'사용자 인터페이스 속성',
								d4_url:		url_css+'cssBeginner&css_interface',
								html5:		false,
							},
						]
					},

					//CSS 중급
					{
						d3_nm:	'CSS 중급',
						d3_url:		url_css+'cssMiddleclass',
						d3_file:		file_css+'/03-cssMiddleclass/cssMiddleclass.html',
						d4:[
							{
								d4_nm:	'CSS 선택자 level 3',
								d4_url:		url_css+'cssMiddleclass&css_selectors_level3',
								html5:		false,
							},
							{
								d4_nm:	'가상 요소',
								d4_url:		url_css+'cssMiddleclass&css_content',
								html5:		false,
							},
							{
								d4_nm:	'CSS 카운터',
								d4_url:		url_css+'cssMiddleclass&css_counter',
								html5:		false,
							},
							{
								d4_nm:	'접두어',
								d4_url:		url_css+'cssMiddleclass&css_vendor',
								html5:		false,
							},
							{
								d4_nm:	'IR 기법',
								d4_url:		url_css+'cssMiddleclass&css_ir',
								html5:		false,
							},
							{
								d4_nm:	'CSS3 모듈',
								d4_url:		url_css+'cssMiddleclass&css_module3',
								html5:		false,
							},
							{
								d4_nm:	'@규칙(At-Rule)',
								d4_url:		url_css+'cssMiddleclass&css_atrule',
								html5:		false,
							},
							{
								d4_nm:	'CSS 속성 선언순서',
								d4_url:		url_css+'cssMiddleclass&css_attr_rule',
								html5:		false,
							},
						]
					},

					//CSS 고급
					{
						d3_nm:	'CSS 고급',
						d3_url:		url_css+'cssAdvanced',
						d3_file:		file_css+'/04-cssAdvanced/cssAdvanced.html',
						d4:[
							{
								d4_nm:	'미디어 쿼리',
								d4_url:		url_css+'cssAdvanced&css_mediaquery',
								html5:		false,
							},
							{
								d4_nm:	'Print',
								d4_url:		url_css+'cssAdvanced&css_print',
								html5:		false,
							},
							{
								d4_nm:	'Transform',
								d4_url:		url_css+'cssAdvanced&css_transform',
								html5:		false,
							},
							{
								d4_nm:	'Transition',
								d4_url:		url_css+'cssAdvanced&css_transition',
								html5:		false,
							},
							{
								d4_nm:	'Animation',
								d4_url:		url_css+'cssAdvanced&css_animation',
								html5:		false,
							},
							{
								d4_nm:	'그리드 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_grid',
								html5:		false,
							},
							{
								d4_nm:	'플렉서블 박스 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_flexible',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선택자 level 4',
								d4_url:		url_css+'cssAdvanced&css_selectors_level4',
								html5:		false,
							},
						]
					},

					//UI/UX 구현
					{
						d3_nm:	'UI/UX 구현',
						d3_url:		url_css+'uiux',
						d3_file:		file_css+'/05-uiux/uiux.html',
					},

					//참조 사이트
					{
						d3_nm:	'참조 사이트',
						d3_url:		url_css+'bookmark',
						d3_file:		file_css+'/06-bookmark/bookmark.html',
					},
				]
			},

			//JAVASCRIPT ----------------------------------------//
			{
				d2_nm:	'JAVASCRIPT',
				//d2_url:		url_javascript+'javascript',
				d2_url:		'#',
			},

			//ACCESSIBILITY --------------------------------------//
			{
				d2_nm:	'ACCESSIBILITY',
				//d2_url:		url_accessibility+'accessibility',
				d2_url:		'#',
			},

			//NCS ---------------------------------------------------//
			{
				d2_nm:	'NCS',
				//d2_url:		url_ncs+'ncs',
				d2_url:		'#',
			},
		]
	},
	{
		d1_nm:	'Project GUIDE',
		d1_url:		'?'+data+'=GUIDE',
		//d1_url:		'#',
		d1_tile:		file+ '/project_guide.html',
	},
	{
		d1_nm:	'Web Trends',
		d1_url:		'?'+data+'=Trends',
		//d1_url:		'#',
		d1_tile:		file+ '/web_trends.html',
	}
];
//console.log( menu[0].d2[0].d3[0].d3_file );











