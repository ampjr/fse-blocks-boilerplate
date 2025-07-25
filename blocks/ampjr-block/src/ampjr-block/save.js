import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { slides = [] } = attributes;
	return (
		<div {...useBlockProps.save()} className="ampjr-swiper-container swiper">
			<div className="swiper-wrapper">
				{slides.map((url, i) => (
					<div className="swiper-slide" key={i}>
						<img
							src={url}
							alt={`Slide ${i + 1}`}
							style={{ maxWidth: "100%" }}
						/>
					</div>
				))}
			</div>
			<div className="swiper-pagination"></div>
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
		</div>
	);
}
