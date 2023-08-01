let images = document.getElementsByTagName('img');
// console.log(images);

function replaceImg() {
	for (let i = 0; i < images.length; i++) {
		if (images[i].src.includes('images/desktop/')) {
			images[i].src = images[i].src.replace('images/desktop/', 'images/mobile/');
		}
	}
}

if (window.screen.width <= 768) {
	replaceImg();
}

// if (window.matchMedia("(min-width: 992px)").matches) {
// 	replaceImg();

// 	console.log(window.matchMedia);
// }
