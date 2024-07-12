const ImageMapper = (path) => {
	try {
		return `${path}`;
	} catch (err) {
		console.error(`Image not found: ${path}`);
		return '/img/default.jpg';
	}
};

export default ImageMapper;
