import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { slides = [] } = attributes;

	const addSlide = (media) => {
		setAttributes({ slides: [...slides, media.url] });
	};

	const removeSlide = (index) => {
		setAttributes({ slides: slides.filter((_, i) => i !== index) });
	};

	const editSlide = (index, media) => {
		const newSlides = [...slides];
		newSlides[index] = media.url;
		setAttributes({ slides: newSlides });
	};

	return (
		<div {...useBlockProps()}>
			<h4>{__("Slider Block", "ampjr-block")}</h4>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={addSlide}
					allowedTypes={["image"]}
					render={({ open }) => (
						<Button onClick={open} isPrimary>
							{__("Add Slide", "ampjr-block")}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			<div className="ampjr-slider-preview">
				{slides.map((url, i) => (
					<div key={i} style={{ position: "relative", marginBottom: "1em" }}>
						<Button
							isDestructive
							variant="secondary"
							onClick={() => removeSlide(i)}
							style={{
								position: "absolute",
								top: 0,
								right: 0,
								zIndex: 100,
							}}
						>
							Remove
						</Button>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => editSlide(i, media)}
								allowedTypes={["image"]}
								render={({ open }) => (
									<Button
										onClick={open}
										variant="secondary"
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											zIndex: 100,
										}}
									>
										Edit
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<img
							src={url}
							alt={`Slide ${i + 1}`}
							style={{ maxWidth: "100%" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
