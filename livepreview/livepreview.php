<?php
/**
 * livepreview.php
 *
 * @package Beaver Builder Live Preview and Quicksave
 * @since 1.2.1
 * @author badabingbreda
 * @link http://www.badabing.nl
 * @license GNU General Public License 2.0+
 */

namespace BadabingBreda;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\load_on_builder' );

function load_on_builder () {
	// only when in builder editor mode
    if ( isset( $_GET['fl_builder'] ) ) {
    	// add the cookie script
		wp_enqueue_script( 'jscookie', BBLIVEPREVIEW_URL.'livepreview/includes/js.cookie.js' , array ( 'jquery' ) , BBLIVEPREVIEW_VERSION , false );

		//add paneloptions plugin
		wp_enqueue_script( 'bbpaneloptions', BBLIVEPREVIEW_URL.'livepreview/includes/jquery.bbpaneloptions.js' , array ( 'jquery' ) , BBLIVEPREVIEW_VERSION , false );

		// add the actual plugin
		wp_enqueue_script( 'bblivepreview', BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.js' , array ( 'jquery' ) , BBLIVEPREVIEW_VERSION , false );

		// css for this plugin
		wp_enqueue_style( 'bblivepreview' , BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.css', null, BBLIVEPREVIEW_VERSION , 'all' );

		// load the translations for the javascript
		wp_localize_script('bblivepreview', 'bblp_lang', array(
					'hide_editor'			=>	__( 'Show/Hide Editor', 'bb-livepreview' ),				// left button text
					'quicksave'				=>	__( 'Quicksave', 'bb-livepreview' ),					// left button text
					'LivePreview'			=>	__( 'Live Preview', 'bb-livepreview' ),					// section name
					'show_livepreview'		=>	__('Show Live Preview', 'bb-livepreview' ),				// checkbox text
					'show_quicksave'		=>	__('Show Quicksave button', 'bb-livepreview' ),			// checkbox text
					'show_quicksave_onbar'	=>	__('Show Quicksave on Bar', 'bb-livepreview'),			// checkbox text
					'show_customlayout'		=>	__('Show Quick Layout button', 'bb-livepreview' ),		// checkbox text
					'layout_settings'		=>	__('Layout Settings', 'fl-builder'),					// get this from the beaver builder translations file
				)
		);
  }
}
