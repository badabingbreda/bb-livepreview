<?php

namespace BadabingBreda;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\load_on_builder' );

function load_on_builder () {
    if ( isset( $_GET['fl_builder'] ) ) {
		wp_enqueue_script( 'jscookie', BBLIVEPREVIEW_URL.'livepreview/includes/js.cookie.js' , array ( 'jquery' ) , '' , false );
		wp_enqueue_script( 'bbpaneloptions', BBLIVEPREVIEW_URL.'livepreview/includes/jquery.bbpaneloptions.js' , array ( 'jquery' ) , '' , false );
		wp_enqueue_script( 'bblivepreview', BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.js' , array ( 'jquery' ) , '' , false );
		wp_enqueue_style( 'bblivepreview' , BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.css', null, BBLIVEPREVIEW_VERSION , 'all' );

		wp_localize_script('bblivepreview', 'bblp_lang', array(
					'hide_editor'		=>	__( 'Show/Hide Editor', 'bb-livepreview' ),
					'quicksave'			=>	__( 'Quicksave', 'bb-livepreview' ),
					'show_livepreview'	=>	__('Show Live Preview', 'bb-livepreview' ),
					'show_quicksave'	=>	__('Show Quicksave button', 'bb-livepreview' ),
					'layout_settings'	=>	__('Layout Settings', 'fl-builder')					// get this from the beaver builder translations file
				)
		);
  }
}
