// sticky to filter favorite
// =========================

const secFavorite = document.getElementById('section-favorites'),
	favFilter = document.getElementById('favFilter'),
	libContent = document.getElementById('library-content');

const favFilterPosition = secFavorite.offsetTop + libContent.offsetTop;

window.onscroll = () => {
	if (window.scrollY > favFilterPosition) {
		favFilter.classList.add('sticky');
	} else {
		favFilter.classList.remove('sticky');
	}
}

// Library animation
// =========================
const formFiltr = document.forms.filterSeason,
	filterItems = document.querySelector('.filter_items'),
	itemsRadio = formFiltr.season,
	sectionSeason = libContent.querySelectorAll('[data-season]');

// let active = formFiltr.querySelector("[name=season]:checked");
// console.log(active);
// active.removeAttribute("checked");

// console.log(formFiltr);
// console.log(filterItems);
// console.log(itemsRadio);
// console.log(sectionSeason);

// filterItems.addEventListener('click', (e) => {
// 	let season = e.target.value,
// 		toShowElement = libContent.querySelector('[data-season="' + season + '"]');

// 	if (season) {
// 		sectionSeason.forEach((item => {
// 			item.classList.remove('fadeIn');
// 			item.classList.add('fadeOut');
// 			toShowElement.classList.remove('hide', 'fadeOut');
// 			toShowElement.classList.add('fadeIn');

// 			// item.addEventListener('animationend', () => {
// 			// 	item.classList.add('hide');

// 			// });
// 		}));
// 	}



// });

// ## alternate function without animation
filterItems.addEventListener('click', (e) => {
	season = e.target.value;
	// console.log(season);
	sectionSeason.forEach(element => {
		if (element.dataset.season === season) {
			element.classList.remove('hide');
			element.classList.add('show');
		} else {
			element.classList.remove('show');
			element.classList.add('hide');
		}
	});
});