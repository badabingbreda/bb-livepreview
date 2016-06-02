( function ( $ ) {

	$( document ).ready ( function () {


		function toggle_livepreview() {
			if ( !isfullview ) {
				FLBuilder._destroyOverlayEvents();
				$('.fl-builder-bar-content').css('display' , 'none');
				$('html.fl-builder-edit').prop('style' , 'margin-top:0px !important;' );
				$('.fl-col-highlight .fl-col-content').prop('style', 'border-width: 0px;');
			} else {
				FLBuilder._bindOverlayEvents();
				$('.fl-builder-bar-content').css('display' , 'block');
				$('html.fl-builder-edit').prop('style' , '' );
				$('.fl-col-highlight .fl-col-content').prop('style', '');
			}
			$('#bblivepreview a').toggleClass('preview');
			FLBuilder._closePanel();
			isfullview = !isfullview;
		}

		toggle_showlivepreview = function () {
			var ischecked = $('#butbblivepreview').prop('checked');
			Cookies.set('bbshowlivepreview', ischecked );
			if (ischecked) { $( '#bblivepreview' ).removeClass('hidden'); } else { $( '#bblivepreview' ).addClass('hidden'); }
		}
		toggle_showquicksave = function () {
			var ischecked = $('#butbbquicksave').prop('checked');
			Cookies.set('bbshowquicksave', ischecked );
			if (ischecked) { $( '#bbquicksave' ).removeClass('hidden'); } else { $( '#bbquicksave' ).addClass('hidden'); }
		}

		_savedone = function () {
			$('#bbquicksave').addClass('saved');

			setTimeout( _savereset , 2000 );
		}

		_savereset = function () {
			$('#bbquicksave').removeClass('saved');
		}

		_Quicksave = function () {
			FLBuilder.showAjaxLoader();
			FLBuilder.ajax({
				action: 'save_layout'
			}, _savedone );

		}

		if ( typeof FLBuilderModel != undefined ) {
			var isfullview = false;
			$('<div id="bblivepreview"><a href="javascript:void(0);" title="Hide Editor"></a></div>').prependTo('body');
			$('<div class="fl-builder-panel-info fl-builder-blocks-section"><div class="fl-builder-blocks-section-title"><input type="checkbox" value="1" name="butbblivepreview" id="butbblivepreview" '+((Cookies.get('bbshowlivepreview')=='true')?'checked':'')+'><label for="butbblivepreview">Show Live Preview</label></div></div>').appendTo('div.fl-builder-panel-content');

			$('<div id="bbquicksave"><a href="javascript:void(0);" title="Quicksave"></a></div>').prependTo('body');
			$('<div class="fl-builder-panel-info fl-builder-blocks-section"><div class="fl-builder-blocks-section-title"><input type="checkbox" value="1" name="butbbquicksave" id="butbbquicksave" '+((Cookies.get('bbshowquicksave')=='true')?'checked':'')+'><label for="butbbquicksave">Show Quicksave button</label></div></div>').appendTo('div.fl-builder-panel-content');

			$('body').delegate('#bblivepreview', 'click', toggle_livepreview );
			$('body').delegate('#bbquicksave' , 'click' , _Quicksave );
			$('body').delegate('#butbblivepreview' , 'click' , toggle_showlivepreview );
			$('body').delegate('#butbbquicksave' , 'click' , toggle_showquicksave );

			toggle_showlivepreview();
			toggle_showquicksave();
		}
	});


}) ( jQuery );
