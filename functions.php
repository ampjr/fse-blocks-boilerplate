<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package amp-jr
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function amp_jr_styles() {

	// Fonts 
	wp_enqueue_style('roboto-font', '//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap', array(), '1.0'); 
	// Main CSS
	wp_enqueue_style( 'ampjr-style', get_template_directory_uri() .'/css/app.css', array(), '1.0.' ); 

	wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', [], '11.0.0' 
	);
	
}
add_action( 'wp_enqueue_scripts', 'amp_jr_styles' );

/**
 * Add a meta description tag to the head
 */
function add_meta_description() {
	if (is_single() || is_page() || is_home()) {
			$meta_description = get_the_excerpt(); 
			echo '<meta name="description" content="' . esc_attr($meta_description) . '">';
	}
}
add_action('wp_head', 'add_meta_description', 1);

/**
 * Remove WordPress version from HTML source for security
 */
function amp_jr_remove_wp_version() {
	return '';
}
add_filter('the_generator', 'amp_jr_remove_wp_version');


/**
 * Register AMP blocks. 
 */

function create_block_ampjr_block_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/blocks/ampjr-block/build', __DIR__ . '/blocks/ampjr-block/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/blocks/ampjr-block/build', __DIR__ . '/blocks/ampjr-block/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/blocks/ampjr-block/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/blocks/ampjr-block/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_ampjr_block_block_init' );