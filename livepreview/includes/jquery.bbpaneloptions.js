/*! BeaverBuilder Add Panel Option for jQuery v1.00
 * http://www.badabing.nl/jquery-plugins/beaverbuilder-paneloptions/
 * Do not remove any of this notice (you're welcome to use this code in commercial projects)
 * Copyright (c) 2016 Didou Schol www.badabing.nl
 * Licensed under the MIT license */

( function ( $ ) {
		$.extend ({
			bbAddPanel: function ( options ) {
		        // DEFAULT OPTIONS
		        var settings = $.extend({
		            html: null,					// the html to insert or button text
		            location: 'panel',			// panel (to the left) | bar (top)
		            position: 'after',			// determine where to add the html or button
		            target: null,				//
		            style: 'section',
		            class: ''					// button
		        }, options );

		        // return early when nothing to insert
		        if (settings.html == null || settings.location == '' ) {
		        	return this;
		        }
		        if ( settings.location == 'panel' ) {

		        	// if target not set in options base it on location
		        	if ( !settings.target ) settings.target = 'div.fl-builder-panel-content';

		        } else if ( settings.location == 'bar' ) {

		        	// if target not set in options base it on location
		        	if ( !settings.target ) settings.target = 'div.fl-builder-bar-actions span:nth-last-of-type(2)';
		        	// reset position to insert after
		        	settings.position = 'insertafter';
		        }

		        // if style is set to button change the behavior and asume the html is the button text
		        if ( settings.style == 'button' ) {
		        	settings.html = '<span class="'+ settings.class + ' fl-builder-button">' + settings.html + '</span>';
		        } else if (settings.style == 'section' ) {
		        	settings.html = '<div class="fl-builder-panel-info fl-builder-blocks-section"><div class="fl-builder-blocks-section-title custom-section">' +
		        	settings.html + '</div></div>';
		        }

		        if ( settings.position == 'after' ) {
			        $( settings.html ).appendTo( settings.target );
		        } else if (settings.position == 'before' ) {
			        $( settings.html ).prependTo( settings.target );
		        } else if (settings.position == 'insertafter' ) {
		        	$ (settings.html ).insertAfter( settings.target );
		        }
		        return this;

			}
		});
} ( jQuery ));
