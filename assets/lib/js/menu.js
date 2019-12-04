
var basic_url = location.href;
var uk_link = 'uk_link';

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
				d2_url:		url_html+'htmlStart',
				d3:[
					//HTML 시작
					{
						d3_nm:	'HTML 시작',
						d3_url:		url_html+'htmlStart',
						d3_file:		file_html+'/01-htmlStart/htmlStart.html',
						d4:[
							{
								d4_nm:		'HTML이란?',
								d4_url:			url_html+'&htmlStart#html_start',
								html5:			false,
							},
							{
								d4_nm:		'HTML 기본구조',
								d4_url:			url_html+'&htmlStart#html_basic',
								html5:			false,
							},
							{
								d4_nm:		'HTML 요소',
								d4_url:			url_html+'&htmlStart#html_element',
								html5:			false,
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
								d4_nm:		'블록 레벨 요소',
								d4_url:		url_html+'htmlStart#block_element',
								html5:	false,
							},
							{
								d4_nm:		'대표적인 블록 요소 - div',
								d4_url:		url_html+'htmlStart#div_block',
								html5:	false,
							},
							{
								d4_nm:		'인라인 요소',
								d4_url:		url_html+'htmlStart#inline_element',
								html5:	false,
							},
							{
								d4_nm:		'대표적인 인라인 요소 - span',
								d4_url:		url_html+'htmlStart#span_inline',
								html5:	false,
							},
							{
								d4_nm:		'요소 중첩',
								d4_url:		url_html+'htmlStart#element_nesting',
								html5:	false,
							},
							{
								d4_nm:		'단일 요소 또는 빈 요소',
								d4_url:		url_html+'htmlStart#only_empty',
								html5:	false,
							},
						]
					},

					//섹션 콘텐츠 (Section Conetnt)
					{
						d3_nm:	'섹션 콘텐츠 (Section Conetnt)',
						d3_url:		url_html+'sections',
						d3_file:		file_html+'/03-sections/sections.html',
					},

					//콘텐츠 그룹화(Grouping content)
					{
						d3_nm:	'콘텐츠 그룹화(Grouping content)',
						d3_url:		url_html+'grouping',
						d3_file:		file_html+'/04-grouping/grouping.html',
					},

					//문자 컨텐츠(Text-level semantics)
					{
						d3_nm:	'문자 컨텐츠(Text-level semantics)',
						d3_url:		url_html+'textLevel',
						d3_file:		file_html+'/05-textLevel/textLevel.html',
					},

					//내장 컨텐츠(Embedded content)
					{
						d3_nm:	'내장 컨텐츠(Embedded content)',
						d3_url:		url_html+'embedded',
						d3_file:		file_html+'/06-embedded/embedded.html',
					},

					//수정(edits)
					{
						d3_nm:	'수정(edits)',
						d3_url:		url_html+'edits',
						d3_file:		file_html+'/07-edits/edits.html',
					},

					//표 데이터(Tabular data)
					{
						d3_nm:	'표 데이터(Tabular data)',
						d3_url:		url_html+'table',
						d3_file:		file_html+'/08-table/table.html',
					},

					//폼(forms)
					{
						d3_nm:	'폼(forms)',
						d3_url:		url_html+'forms',
						d3_file:		file_html+'/09-forms/forms.html',
					},

					//HTML 문서구조
					{
						d3_nm:	'HTML 문서구조',
						d3_url:		url_html+'structure',
						d3_file:		file_html+'/10-structure/structure.html',
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











