<?php
/**
 * Plugin Name: Beaver Builder Live Preview and Quicksave
 * Plugin URI: http://www.badabing.nl
 * Description: By the press of a button view your layout as if you were on the frontend, not on the backend. Add a Quicksave button that allows you to stay on the same page and Provide easy access to CSS/Layout Settings by moving it to the top bar.
 * Version: 1.2.3
 * Author: Badabing
 * Author URI: http://www.badabing.nl
 * Text Domain: bb-livepreview
 * Domain Path: /languages
  */
define( 'BBLIVEPREVIEW_VERSION' , '1.2.3' );
define( 'BBLIVEPREVIEW_DIR', plugin_dir_path( __FILE__ ) );
define( 'BBLIVEPREVIEW_URL', plugins_url( '/', __FILE__ ) );

//textdomain
load_plugin_textdomain( 'bb-livepreview', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );

add_action( 'init', 'BBLIVEPREVIEW_plugin_start' );

function BBLIVEPREVIEW_plugin_start() {

  if ( class_exists( 'FLBuilder' ) ) {

       require_once ( 'livepreview/livepreview.php' );

  }

}

/**
 * UPDATER
 */

if( ! class_exists( 'Smashing_Updater' ) ){
	include_once( plugin_dir_path( __FILE__ ) . 'updater.php' );
}
$updater = new Smashing_Updater( __FILE__ );
$updater->set_username( 'badabingbreda' );
$updater->set_repository( 'bb-livepreview' );

$updater->initialize();


