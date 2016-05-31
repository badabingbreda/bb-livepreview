( function ( $ ) {

	$( document ).ready ( function () {


		function toggle_fullview() {
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
			$('#bbshowfull a').toggleClass('full');
			FLBuilder._closePanel();
			isfullview = !isfullview;
		}

		if ( typeof FLBuilderModel != undefined ) {
			var isfullview = false;
			$('<div id="bbshowfull"><a href="javascript:void(0);" title="Hide Editor"></a></div>').prependTo('.fl-page');
			$('<div id="bbquicksave"><a href="javascript:void(0);" title="Quicksave"></a></div>').prependTo('.fl-page');

			$('.fl-page').delegate('#bbshowfull', 'click', toggle_fullview );
			$('.fl-page').delegate('#bbquicksave' , 'click' , FLBuilder._publishButtonClicked );
		}
	});


}) ( jQuery );
