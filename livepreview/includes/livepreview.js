( function ( $ ) {

	$( document ).ready ( function () {


		function toggle_livepreview() {
			if ( !isfullview ) {
				// remove the delagates
				FLBuilder._destroyOverlayEvents();

				// hide the bar
				$('.fl-builder-bar-content').css('display' , 'none');

				// remove the top margin
				$('html.fl-builder-edit').prop('style' , 'margin-top:0px !important;' );

				// remove any remaining highlights
				$('.fl-col-highlight .fl-col-content').prop('style', 'border-width: 0px;');

			} else {
				// activate the delegates
				FLBuilder._bindOverlayEvents();

				// show the bar
				$('.fl-builder-bar-content').css('display' , 'block');

				// reenable the top margin
				$('html.fl-builder-edit').prop('style' , '' );

				// enable highlights
				$('.fl-col-highlight .fl-col-content').prop('style', '');
			}
			// flip the class to change the icon
			$('#bblivepreview a').toggleClass('preview');

			// close the panel
			FLBuilder._closePanel();

			// set the global value of isfullview
			isfullview = !isfullview;
		}

		/**
		 * Toggle the state of the livepreview button
		 * @return void
		 */
		toggle_showlivepreview = function () {
			// get the checkbox state
			var ischecked = $('#butbblivepreview').prop('checked');

			// set the cookie to it's new value
			Cookies.set('bbshowlivepreview', ischecked );

			// determine if we need to show or hide the bblivepreview id
			if (ischecked) {
				$( '#bblivepreview' ).removeClass('hidden');
			} else {
				$( '#bblivepreview' ).addClass('hidden');
			}
		}
		/**
		 * Toggle the state of the quicksave button(s)
		 * @return void
		 */
		toggle_showquicksave = function () {
			// get the checkbox state
			var ischecked = $('#butbbquicksave').prop('checked');

			// set the cookie to it's new value
			Cookies.set('bbshowquicksave', ischecked );
			// determine if we need to show or hide the quicksave button(s)
			if (ischecked) {
				$( '#bbquicksave' ).removeClass('hidden');
			} else {
				$( '#bbquicksave' ).addClass('hidden');
			}
		}

		/**
		 * Toggle the state of the quicksave button(s)
		 * @return void
		 */
		toggle_showquicksaveob = function () {
			// get the checkbox state
			var ischecked = $('#butbbquicksaveob').prop('checked');

			// set the cookie to it's new value
			Cookies.set('bbshowquicksaveob', ischecked );
			// determine if we need to show or hide the quicksave button(s)
			if (ischecked) {
				$( '.fl-builder-quicksave-button' ).removeClass('hidden');
			} else {
				$( '.fl-builder-quicksave-button' ).addClass('hidden');
			}
		}

		/**
		 * Toggle the state of the quicksave button(s)
		 * @return void
		 */
		toggle_showcustomlayout = function () {
			// get the checkbox state
			var ischecked = $('#butbbcustomlayout').prop('checked');

			// set the cookie to it's new value
			Cookies.set('bbcustomlayout', ischecked );
			// determine if we need to show or hide the quicksave button(s)
			if (ischecked) {
				$( '.custom-layout-settings' ).removeClass('hidden');
			} else {
				$( '.custom-layout-settings' ).addClass('hidden');
			}
		}


		/**
		 * callback function for when the FLBuilder is done saving the layout
		 * @uses  _savereset
		 * @return void
		 */
		_savedone = function () {
			// add css-class to indicate save is made
			$('#bbquicksave,.fl-builder-quicksave-button').addClass('saved');
			// set timeout to remove the class
			setTimeout( _savereset , 2000 );
		}
		/**
		 * callback function for resetting the layout of the save buttons
		 * @return void
		 */
		_savereset = function () {
			$('#bbquicksave,.fl-builder-quicksave-button').removeClass('saved');
		}

		/**
		 * Save the layout to Wordpress
		 * @uses  _savedone
		 * @return void
		 */
		_Quicksave = function () {
			FLBuilder.showAjaxLoader();
			FLBuilder.ajax({
				action: 'save_layout'
			}, _savedone );

		}
		// Make sure the FLBuilderModel exists before calling anything
		if ( typeof FLBuilderModel != undefined ) {
			// init state for fullview
			var isfullview = false;
			// add the fixed layout buttons to the body
			$('<div id="bblivepreview"><a href="javascript:void(0);" title="' + bblp_lang.hide_editor + '"></a></div>').prependTo('body');

			$('<div id="bbquicksave"><a href="javascript:void(0);" title="' + bblp_lang.quicksave + '"></a></div>').prependTo('body');

			// add a Section to the Right Panel
			$.bbAddSection(
			{
				sectionid: 'LivePreview',
				sectionname: bblp_lang.LivePreview,
				order: 'last'
			}
			);

			// extend the panel, add to section LivePreview
			$.bbAddPanel({
				location: 'panel',
				sectionname: 'LivePreview',
				html: '<input type="checkbox" value="1" name="butbblivepreview" id="butbblivepreview" '+
						( ( Cookies.get('bbshowlivepreview')=='true')?'checked':'' ) +
						'><label for="butbblivepreview">' + bblp_lang.show_livepreview + '</label>',
				style: 'section'
			});

			// extend the panel, add to section LivePreview
			$.bbAddPanel({
				location: 'panel',
				sectionname: 'LivePreview',
				html: '<input type="checkbox" value="1" name="butbbquicksave" id="butbbquicksave" '+
					((Cookies.get('bbshowquicksave')=='true')?'checked':'')+
					'><label for="butbbquicksave">' + bblp_lang.show_quicksave + '</label>',
				style: 'section'
			});

			// extend the panel, add to section LivePreview
			$.bbAddPanel({
				location: 'panel',
				sectionname: 'LivePreview',
				html: '<input type="checkbox" value="1" name="butbbquicksaveob" id="butbbquicksaveob" '+
					((Cookies.get('bbshowquicksaveob')=='true')?'checked':'')+
					'><label for="butbbquicksaveob">' + bblp_lang.show_quicksave_onbar + '</label>',
				style: 'section'
			});

			// extend the panel, add to section LivePreview
			$.bbAddPanel({
				location: 'panel',
				sectionname: 'LivePreview',
				html: '<input type="checkbox" value="1" name="butbbcustomlayout" id="butbbcustomlayout" '+
					((Cookies.get('bbcustomlayout')=='true')?'checked':'')+
					'><label for="butbbcustomlayout">' + bblp_lang.show_customlayout + '</label>',
				style: 'section'
			});

			// extend the top bar
			$.bbAddPanel({
				location: 'bar',
				html: bblp_lang.quicksave,
				style: 'button',
				class:'fl-builder-quicksave-button'
			});

			// extend the top bar
			$.bbAddPanel({
				location: 'bar',
				html: bblp_lang.layout_settings ,
				style: 'button',
				class: 'custom-layout-settings'
			});

			// Add the delegates
			$('body').delegate('#bblivepreview', 'click', toggle_livepreview );
			$('body').delegate('#bbquicksave, .fl-builder-quicksave-button' , 'click' , _Quicksave );
			$('body').delegate('#butbblivepreview' , 'click' , toggle_showlivepreview );
			$('body').delegate('#butbbquicksave' , 'click' , toggle_showquicksave );
			$('body').delegate('#butbbquicksaveob' , 'click' , toggle_showquicksaveob );
			$('body').delegate('#butbbcustomlayout' , 'click' , toggle_showcustomlayout );
			$('body').delegate('.custom-layout-settings', 'click', FLBuilder._layoutSettingsClicked );

			// run toggles to determine the current state of the cookies and show/hide if needed
			toggle_showlivepreview();
			toggle_showquicksave();
			toggle_showquicksaveob();
			toggle_showcustomlayout();
		}
	});


}) ( jQuery );
