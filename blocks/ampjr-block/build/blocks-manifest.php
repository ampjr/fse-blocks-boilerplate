<?php
// This file is generated. Do not modify it manually.
return array(
	'ampjr-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/ampjr-block',
		'version' => '0.1.0',
		'title' => 'Ampjr Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Ampjr Block is a custom block for the AMP Jr theme.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'slides' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'ampjr-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
