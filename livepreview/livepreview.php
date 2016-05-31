<?php

namespace BadabingBreda;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\load_on_builder' );

function load_on_builder () {
    if ( isset( $_GET['fl_builder'] ) ) {
		wp_enqueue_script( 'jscookie', BBLIVEPREVIEW_URL.'livepreview/includes/js.cookie.js' , array ( 'jquery' ) , '' , false );
		wp_enqueue_script( 'bblivepreview', BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.js' , array ( 'jquery' ) , '' , false );
		wp_enqueue_style( 'bblivepreview' , BBLIVEPREVIEW_URL.'livepreview/includes/livepreview.css', null, BBLIVEPREVIEW_VERSION , 'all' );
  }
}
