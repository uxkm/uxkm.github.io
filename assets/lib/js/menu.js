
var basic_url = location.href;

var data = 'data'
var url_html =				'?'+data+'=Assets&HTML&';
var url_css =					'?'+data+'=Assets&CSS&';
var url_javascript =		'?'+data+'=Assets&JAVASCRIPT&';
var url_accessibility =	'?'+data+'=Assets&ACCESSIBILITY&';
var url_ncs =				'?'+data+'=Assets&NCS&';

var file = '/assets/';
var file_html = file+'html';
var file_css = file+'css';

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

					//섹션 콘텐츠 (Section Conetnt)
					{
						d3_nm:	'섹션 콘텐츠 (Section Conetnt)',
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
								d4_nm:	'000000000',
								d4_url:		url_html+'embedded&000000000',
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
								d4_nm:	'000000000',
								d4_url:		url_html+'edits&000000000',
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
								d4_nm:	'000000000',
								d4_url:		url_html+'table&000000000',
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
								d4_nm:	'000000000',
								d4_url:		url_html+'forms&000000000',
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
								d4_nm:	'000000000',
								d4_url:		url_html+'structure&000000000',
								html5:		false,
							},
						]
					},

					//컨텐츠 모델(Content models)
					{
						d3_nm:	'컨텐츠 모델(Content models)',
						d3_url:		url_html+'models',
						d3_file:		file_html+'/11-models/models.html',
						d4:[
							{
								d4_nm:	'000000000',
								d4_url:		url_html+'models&000000000',
								html5:		false,
							},
						]
					},

					//참조 사이트
					{
						d3_nm:	'참조 사이트',
						d3_url:		url_html+'bookmark',
						d3_file:		file_html+'/12-bookmark/bookmark.html',
						d4:[
							{
								d4_nm:	'000000000',
								d4_url:		url_html+'bookmark&000000000',
								html5:		false,
							},
						]
					},
				]
			},

			//CSS --------------------------------------------------//
			{
				d2_nm:	'CSS',
				d2_url:		url_css+'css',
				d3:[
					//CSS 시작하기
					{
						d3_nm:	'CSS 시작하기',
						d3_url:		url_css+'cssStart',
						d3_file:		file_css+'/01-cssStart/cssStart.html',
						d4:[
							{
								d4_nm:		'HTML이란?',
								d4_url:		url_css+'htmlStart#HTML',
								html5:	false,
							},
						]
					},

					//CSS 초급
					{
						d3_nm:	'CSS 초급',
						d3_url:		url_css+'cssBeginner',
						d3_file:		file_css+'/02-cssBeginner/cssBeginner.html'
					},

					//CSS 중급
					{
						d3_nm:	'CSS 중급',
						d3_url:		url_css+'cssMiddleclass',
						d3_file:		file_css+'/03-cssMiddleclass/cssMiddleclass.html'
					},

					//CSS 고급
					{
						d3_nm:	'CSS 고급',
						d3_url:		url_css+'cssAdvanced',
						d3_file:		file_css+'/04-cssAdvanced/cssAdvanced.html'
					},

					//UI/UX 구현
					{
						d3_nm:	'UI/UX 구현',
						d3_url:		url_css+'uiux',
						d3_file:		file_css+'/05-uiux/uiux.html'
					},

					//참조 사이트
					{
						d3_nm:	'참조 사이트',
						d3_url:		url_css+'bookmark',
						d3_file:		file_css+'/06-bookmark/bookmark.html'
					},
				]
			},

			//JAVASCRIPT ----------------------------------------//
			{
				d2_nm:	'JAVASCRIPT',
				d2_url:		url_javascript+'javascript',
			},

			//ACCESSIBILITY --------------------------------------//
			{
				d2_nm:	'ACCESSIBILITY',
				d2_url:		url_accessibility+'accessibility',
			},

			//NCS ---------------------------------------------------//
			{
				d2_nm:	'NCS',
				d2_url:		url_ncs+'ncs',
			},
		]
	},
	{
		d1_nm:	'Project GUIDE',
		d1_url:		'?'+data+'GUIDE',
	},
	{
		d1_nm:	'Web Trends',
		d1_url:		'?'+data+'Trends',
	}
];
//console.log( menu[0].d2[0].d3[0].d3_file );











