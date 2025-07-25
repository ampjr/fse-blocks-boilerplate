/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* eslint-disable no-console */
console.log("Hello World! (from ampjr block)");
/* eslint-enable no-console */

document.addEventListener("DOMContentLoaded", function () {
	const sliders = document.querySelectorAll(".ampjr-swiper-container");
	sliders.forEach((slider) => {
		console.log("Swiper on!");

		new Swiper(slider, {
			modules: [Navigation, Pagination],
			loop: true,
			centeredSlides: true,
			slidesPerView: 1,
			autoHeight: true,
			pagination: {
				el: slider.querySelector(".swiper-pagination"),
				clickable: true,
			},
			navigation: {
				nextEl: slider.querySelector(".swiper-button-next"),
				prevEl: slider.querySelector(".swiper-button-prev"),
			},
		});
	});
});
