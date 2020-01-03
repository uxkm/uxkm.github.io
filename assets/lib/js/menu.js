
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
var file_js = file+'03-javascript';
var file_acc = file+'04-accessibility';
var file_ncs = file+'05-ncs';

var menu = [
	{
		d1_nm:	'UI/UX Assets',
		d1_url:		url_html+'htmlStart&html_start',
		d2:[
			//HTML ------------------------------------------------//
			{
				d2_nm:	'HTML',
				d2_url:		url_html+ 'htmlStart&html_start',
				d2_info:	file_html+ '/info.html',
				d3:[
					//HTML 시작
					{
						d3_nm:	'HTML 시작',
						d3_url:		url_html+ 'htmlStart&html_start',
						d3_file:		file_html+ '/01-htmlStart/',
						d3_note:	false,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	'HTML이란?',
								d4_url:		url_html+ 'htmlStart&html_start',
								d4_file:		file_html+ '/01-htmlStart/01-html_start.html',
								html5:		false,
							},
							{
								d4_nm:	'HTML 기본구조',
								d4_url:		url_html+ 'htmlStart&html_basic',
								d4_file:		file_html+ '/01-htmlStart/02-html_basic.html',
								html5:		false,
							},
							{
								d4_nm:	'HTML 요소',
								d4_url:		url_html+ 'htmlStart&html_element',
								d4_file:		file_html+ '/01-htmlStart/03-html_element.html',
								html5:		false,
							},
						]
					},

					//블록 레벨 요소 vs 인라인 요소
					{
						d3_nm:	'블록 레벨 요소 vs 인라인 요소',
						d3_url:		url_html+'blockInline&block_element',
						d3_file:		file_html+'/02-blockInline/',
						d3_note:	true,
						d3_refer:	false,
						d4:[
							{
								d4_nm:	'블록 레벨 요소',
								d4_url:		url_html+'blockInline&block_element',
								d4_file:		file_html+'/02-blockInline/01-block_element.html',
								html5:		false,
							},
							{
								d4_nm:		'대표적인 블록 요소 - div',
								d4_url:		url_html+'blockInline&div_block',
								d4_file:		file_html+'/02-blockInline/02-div_block.html',
								html5:	false,
							},
							{
								d4_nm:	'인라인 요소',
								d4_url:		url_html+'blockInline&inline_element',
								d4_file:		file_html+'/02-blockInline/03-inline_element.html',
								html5:		false,
							},
							{
								d4_nm:	'대표적인 인라인 요소 - span',
								d4_url:		url_html+'blockInline&span_inline',
								d4_file:		file_html+'/02-blockInline/04-span_inline.html',
								html5:		false,
							},
							{
								d4_nm:	'요소 중첩',
								d4_url:		url_html+'blockInline&element_nesting',
								d4_file:		file_html+'/02-blockInline/05-element_nesting.html',
								html5:		false,
							},
							{
								d4_nm:	'단일 요소 또는 빈 요소',
								d4_url:		url_html+'blockInline&only_empty',
								d4_file:		file_html+'/02-blockInline/06-only_empty.html',
								html5:		false,
							},
						]
					},

					//섹션 콘텐츠(Section Conetnt)
					{
						d3_nm:	'섹션 콘텐츠(Section Conetnt)',
						d3_url:		url_html+ 'sections&header_element',
						d3_file:		file_html+'/03-sections/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	'header element',
								d4_url:		url_html+ 'sections&header_element',
								d4_file:		file_html+'/03-sections/01-header_element.html',
								html5:		true,
							},
							{
								d4_nm:	'heading(h1,h2,h3,h4,h5,h6) element',
								d4_url:		url_html+ 'sections&heading_element',
								d4_file:		file_html+'/03-sections/02-heading_element.html',
								html5:		false,
							},
							{
								d4_nm:	'section element',
								d4_url:		url_html+ 'sections&section_element',
								d4_file:		file_html+'/03-sections/03-section_element.html',
								html5:		true,
							},
							{
								d4_nm:	'nav element',
								d4_url:		url_html+ 'sections&nav_element',
								d4_file:		file_html+'/03-sections/04-nav_element.html',
								html5:		true,
							},
							{
								d4_nm:	'article element',
								d4_url:		url_html+ 'sections&article_element',
								d4_file:		file_html+'/03-sections/05-article_element.html',
								html5:		true,
							},
							{
								d4_nm:	'footer element',
								d4_url:		url_html+ 'sections&footer_element',
								d4_file:		file_html+'/03-sections/06-footer_element.html',
								html5:		true,
							},
							{
								d4_nm:	'aside element',
								d4_url:		url_html+ 'sections&aside_element',
								d4_file:		file_html+'/03-sections/07-aside_element.html',
								html5:		true,
							},
							{
								d4_nm:	'hgroup element',
								d4_url:		url_html+ 'sections&hgroup_element',
								d4_file:		file_html+'/03-sections/08-hgroup_element.html',
								html5:		true,
							},
						]
					},

					//콘텐츠 그룹화(Grouping content)
					{
						d3_nm:	'콘텐츠 그룹화(Grouping content)',
						d3_url:		url_html+'grouping&main_element',
						d3_file:		file_html+'/04-grouping/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	'main element',
								d4_url:		url_html+'grouping&main_element',
								d4_file:		file_html+'/04-grouping/01-main_element.html',
								html5:		true,
							},
							{
								d4_nm:	'p element',
								d4_url:		url_html+'grouping&p_element',
								d4_file:		file_html+'/04-grouping/02-p_element.html',
								html5:		false,
							},
							{
								d4_nm:	'ol element',
								d4_url:		url_html+'grouping&ol_element',
								d4_file:		file_html+'/04-grouping/03-ol_element.html',
								html5:		false,
							},
							{
								d4_nm:	'ul element',
								d4_url:		url_html+'grouping&ul_element',
								d4_file:		file_html+'/04-grouping/04-ul_element.html',
								html5:		false,
							},
							{
								d4_nm:	'li element',
								d4_url:		url_html+'grouping&li_element',
								d4_file:		file_html+'/04-grouping/05-li_element.html',
								html5:		false,
							},
							{
								d4_nm:	'dl element',
								d4_url:		url_html+'grouping&dl_element',
								d4_file:		file_html+'/04-grouping/06-dl_element.html',
								html5:		false,
							},
							{
								d4_nm:	'dt element',
								d4_url:		url_html+'grouping&dt_element',
								d4_file:		file_html+'/04-grouping/07-dt_element.html',
								html5:		false,
							},
							{
								d4_nm:	'dd element',
								d4_url:		url_html+'grouping&dd_element',
								d4_file:		file_html+'/04-grouping/08-dd_element.html',
								html5:		false,
							},
							{
								d4_nm:	'address element',
								d4_url:		url_html+'grouping&address_element',
								d4_file:		file_html+'/04-grouping/09-address_element.html',
								html5:		true,
							},
							{
								d4_nm:	'figure element',
								d4_url:		url_html+'grouping&figure_element',
								d4_file:		file_html+'/04-grouping/10-figure_element.html',
								html5:		true,
							},
							{
								d4_nm:	'figcaption element',
								d4_url:		url_html+'grouping&figcaption_element',
								d4_file:		file_html+'/04-grouping/11-figcaption_element.html',
								html5:		true,
							},
							{
								d4_nm:	'pre element',
								d4_url:		url_html+'grouping&pre_element',
								d4_file:		file_html+'/04-grouping/12-pre_element.html',
								html5:		false,
							},
							{
								d4_nm:	'blockquote element',
								d4_url:		url_html+'grouping&blockquote_element',
								d4_file:		file_html+'/04-grouping/13-blockquote_element.html',
								html5:		false,
							},
						]
					},

					//문자 컨텐츠(Text-level semantics)
					{
						d3_nm:	'문자 컨텐츠(Text-level semantics)',
						d3_url:		url_html+'textLevel&a_element',
						d3_file:		file_html+'/05-textLevel/textLevel.html',
						d4:[
							{
								d4_nm:	'a element',
								d4_url:		url_html+'textLevel&a_element',
								d4_file:		file_html+'/05-textLevel/01-a_element.html',
								html5:		false,
							},
							{
								d4_nm:	'em element',
								d4_url:		url_html+'textLevel&em_element',
								d4_file:		file_html+'/05-textLevel/02-em_element.html',
								html5:		false,
							},
							{
								d4_nm:	'i element',
								d4_url:		url_html+'textLevel&i_element',
								d4_file:		file_html+'/05-textLevel/03-i_element.html',
								html5:		false,
							},
							{
								d4_nm:	'strong element',
								d4_url:		url_html+'textLevel&strong_element',
								d4_file:		file_html+'/05-textLevel/04-strong_element.html',
								html5:		false,
							},
							{
								d4_nm:	'b element',
								d4_url:		url_html+'textLevel&b_element',
								d4_file:		file_html+'/05-textLevel/05-b_element.html',
								html5:		false,
							},
							{
								d4_nm:	'br element',
								d4_url:		url_html+'textLevel&br_element',
								d4_file:		file_html+'/05-textLevel/06-br_element.html',
								html5:		false,
							},
							{
								d4_nm:	'small element',
								d4_url:		url_html+'textLevel&small_element',
								d4_file:		file_html+'/05-textLevel/07-small_element.html',
								html5:		false,
							},
							{
								d4_nm:	's element',
								d4_url:		url_html+'textLevel&s_element',
								d4_file:		file_html+'/05-textLevel/08-s_element.html',
								html5:		false,
							},
							{
								d4_nm:	'cite element',
								d4_url:		url_html+'textLevel&cite_element',
								d4_file:		file_html+'/05-textLevel/09-cite_element.html',
								html5:		false,
							},
							{
								d4_nm:	'sub element',
								d4_url:		url_html+'textLevel&sub_element',
								d4_file:		file_html+'/05-textLevel/10-sub_element.html',
								html5:		false,
							},
							{
								d4_nm:	'sup element',
								d4_url:		url_html+'textLevel&sup_element',
								d4_file:		file_html+'/05-textLevel/11-sup_element.html',
								html5:		false,
							},
							{
								d4_nm:	'mark element',
								d4_url:		url_html+'textLevel&mark_element',
								d4_file:		file_html+'/05-textLevel/12-mark_element.html',
								html5:		false,
							},
							{
								d4_nm:	'q element',
								d4_url:		url_html+'textLevel&q_element',
								d4_file:		file_html+'/05-textLevel/13-q_element.html',
								html5:		false,
							},
							{
								d4_nm:	'code element',
								d4_url:		url_html+'textLevel&code_element',
								d4_file:		file_html+'/05-textLevel/14-code_element.html',
								html5:		false,
							},
							{
								d4_nm:	'var element',
								d4_url:		url_html+'textLevel&var_element',
								d4_file:		file_html+'/05-textLevel/15-var_element.html',
								html5:		false,
							},
							{
								d4_nm:	'abbr element',
								d4_url:		url_html+'textLevel&abbr_element',
								d4_file:		file_html+'/05-textLevel/16-abbr_element.html',
								html5:		false,
							},
							{
								d4_nm:	'data element',
								d4_url:		url_html+'textLevel&data_element',
								d4_file:		file_html+'/05-textLevel/17-data_element.html',
								html5:		true,
							},
							{
								d4_nm:	'time element',
								d4_url:		url_html+'textLevel&time_element',
								d4_file:		file_html+'/05-textLevel/18-time_element.html',
								html5:		true,
							},
							{
								d4_nm:	'samp element',
								d4_url:		url_html+'textLevel&samp_element',
								d4_file:		file_html+'/05-textLevel/19-samp_element.html',
								html5:		false,
							},
							{
								d4_nm:	'kbd element',
								d4_url:		url_html+'textLevel&kbd_element',
								d4_file:		file_html+'/05-textLevel/20-kbd_element.html',
								html5:		false,
							},
							{
								d4_nm:	'bdi element',
								d4_url:		url_html+'textLevel&bdi_element',
								d4_file:		file_html+'/05-textLevel/21-bdi_element.html',
								html5:		true,
							},
							{
								d4_nm:	'bdo element',
								d4_url:		url_html+'textLevel&bdo_element',
								d4_file:		file_html+'/05-textLevel/22-bdo_element.html',
								html5:		false,
							},
							{
								d4_nm:	'wbr element',
								d4_url:		url_html+'textLevel&wbr_element',
								d4_file:		file_html+'/05-textLevel/23-wbr_element.html',
								html5:		true,
							},
							{
								d4_nm:	'ruby element',
								d4_url:		url_html+'textLevel&ruby_element',
								d4_file:		file_html+'/05-textLevel/24-ruby_element.html',
								html5:		true,
							},
						]
					},

					//내장 컨텐츠(Embedded content)
					{
						d3_nm:	'내장 컨텐츠(Embedded content)',
						d3_url:		url_html+'embedded&iframe_element',
						d3_file:		file_html+'/06-embedded/embedded.html',
						d4:[
							{
								d4_nm:	'iframe element',
								d4_url:		url_html+'embedded&iframe_element',
								d4_file:		file_html+'/06-embedded/01-iframe_element.html',
								html5:		false,
							},
							{
								d4_nm:	'img element',
								d4_url:		url_html+'embedded&img_element',
								d4_file:		file_html+'/06-embedded/02-img_element.html',
								html5:		false,
							},
							{
								d4_nm:	'map element',
								d4_url:		url_html+'embedded&map_element',
								d4_file:		file_html+'/06-embedded/03-map_element.html',
								html5:		false,
							},
							{
								d4_nm:	'area element',
								d4_url:		url_html+'embedded&area_element',
								d4_file:		file_html+'/06-embedded/04-area_element.html',
								html5:		false,
							},
							{
								d4_nm:	'video element',
								d4_url:		url_html+'embedded&video_element',
								d4_file:		file_html+'/06-embedded/05-video_element.html',
								html5:		true
							},
							{
								d4_nm:	'audio element',
								d4_url:		url_html+'embedded&audio_element',
								d4_file:		file_html+'/06-embedded/06-audio_element.html',
								html5:		true,
							},
							{
								d4_nm:	'track element',
								d4_url:		url_html+'embedded&track_element',
								d4_file:		file_html+'/06-embedded/07-track_element.html',
								html5:		true,
							},
							{
								d4_nm:	'picture element',
								d4_url:		url_html+'embedded&picture_element',
								d4_file:		file_html+'/06-embedded/08-picture_element.html',
								html5:		true,
							},
							{
								d4_nm:	'source element',
								d4_url:		url_html+'embedded&source_element',
								d4_file:		file_html+'/06-embedded/09-source_element.html',
								html5:		true,
							},
							{
								d4_nm:	'svg element',
								d4_url:		url_html+'embedded&svg_element',
								d4_file:		file_html+'/06-embedded/10-svg_element.html',
								html5:		false,
							},
							{
								d4_nm:	'embed element',
								d4_url:		url_html+'embedded&embed_element',
								d4_file:		file_html+'/06-embedded/11-embed_element.html',
								html5:		false,
							},
							{
								d4_nm:	'object element',
								d4_url:		url_html+'embedded&object_element',
								d4_file:		file_html+'/06-embedded/12-object_element.html',
								html5:		false,
							},
							{
								d4_nm:	'param element',
								d4_url:		url_html+'embedded&param_element',
								d4_file:		file_html+'/06-embedded/13-param_element.html',
								html5:		false,
							},
						]
					},

					//수정(edits)
					{
						d3_nm:	'수정(edits)',
						d3_url:		url_html+'edits&del_element',
						d3_file:		file_html+'/07-edits/edits.html',
						d4:[
							{
								d4_nm:	'del(Deleted Text) element',
								d4_url:		url_html+'edits&del_element',
								d4_file:		file_html+'/07-edits/01-del_element.html',
								html5:		false,
							},
							{
								d4_nm:	'ins(insert) element',
								d4_url:		url_html+'edits&ins_element',
								d4_file:		file_html+'/07-edits/02-ins_element.html',
								html5:		false,
							},
						]
					},

					//표 데이터(Tabular data)
					{
						d3_nm:	'표 데이터(Tabular data)',
						d3_url:		url_html+'table&table_element',
						d3_file:		file_html+'/08-table/table.html',
						d4:[
							{
								d4_nm:	'table element',
								d4_url:		url_html+'table&table_element',
								d4_file:		file_html+'/08-table/01-table_element.html',
								html5:		false,
							},
							{
								d4_nm:	'caption element',
								d4_url:		url_html+'table&caption_element',
								d4_file:		file_html+'/08-table/02-caption_element.html',
								html5:		false,
							},
							{
								d4_nm:	'colgroup element',
								d4_url:		url_html+'table&colgroup_element',
								d4_file:		file_html+'/08-table/03-colgroup_element.html',
								html5:		false,
							},
							{
								d4_nm:	'col element',
								d4_url:		url_html+'table&col_element',
								d4_file:		file_html+'/08-table/04-col_element.html',
								html5:		false,
							},
							{
								d4_nm:	'thead element',
								d4_url:		url_html+'table&thead_element',
								d4_file:		file_html+'/08-table/05-thead_element.html',
								html5:		false,
							},
							{
								d4_nm:	'tbody element',
								d4_url:		url_html+'table&tbody_element',
								d4_file:		file_html+'/08-table/06-tbody_element.html',
								html5:		false,
							},
							{
								d4_nm:	'tfoot element',
								d4_url:		url_html+'table&tfoot_element',
								d4_file:		file_html+'/08-table/07-tfoot_element.html',
								html5:		false,
							},
							{
								d4_nm:	'tr element',
								d4_url:		url_html+'table&tr_element',
								d4_file:		file_html+'/08-table/08-tr_element.html',
								html5:		false,
							},
							{
								d4_nm:	'th element',
								d4_url:		url_html+'table&th_element',
								d4_file:		file_html+'/08-table/09-th_element.html',
								html5:		false,
							},
							{
								d4_nm:	'td element',
								d4_url:		url_html+'table&td_element',
								d4_file:		file_html+'/08-table/10-td_element.html',
								html5:		false,
							},
						]
					},

					//폼(forms)
					{
						d3_nm:	'폼(forms)',
						d3_url:		url_html+'forms&form_element',
						d3_file:		file_html+'/09-forms/forms.html',
						d4:[
							{
								d4_nm:	'form element',
								d4_url:		url_html+'forms&form_element',
								d4_file:		file_html+'/09-forms/01-form_element.html',
								html5:		false,
							},
							{
								d4_nm:	'label element',
								d4_url:		url_html+'forms&label_element',
								d4_file:		file_html+'/09-forms/02-label_element.html',
								html5:		false,
							},
							{
								d4_nm:	'input element',
								d4_url:		url_html+'forms&input_element',
								d4_file:		file_html+'/09-forms/03-input_element.html',
								html5:		false,
							},
							{
								d4_nm:	'button element',
								d4_url:		url_html+'forms&button_element',
								d4_file:		file_html+'/09-forms/04-button_element.html',
								html5:		false,
							},
							{
								d4_nm:	'select element',
								d4_url:		url_html+'forms&select_element',
								d4_file:		file_html+'/09-forms/05-select_element.html',
								html5:		false,
							},
							{
								d4_nm:	'optgroup element',
								d4_url:		url_html+'forms&optgroup_element',
								d4_file:		file_html+'/09-forms/06-optgroup_element.html',
								html5:		false,
							},
							{
								d4_nm:	'option element',
								d4_url:		url_html+'forms&option_element',
								d4_file:		file_html+'/09-forms/07-option_element.html',
								html5:		false,
							},
							{
								d4_nm:	'datalist element',
								d4_url:		url_html+'forms&datalist_element',
								d4_file:		file_html+'/09-forms/08-datalist_element.html',
								html5:		true,
							},
							{
								d4_nm:	'textarea element',
								d4_url:		url_html+'forms&textarea_element',
								d4_file:		file_html+'/09-forms/09-textarea_element.html',
								html5:		false,
							},
							{
								d4_nm:	'output element',
								d4_url:		url_html+'forms&output_element',
								d4_file:		file_html+'/09-forms/10-output_element.html',
								html5:		true,
							},
							{
								d4_nm:	'progress element',
								d4_url:		url_html+'forms&progress_element',
								d4_file:		file_html+'/09-forms/11-progress_element.html',
								html5:		true,
							},
							{
								d4_nm:	'meter element',
								d4_url:		url_html+'forms&meter_element',
								d4_file:		file_html+'/09-forms/12-meter_element.html',
								html5:		true,
							},
							{
								d4_nm:	'fieldset element',
								d4_url:		url_html+'forms&fieldset_element',
								d4_file:		file_html+'/09-forms/13-fieldset_element.html',
								html5:		false,
							},
							{
								d4_nm:	'legend element',
								d4_url:		url_html+'forms&legend_element',
								d4_file:		file_html+'/09-forms/14-legend_element.html',
								html5:		false,
							},
						]
					},

					//HTML 문서구조
					{
						d3_nm:	'HTML 문서구조',
						d3_url:		url_html+'structure&html4_document',
						d3_file:		file_html+'/10-structure/structure.html',
						d4:[
							{
								d4_nm:	'HTML4에서의 문서 구조',
								d4_url:		url_html+'structure&html4_document',
								d4_file:		file_html+'/10-structure/01-html4_document.html',
								html5:		false,
							},
							{
								d4_nm:	'HTML5에서의 문서 구조',
								d4_url:		url_html+'structure&html5_document',
								d4_file:		file_html+'/10-structure/02-html5_document.html',
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
				d2_url:		url_css+'cssStart&css_intro',
				d2_info:	file_css+ '/info.html',
				d3:[
					//CSS 시작하기
					{
						d3_nm:	'CSS 시작',
						d3_url:		url_css+'cssStart&css_intro',
						d3_file:		file_css+'/01-cssStart/cssStart.html',
						d4:[
							{
								d4_nm:	'CSS란?',
								d4_url:		url_css+'cssStart&css_intro',
								d4_file:		file_css+'/01-cssStart/01-css_intro.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS를 사용하는 이유?',
								d4_url:		url_css+'cssStart&css_reason',
								d4_file:		file_css+'/01-cssStart/02-css_reason.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS의 발전',
								d4_url:		url_css+'cssStart&css_history',
								d4_file:		file_css+'/01-cssStart/03-css_history.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 모듈과 표준화 과정',
								d4_url:		url_css+'cssStart&css_modules',
								d4_file:		file_css+'/01-cssStart/04-css_modules.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS의 문법',
								d4_url:		url_css+'cssStart&css_syntax',
								d4_file:		file_css+'/01-cssStart/05-css_syntax.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선언방식',
								d4_url:		url_css+'cssStart&css_apply',
								d4_file:		file_css+'/01-cssStart/06-css_apply.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 상속과 캐스케이딩',
								d4_url:		url_css+'cssStart&css_cascading',
								d4_file:		file_css+'/01-cssStart/07-css_cascading.html',
								html5:		false,
							},
						]
					},

					//CSS 초급
					{
						d3_nm:	'CSS 초급',
						d3_url:		url_css+'cssBeginner&css_units',
						d3_file:		file_css+'/02-cssBeginner/cssBeginner.html',
						d4:[
							{
								d4_nm:	'CSS 단위',
								d4_url:		url_css+'cssBeginner&css_units',
								d4_file:		file_css+'/02-cssBeginner/01-css_units.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선택자 level 1,2',
								d4_url:		url_css+'cssBeginner&css_selectors_level1',
								d4_file:		file_css+'/02-cssBeginner/02-css_selectors_level1.html',
								html5:		false,
							},
							{
								d4_nm:	'Color 속성',
								d4_url:		url_css+'cssBeginner&css_color',
								d4_file:		file_css+'/02-cssBeginner/03-css_color.html',
								html5:		false,
							},
							{
								d4_nm:	'Font 속성',
								d4_url:		url_css+'cssBeginner&css_font',
								d4_file:		file_css+'/02-cssBeginner/04-css_font.html',
								html5:		false,
							},
							{
								d4_nm:	'Text 속성',
								d4_url:		url_css+'cssBeginner&css_text',
								d4_file:		file_css+'/02-cssBeginner/05-css_text.html',
								html5:		false,
							},
							{
								d4_nm:	'Background 속성',
								d4_url:		url_css+'cssBeginner&css_background',
								d4_file:		file_css+'/02-cssBeginner/06-css_background.html',
								html5:		false,
							},
							{
								d4_nm:	'List 속성',
								d4_url:		url_css+'cssBeginner&css_list',
								d4_file:		file_css+'/02-cssBeginner/07-css_list.html',
								html5:		false,
							},
							{
								d4_nm:	'Table 속성',
								d4_url:		url_css+'cssBeginner&css_table',
								d4_file:		file_css+'/02-cssBeginner/08-css_table.html',
								html5:		false,
							},
							{
								d4_nm:	'박스 모델 속성',
								d4_url:		url_css+'cssBeginner&css_boxmodel',
								d4_file:		file_css+'/02-cssBeginner/09-css_boxmodel.html',
								html5:		false,
							},
							{
								d4_nm:	'시각적인 속성',
								d4_url:		url_css+'cssBeginner&css_effects',
								d4_file:		file_css+'/02-cssBeginner/10-css_effects.html',
								html5:		false,
							},
							{
								d4_nm:	'위치 속성',
								d4_url:		url_css+'cssBeginner&css_formatting',
								d4_file:		file_css+'/02-cssBeginner/11-css_formatting.html',
								html5:		false,
							},
							{
								d4_nm:	'사용자 인터페이스 속성',
								d4_url:		url_css+'cssBeginner&css_interface',
								d4_file:		file_css+'/02-cssBeginner/12-css_interface.html',
								html5:		false,
							},
						]
					},

					//CSS 중급
					{
						d3_nm:	'CSS 중급',
						d3_url:		url_css+'cssMiddleclass&css_selectors_level3',
						d3_file:		file_css+'/03-cssMiddleclass/cssMiddleclass.html',
						d4:[
							{
								d4_nm:	'CSS 선택자 level 3',
								d4_url:		url_css+'cssMiddleclass&css_selectors_level3',
								d4_file:		file_css+'/03-cssMiddleclass/01-css_selectors_level3.html',
								html5:		false,
							},
							{
								d4_nm:	'가상 요소',
								d4_url:		url_css+'cssMiddleclass&css_content',
								d4_file:		file_css+'/03-cssMiddleclass/02-css_content.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 카운터',
								d4_url:		url_css+'cssMiddleclass&css_counter',
								d4_file:		file_css+'/03-cssMiddleclass/03-css_counter.html',
								html5:		false,
							},
							{
								d4_nm:	'접두어',
								d4_url:		url_css+'cssMiddleclass&css_vendor',
								d4_file:		file_css+'/03-cssMiddleclass/04-css_vendor.html',
								html5:		false,
							},
							{
								d4_nm:	'IR 기법',
								d4_url:		url_css+'cssMiddleclass&css_ir',
								d4_file:		file_css+'/03-cssMiddleclass/05-css_ir.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS3 모듈',
								d4_url:		url_css+'cssMiddleclass&css_module3',
								d4_file:		file_css+'/03-cssMiddleclass/06-css_module3.html',
								html5:		false,
							},
							{
								d4_nm:	'@규칙(At-Rule)',
								d4_url:		url_css+'cssMiddleclass&css_atrule',
								d4_file:		file_css+'/03-cssMiddleclass/07-css_atrule.html',
								html5:		false,
							},
							{
								d4_nm:	'@font-face',
								d4_url:		url_css+'cssMiddleclass&css_fontface',
								d4_file:		file_css+'/03-cssMiddleclass/08-css_fontface.html',
								html5:		false,
							},
							{
								d4_nm:	'@media',
								d4_url:		url_css+'cssMiddleclass&css_media',
								d4_file:		file_css+'/03-cssMiddleclass/09-css_media.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 속성 선언순서',
								d4_url:		url_css+'cssMiddleclass&css_attr_rule',
								d4_file:		file_css+'/03-cssMiddleclass/10-css_attr_rule.html',
								html5:		false,
							},
						]
					},

					//CSS 고급
					{
						d3_nm:	'CSS 고급',
						d3_url:		url_css+'cssAdvanced&css_transform',
						d3_file:		file_css+'/04-cssAdvanced/cssAdvanced.html',
						d4:[
							/*
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
							*/
							{
								d4_nm:	'Transform',
								d4_url:		url_css+'cssAdvanced&css_transform',
								d4_file:		file_css+'/04-cssAdvanced/01-css_transform.html',
								html5:		false,
							},
							{
								d4_nm:	'Transition',
								d4_url:		url_css+'cssAdvanced&css_transition',
								d4_file:		file_css+'/04-cssAdvanced/02-css_transition.html',
								html5:		false,
							},
							{
								d4_nm:	'Animation',
								d4_url:		url_css+'cssAdvanced&css_animation',
								d4_file:		file_css+'/04-cssAdvanced/03-css_animation.html',
								html5:		false,
							},
							{
								d4_nm:	'플렉서블 박스 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_flexible',
								d4_file:		file_css+'/04-cssAdvanced/04-css_flexible.html',
								html5:		false,
							},
							{
								d4_nm:	'그리드 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_grid',
								d4_file:		file_css+'/04-cssAdvanced/05-css_grid.html',
								html5:		false,
							},
							{
								d4_nm:	'멀티 컬럼 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_multicolumn',
								d4_file:		file_css+'/04-cssAdvanced/06-css_multicolumn.html',
								html5:		false,
							},
							{
								d4_nm:	'CSS 선택자 level 4',
								d4_url:		url_css+'cssAdvanced&css_selectors_level4',
								d4_file:		file_css+'/04-cssAdvanced/07-css_selectors_level4.html',
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
				d2_info:	file_js+ '/info.html',
			},

			//ACCESSIBILITY --------------------------------------//
			{
				d2_nm:	'ACCESSIBILITY',
				//d2_url:		url_accessibility+'accessibility',
				d2_url:		'#',
				d2_info:	file_acc+ '/info.html',
			},

			//NCS ---------------------------------------------------//
			{
				d2_nm:	'NCS',
				//d2_url:		url_ncs+'ncs',
				d2_url:		'#',
				d2_info:	file_ncs+ '/info.html',
			},
		]
	},
	{
		d1_nm:	'Project GUIDE',
		//d1_url:		'?'+data+'=GUIDE',
		d1_url:		'#',
		d1_file:		file+ '/project_guide.html',
	},
	{
		d1_nm:	'Web Trends',
		//d1_url:		'?'+data+'=Trends',
		d1_url:		'#',
		d1_file:		file+ '/web_trends.html',
	}
];
//console.log( menu[0].d2[0].d3[0].d3_file );











